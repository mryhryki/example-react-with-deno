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
    default:
      return "application/octet-stream";
  }
};

const handler = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  const pathname = ToIndexPaths.find((p) => p === url.pathname) != null
    ? "/index.html"
    : url.pathname;

  const fileData = await Deno.readFile(`./dist/${pathname}`).catch(() => null);
  if (fileData != null) {
    return new Response(decoder.decode(fileData), {
      headers: {
        "content-type": getContentType(pathname),
      },
    });
  }

  return new Response(null, { status: 404 });
};

console.log(`Listening on http://localhost:${PORT}/`);
await serve(handler, { port: PORT });
