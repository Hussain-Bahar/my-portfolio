import React from "react";

export default function Marquee({ items }: { items: string[] }) {
  const content = [...items, ...items];
  return (
    <div className="overflow-hidden border-t border-white/10 bg-[color:var(--surface)]/70 backdrop-blur">
      <div className="marquee flex gap-8 py-2 text-xs uppercase tracking-wider">
        {content.map((t, i) => (
          <span key={i} className="opacity-70">{t}</span>
        ))}
      </div>
    </div>
  );
}
