import { marked } from "marked";
import { ensureDir } from "@std/fs";
import { basename } from "@std/path";

import { generateHtml } from "./utils.ts";

async function build() {
  console.log("🔨 Building site...");

  const markdown = await Deno.readTextFile("./README.md");
  const html = await marked.parse(markdown);

  const currentDir = Deno.cwd();
  const title = basename(currentDir);

  const fullHtml = generateHtml(html, title);

  await ensureDir("./dist");
  await Deno.writeTextFile("./dist/index.html", fullHtml);

  console.log("✅ Build complete!");
}

if (import.meta.main) {
  await build();
}
