import { serve } from "https://deno.land/std@0.125.0/http/server.ts";

const PORT = 8080;
const ToIndexPaths = ["/", "/counter", "/todo"];
const decoder = new TextDecoder();

const getContentType = (pathname: string): string => {
  const extension = pathname.substring(pathname.lastIndexOf(".") + 1);
  switch (extension) {
    case "html":
      return "text/html";
    case "js":
      return "text/javascript";
    case "png":
      return "image/png";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "ico":
      return "image/x-icon";
    default:
      return "application/octet-stream";
  }
};

const handler = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  const pathname = ToIndexPaths.find((p) => p === url.pathname) != null
    ? "/index.html"
    : url.pathname;

  const fileData = await Deno.readFile(`./${pathname}`).catch(() => null);
  if (fileData != null) {
    const contentType = getContentType(pathname);
    const body = contentType.startsWith("text/")
      ? decoder.decode(fileData)
      : fileData;
    return new Response(body, {
      headers: {
        "content-type": contentType,
      },
    });
  }

  return new Response(null, { status: 404 });
};

console.log(`Listening on http://localhost:${PORT}/`);
await serve(handler, { port: PORT });
