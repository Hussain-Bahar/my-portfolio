import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import CursorBlob from "./components/CursorBlob";
import useMagnetic from "./hooks/useMagnetic";
import { AnimatePresence, motion } from "framer-motion";
import ArrowHint from "./components/ArrowHint";

const BASE = import.meta.env.BASE_URL;

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "dark"
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--bg", "#0b0e13");
      root.style.setProperty("--surface", "#0f1419");
      root.style.setProperty("--text", "#e6ebef");
      root.style.setProperty("--muted", "rgba(230,235,239,0.75)");
      root.style.setProperty("--accent", "#00e5ff");
      root.style.setProperty("--accent-20", "rgba(0,229,255,0.2)");
    } else {
      root.style.setProperty("--bg", "#f6f8fb");
      root.style.setProperty("--surface", "#ffffff");
      root.style.setProperty("--text", "#0d1220");
      root.style.setProperty("--muted", "rgba(13,18,32,0.7)");
      root.style.setProperty("--accent", "#00a0ff");
      root.style.setProperty("--accent-20", "rgba(0,160,255,0.2)");
    }
  }, [theme]);
  return { theme, setTheme };
}

/** Direction-aware page motion (TS-safe easings) */
const variants = {
  enter: (dir: number) => ({
    y: dir > 0 ? 48 : -48,
    opacity: 0,
    filter: "blur(6px)",
  }),
  center: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.48, ease: "easeInOut" as const },
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -48 : 48,
    opacity: 0,
    filter: "blur(6px)",
    transition: { duration: 0.36, ease: "easeInOut" as const },
  }),
};

export default function App() {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLButtonElement | null>(null);
  useMagnetic(ref);

  const routes = useMemo(() => ["/", "/projects", "/about", "/resume"], []);
  const nav = useNavigate();
  const { pathname } = useLocation();

  // Direction for animation (1 = forward/down, -1 = backward/up)
  const [dir, setDir] = useState(1);
  const idx = routes.indexOf(pathname);
  const canScroll = idx !== -1;

  // Delay & throttle for page-change
  const PRE_NAV_DELAY = 600; // delay BEFORE navigating (ms)
  const POST_THROTTLE = 600; // cooldown after navigating (ms)

  const throttleRef = useRef(false);
  const fireNav = useCallback(
    (nextIdx: number, newDir: number) => {
      if (throttleRef.current) return;
      if (nextIdx < 0 || nextIdx >= routes.length) return;

      throttleRef.current = true;
      setDir(newDir);

      setTimeout(() => {
        nav(routes[nextIdx]);
      }, PRE_NAV_DELAY);

      setTimeout(() => {
        throttleRef.current = false;
      }, PRE_NAV_DELAY + POST_THROTTLE);
    },
    [nav, routes]
  );

  // Wheel
  useEffect(() => {
    if (!canScroll) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 20) return;
      if (e.deltaY > 0) fireNav(idx + 1, 1);
      else fireNav(idx - 1, -1);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [canScroll, fireNav, idx]);

  // Keyboard
  useEffect(() => {
    if (!canScroll) return;
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        if (e.shiftKey && e.key === " ") fireNav(idx - 1, -1);
        else fireNav(idx + 1, 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        fireNav(idx - 1, -1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [canScroll, fireNav, idx]);

  // Touch swipe
  useEffect(() => {
    if (!canScroll) return;
    let startY = 0;
    const onStart = (e: TouchEvent) => (startY = e.touches[0].clientY);
    const onEnd = (e: TouchEvent) => {
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dy) < 40) return;
      if (dy < 0) fireNav(idx + 1, 1);
      else fireNav(idx - 1, -1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [canScroll, fireNav, idx]);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <CursorBlob />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[color:var(--surface)]/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img
              src={`${BASE}logo-h7b.png`}
              alt="H7B"
              className="h-8 w-8 rounded-md ring-1 ring-white/10"
            />
            <span className="text-sm font-medium tracking-wide">Hussain Ahmed Bahar</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/" end className={({ isActive }) =>
              `hover:opacity-100 opacity-80 ${isActive ? "text-[color:var(--accent)]" : ""}`
            }>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) =>
              `hover:opacity-100 opacity-80 ${isActive ? "text-[color:var(--accent)]" : ""}`
            }>Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              `hover:opacity-100 opacity-80 ${isActive ? "text-[color:var(--accent)]" : ""}`
            }>About</NavLink>
            <NavLink to="/resume" className={({ isActive }) =>
              `hover:opacity-100 opacity-80 ${isActive ? "text-[color:var(--accent)]" : ""}`
            }>Resume</NavLink>
            <button
              ref={ref}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-white/10 px-3 py-2 hover:bg-white/5 transition"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={pathname}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="min-h-[calc(100vh-4rem)]"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <ArrowHint
        hasPrev={idx > 0}
        hasNext={idx < routes.length - 1}
        onPrev={() => fireNav(idx - 1, -1)}
        onNext={() => fireNav(idx + 1, 1)}
      />

      <footer className="mx-auto mt-6 max-w-7xl px-6 py-10 text-sm text-[color:var(--muted)]">
        © {new Date().getFullYear()} Hussain Ahmed Bahar. All rights reserved.
      </footer>
    </div>
  );
}
