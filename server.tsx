import React from "https://esm.sh/react";
// https://ja.reactjs.org/docs/react-dom-server.html
import ReactDOMServer from "https://esm.sh/react-dom/server.js";
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

const PORT = 8080;

const handler = async (request: Request): Promise<Response> => {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/dist/")) {
    const data = await Deno.readFile(pathname.substring(1));
    const decoder = new TextDecoder();
    return new Response(decoder.decode(data), {
      headers: {
        "content-type": "text/javascript",
      },
    });
  }

  return new Response(
    ReactDOMServer.renderToStaticMarkup(
      <html>
        <head>
          <title>Hello, deno!</title>
        </head>
        <body>
          <div id="react-root" />
          <script src="/dist/bundle.js" />
        </body>
      </html>,
    ),
    {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    },
  );
};

// https://zenn.dev/mryhryki/articles/2022-01-03-http-server-on-deno
console.log(`Listening on http://localhost:${PORT}/`);
await serve(handler, { addr: `:${PORT}` });
