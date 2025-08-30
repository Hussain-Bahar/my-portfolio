import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="homeimg-wrap">
        <img src={`${BASE}homebg.png`} alt="Background" className="homeimg" />
        <div className="homeimg-overlay" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl place-items-center px-6 py-10">
        <div className="text-center">
          <img
            src={`${BASE}logo-h7b.jpg`}
            alt="H7B"
            className="mx-auto mb-6 h-24 w-24 rounded-lg ring-1 ring-white/10"
          />
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-balance text-4xl font-semibold sm:text-6xl"
          >
            Software Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mx-auto mt-4 max-w-prose text-lg text-[color:var(--muted)]"
          >
            Designing reliable, future-ready software with modern web technologies.
          </motion.p>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <Link to="/projects" className="group rounded-xl border border-white/10 bg-[color:var(--surface)]/70 p-6 text-left backdrop-blur transition hover:shadow-[0_0_0_1px_var(--accent-20)]">
              <div className="text-xs uppercase tracking-[0.14em] text-[color:var(--accent)]">Explore</div>
              <div className="mt-2 text-lg font-medium">Projects</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Watch short demo loops.</p>
            </Link>
            <Link to="/about" className="group rounded-xl border border-white/10 bg-[color:var(--surface)]/70 p-6 text-left backdrop-blur transition hover:shadow-[0_0_0_1px_var(--accent-20)]">
              <div className="text-xs uppercase tracking-[0.14em] text-[color:var(--accent)]">Learn</div>
              <div className="mt-2 text-lg font-medium">About</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Background & strengths.</p>
            </Link>
            <Link to="/resume" className="group rounded-xl border border-white/10 bg-[color:var(--surface)]/70 p-6 text-left backdrop-blur transition hover:shadow-[0_0_0_1px_var(--accent-20)]">
              <div className="text-xs uppercase tracking-[0.14em] text-[color:var(--accent)]">Review</div>
              <div className="mt-2 text-lg font-medium">Resume</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Preview & download CV.</p>
            </Link>
          </div>

          <div className="mt-10 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
            Scroll or use ↑/↓ to navigate
          </div>
        </div>
      </div>
    </section>
  );
}
