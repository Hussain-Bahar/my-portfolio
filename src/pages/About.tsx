import React from "react";
import { Card, CardContent } from "../components/card";

const ABOUT = `Enthusiastic 18-year-old with a passion for Software Engineering.
Experienced in creating and experimenting with AI projects and familiar
with various programming languages like Python, LUA, HTML, CSS and Java.
Always eager to learn new things and apply AI to solve real-world problems.`;

export default function About() {
  return (
    <section className="mx-auto my-10 max-w-5xl px-6">
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">Profile</div>
        <h1 className="mt-2 text-2xl font-semibold">About</h1>
      </div>

      <Card className="glass border-white/10">
        <CardContent>
          <p className="whitespace-pre-line text-[15px] leading-7 text-[color:var(--muted)]">
            {ABOUT}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
