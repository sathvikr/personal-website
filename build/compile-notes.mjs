import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import fg from "fast-glob";
import MarkdownIt from "markdown-it";
import texmath from "markdown-it-texmath";
import katex from "katex";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const katexCdn = "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})
  .use(texmath, {
    engine: katex,
    delimiters: "dollars",
    katexOptions: {
      throwOnError: false,
    },
  });

// Wrap tables so a table wider than the column scrolls on its own instead of
// widening the whole page. The table element itself is left alone.
md.renderer.rules.table_open = () => '<div class="table-scroll">\n<table>\n';
md.renderer.rules.table_close = () => "</table>\n</div>\n";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const nav = (level) => {
  const p = level === 0 ? "" : "../";
  return `<nav class="site-nav" aria-label="Main">
    <a href="${p}index.html">home</a><span class="sep">|</span>
    <a href="${p}books.html">books</a><span class="sep">|</span>
    <a href="${p}notes.html">notes</a><span class="sep">|</span>
    <a href="${p}contact.html">contact</a>
  </nav>`;
};

const toYmd = (v) => {
  if (v instanceof Date) {
    const y = v.getUTCFullYear();
    const m = String(v.getUTCMonth() + 1).padStart(2, "0");
    const d = String(v.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  if (typeof v === "string" && /^\d{4}-\d{2}-\d{2}/.test(v)) return v.slice(0, 10);
  return null;
};

const ymdToLong = (ymd) => {
  if (!ymd) return "";
  const [Y, M, D] = ymd.split("-").map((x) => parseInt(x, 10));
  const t = new Date(Y, M - 1, D);
  if (Number.isNaN(t.getTime())) return ymd;
  return t.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};

const formatDateLong = (d) => ymdToLong(toYmd(d) ?? String(d).slice(0, 10));

const readNotes = async () => {
  const files = await fg("**/*.md", {
    cwd: path.join(root, "content/notes"),
    onlyFiles: true,
  });
  const list = files.filter(
    (f) => f !== "FORMAT.md" && !path.basename(f).startsWith("_")
  );
  const items = await Promise.all(
    list.map(async (rel) => {
      const full = path.join(root, "content/notes", rel);
      const raw = await fs.readFile(full, "utf8");
      const { data, content } = matter(raw);
      const base = path.basename(rel, ".md");
      const slug = typeof data.slug === "string" && data.slug ? data.slug : base;
      const title =
        typeof data.title === "string" && data.title
          ? data.title
          : base.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/-/g, " ");
      let date = toYmd(data.date);
      if (!date) {
        const m = base.match(/^(\d{4}-\d{2}-\d{2})/);
        date = m ? m[1] : "1970-01-01";
      }
      return {
        file: rel,
        base,
        slug,
        title,
        date,
        content,
        data,
      };
    })
  );
  items.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  return items;
};

const cssVersion = async () => {
  try {
    const st = await fs.stat(path.join(root, "styles.css"));
    return Math.floor(st.mtimeMs);
  } catch {
    return Date.now();
  }
};

const buildNotesPage = (items, cssVer) => {
  const blocks = items
    .map((it, i) => {
      const bodyHtml = md.render(it.content);
      const long = formatDateLong(it.date);
      const sid = it.slug;
      const titleId = `title-${sid}`;
      const sourceHtml = it.data.source
        ? `\n    <p class="note-source">${md.renderInline(String(it.data.source))}</p>`
        : "";
      const sec = `  <section class="note-block" id="${sid}" aria-labelledby="${titleId}">
    <h2 class="note-inline-title" id="${titleId}">${esc(
        it.title
      )}<a class="note-permalink" href="#${sid}" aria-label="Copy link to this note" title="Copy link to this note"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></a></h2>
    <p class="note-inline-date">${esc(long)}</p>${sourceHtml}
    <div class="note-body">
${bodyHtml}
    </div>
  </section>`;
      const after =
        i < items.length - 1 ? "\n  <hr class=\"note-sep\" aria-hidden=\"true\">\n" : "";
      return sec + after;
    })
    .join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Notes — Sathvik Redrouthu</title>
  <link rel="stylesheet" href="styles.css?v=${cssVer}">
  <link rel="stylesheet" href="${katexCdn}" crossorigin="anonymous">
</head>
<body>
  ${nav(0)}

  <main class="note-index">
    <h1>Notes</h1>
${blocks}
  </main>
  <script>
  document.addEventListener("click", function (e) {
    var a = e.target.closest(".note-permalink");
    if (!a) return;
    e.preventDefault();
    var hash = a.getAttribute("href");
    var url = location.origin + location.pathname + hash;
    if (history.replaceState) history.replaceState(null, "", hash);
    function flash() {
      a.classList.add("copied");
      setTimeout(function () { a.classList.remove("copied"); }, 1200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(flash, flash);
    } else {
      flash();
    }
  });
  </script>
</body>
</html>
`;
};

async function main() {
  const items = await readNotes();
  const cssVer = await cssVersion();
  const pageHtml = buildNotesPage(items, cssVer);
  await fs.writeFile(path.join(root, "notes.html"), pageHtml, "utf8");
  console.log(`Wrote notes.html with ${items.length} note(s)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
