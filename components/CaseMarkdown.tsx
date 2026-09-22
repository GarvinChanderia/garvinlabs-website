import type { ReactNode } from "react";

// Minimal markdown renderer for the Connector case studies in content/connector-case-studies/.
// Converts formatting only (headings, lists, bold/italic, links, images, rules); text is rendered as written.

type Block =
  | { type: "h"; level: 2 | 3; text: string }
  | { type: "p"; lines: string[] }
  | { type: "ul"; items: string[] }
  | { type: "ol"; start: number; items: string[] }
  | { type: "hr" }
  | { type: "img"; src: string; alt: string };

const unescape = (s: string) => s.replace(/\\([+\-!~&.#_()[\]])/g, "$1");

function inline(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*([^*\s][^*]*?)\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const key = `${keyBase}-${i++}`;
    if (m[1] !== undefined) nodes.push(<strong key={key}>{inline(m[1], key)}</strong>);
    else if (m[2] !== undefined) nodes.push(<em key={key}>{m[2]}</em>);
    else
      nodes.push(
        <a key={key} href={m[4]} target="_blank" rel="noopener noreferrer">
          {m[3]}
        </a>
      );
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const stripBold = (s: string) => s.replace(/\*\*/g, "").trim();

export function parseCaseMarkdown(md: string, images: Record<string, { src: string; alt: string }> = {}) {
  const lines = md.replace(/&nbsp;/g, "").split("\n");
  const blocks: Block[] = [];
  let para: string[] | null = null;
  const closePara = () => {
    if (para && para.some((l) => l.trim())) blocks.push({ type: "p", lines: para });
    para = null;
  };

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, "");
    const hardBreak = / {2,}$/.test(raw);
    const t = line.trim();
    const lastBlock = blocks[blocks.length - 1];

    if (!t) {
      closePara();
      continue;
    }
    if (/^-{3,}$/.test(t)) {
      closePara();
      blocks.push({ type: "hr" });
      continue;
    }
    const h = t.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      closePara();
      blocks.push({ type: "h", level: h[1].length <= 2 ? 2 : 3, text: unescape(stripBold(h[2])) });
      continue;
    }
    const img = t.match(/^!\[[^\]]*\]\[([^\]]+)\]$/);
    if (img) {
      closePara();
      if (images[img[1]]) blocks.push({ type: "img", ...images[img[1]] });
      continue;
    }
    const ul = t.match(/^[*-]\s+(.*)$/);
    if (ul && raw.match(/^\S/)) {
      closePara();
      if (lastBlock?.type === "ul") lastBlock.items.push(unescape(ul[1]));
      else blocks.push({ type: "ul", items: [unescape(ul[1])] });
      continue;
    }
    const ol = t.match(/^(\d+)\\?\.\s+(.*)$/);
    if (ol && raw.match(/^\S/)) {
      closePara();
      const item = unescape(ol[2]);
      if (lastBlock?.type === "ol") lastBlock.items.push(item);
      else blocks.push({ type: "ol", start: Number(ol[1]), items: [item] });
      continue;
    }
    // indented continuation of the previous list item
    if (/^\s/.test(raw) && !para && (lastBlock?.type === "ol" || lastBlock?.type === "ul")) {
      lastBlock.items[lastBlock.items.length - 1] += "\n" + unescape(t);
      continue;
    }
    if (!para) para = [];
    para.push(unescape(t) + (hardBreak ? "\n" : " "));
  }
  closePara();
  return blocks;
}

function withBreaks(text: string, keyBase: string): ReactNode[] {
  return text
    .trim()
    .split("\n")
    .flatMap((part, i) => (i === 0 ? inline(part.trim(), `${keyBase}-${i}`) : [<br key={`${keyBase}-br${i}`} />, ...inline(part.trim(), `${keyBase}-${i}`)]));
}

export function CaseMarkdown({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const k = `b${i}`;
        switch (b.type) {
          case "h":
            return b.level === 2 ? <h2 key={k}>{inline(b.text, k)}</h2> : <h3 key={k}>{inline(b.text, k)}</h3>;
          case "p":
            return <p key={k}>{withBreaks(b.lines.join(""), k)}</p>;
          case "ul":
            return (
              <ul key={k}>
                {b.items.map((it, j) => <li key={j}>{withBreaks(it, `${k}-${j}`)}</li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={k} start={b.start}>
                {b.items.map((it, j) => <li key={j}>{withBreaks(it, `${k}-${j}`)}</li>)}
              </ol>
            );
          case "hr":
            return <hr key={k} />;
          case "img":
            return (
              <figure key={k} className="post-figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.alt} style={{ width: "100%", height: "auto" }} />
              </figure>
            );
        }
      })}
    </>
  );
}

export type { Block };
