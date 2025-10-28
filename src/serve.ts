import { marked } from "marked";
import { serveDir } from "@std/http";
import { basename } from "@std/path";

import { generateHtml } from "./utils.ts";

const PORT = 5566;

function serve() {
  console.log("📝 Watching README.md for changes...");

  Deno.serve({ port: PORT }, async (req) => {
    const url = new URL(req.url);
    if (url.pathname === "/" || url.pathname === "/index.html") {
      try {
        const markdown = await Deno.readTextFile("./README.md");
        const html = await marked.parse(markdown);

        const currentDir = Deno.cwd();
        const title = basename(currentDir);

        const fullHtml = generateHtml(html, title);

        return new Response(fullHtml, {
          headers: {
            "content-type": "text/html; charset=utf-8",
          },
        });
      } catch (error) {
        return new Response(`${error}`, {
          status: 500,
        });
      }
    }

    return serveDir(req);
  });
}

if (import.meta.main) {
  serve();
}
