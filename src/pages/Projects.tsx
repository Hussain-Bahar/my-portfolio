import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";

type ProjectVideo = {
  title: string;
  file: string;
  description: string;
  tags: string[];
};

const PROJECTS: ProjectVideo[] = [
  {
    title: "FiveM Game Server",
    file: "fivemvid.mp4",
    description: "Custom Lua multiplayer server — scripting, performance tuning, and live operations.",
    tags: ["Lua", "Game Dev"],
  },
  {
    title: "Ethical Hacking Script",
    file: "Ethicalhackingvid.mp4",
    description: "Python DoS tooling for cybersecurity learning in controlled environments.",
    tags: ["Python", "Cybersecurity"],
  },
  {
    title: "Microsoft Analysis",
    file: "Microsoftanalysis.mp4",
    description: "SWOT & PESTEL business analysis produced for BTEC project.",
    tags: ["Analysis", "Research"],
  },
];

function VideoCard({ p }: { p: ProjectVideo }) {
  return (
    <Card className="group overflow-hidden border-white/10 bg-[color:var(--surface)]/70 backdrop-blur hover:shadow-[0_0_0_1px_var(--accent-20)] transition">
      <div className="relative aspect-video overflow-hidden">
        <video
          src={`/${p.file}`}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--surface)]/60 via-transparent to-transparent" />
      </div>
      <CardHeader className="flex items-start justify-between">
        <CardTitle className="text-base">{p.title}</CardTitle>
        <span className="text-xs text-[color:var(--muted)]">{p.tags.join(" · ")}</span>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[color:var(--muted)]">{p.description}</p>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  return (
    <section className="mx-auto my-10 max-w-7xl px-6">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">Selected Work</div>
        <h1 className="mt-2 text-2xl font-semibold">Projects</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <VideoCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
