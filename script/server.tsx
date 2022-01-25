import React from "https://esm.sh/react";
// https://ja.reactjs.org/docs/react-dom-server.html
import ReactDOMServer from "https://esm.sh/react-dom/server.js";
import { serve } from "https://deno.land/std@0.122.0/http/server.ts";

const decoder = new TextDecoder();

interface Options {
  port?: number;
}

export const httpServer = async (options: Options = {}) => {
  const PORT: number = options.port ?? 8080;

  const handler = async (request: Request): Promise<Response> => {
    const { pathname } = new URL(request.url);

    const fileData = await Deno.readFile(pathname.substring(1)).catch(() => null);
    if (fileData != null) {
      return new Response(decoder.decode(fileData), {
        headers: {
          "content-type": "text/javascript",
        },
      });
    }

    switch (pathname) {
      case "/":
        return new Response(
          ReactDOMServer.renderToStaticMarkup(
            <html>
            <head>
              <title>Hello, deno!</title>
            </head>
            <body>
              <div id="react-root"/>
              <script src="/public/bundle.js"/>
            </body>
            </html>,
          ),
          {
            headers: { "Content-Type": "text/html; charset=utf-8" },
          },
        );
    }

    return new Response(null, { status: 404 });
  };

  // https://zenn.dev/mryhryki/articles/2022-01-03-http-server-on-deno
  console.log(`Listening on http://localhost:${PORT}/`);
  await serve(handler, { port: PORT });
};
