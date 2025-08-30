import React from "react";
import { Card, CardContent } from "../components/card";
import { Mail, Instagram, Linkedin } from "lucide-react";

const ABOUT = `Enthusiastic 18-year-old with a passion for Software Engineering.
Experienced in creating and experimenting with AI projects and familiar
with various programming languages like Python, LUA, HTML, CSS and Java.
Always eager to learn new things and apply AI to solve real-world problems.`;

export default function About() {
  return (
    <section className="mx-auto my-10 max-w-5xl px-6">
      {/* Profile section */}
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Profile
        </div>
        <h1 className="mt-2 text-2xl font-semibold">About</h1>
      </div>

      <Card className="glass border-white/10 mb-10">
        <CardContent>
          <p className="whitespace-pre-line text-[15px] leading-7 text-[color:var(--muted)]">
            {ABOUT}
          </p>
        </CardContent>
      </Card>

      {/* Contact section */}
      <div className="mb-6">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Get in Touch
        </div>
        <h2 className="mt-2 text-xl font-semibold">Contact Me</h2>
      </div>

      <Card className="glass border-white/10">
        <CardContent className="flex flex-col gap-4">
          {/* Email */}
          <a
            href="mailto:7hussainbahar@gmail.com"
            className="flex items-center gap-3 text-sm hover:text-[color:var(--accent)] transition"
          >
            <Mail className="h-5 w-5 opacity-70" />
            7hussainbahar@gmail.com
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/h.7bahar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm hover:text-[color:var(--accent)] transition"
          >
            <Instagram className="h-5 w-5 opacity-70" />
            instagram.com/h.7bahar
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hussain-bahar-bb8384381/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm hover:text-[color:var(--accent)] transition"
          >
            <Linkedin className="h-5 w-5 opacity-70" />
            linkedin.com/in/hussain-bahar-bb8384381
          </a>
        </CardContent>
      </Card>
    </section>
  );
}
