"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AeMonogram } from "./AeMonogram";
import { EmberField } from "./EmberField";
import { useReducedMotion } from "../lib/motion";

const TAGLINE = "BUILDING THE FINANCIAL RAILS FOR THE AGENTIC ECONOMY.";
const LEFT_RAIL = ["WEALTH THROUGH MOVEMENT", "POWER THROUGH INFRASTRUCTURE", "AGENTS WITHOUT BORDERS"];
const RIGHT_RAIL = ["ANCIENT ROUTES.", "AUTONOMOUS FUTURES.", "SAME HUMAN DRIVE."];

export function Hero() {
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLElement>(null);
  const [typed, setTyped] = useState(TAGLINE.length);
  const [allowMotion, setAllowMotion] = useState(false);

  useLayoutEffect(() => {
    const motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAllowMotion(motion);
    if (motion) setTyped(0);
  }, []);

  useEffect(() => {
    if (reduced) {
      setTyped(TAGLINE.length);
      return;
    }

    let index = 0;
    let interval = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setTyped(index);
        if (index >= TAGLINE.length) window.clearInterval(interval);
      }, 26);
    }, 900);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [reduced]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reduced) return;

    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    let scroll = 0;
    let frame = 0;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const apply = () => {
      stage.style.setProperty("--mx", mx.toFixed(4));
      stage.style.setProperty("--my", my.toFixed(4));
      stage.style.setProperty("--sy", scroll.toFixed(2));
    };

    const onPointer = (event: PointerEvent) => {
      if (!finePointer) return;
      const rect = stage.getBoundingClientRect();
      tx = (event.clientX - rect.left) / rect.width - 0.5;
      ty = (event.clientY - rect.top) / rect.height - 0.5;
    };

    const onScroll = () => {
      scroll = window.scrollY;
    };

    const tick = () => {
      mx += (tx - mx) * 0.07;
      my += (ty - my) * 0.07;
      apply();
      frame = requestAnimationFrame(tick);
    };

    apply();
    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduced]);

  const typingDone = typed >= TAGLINE.length;

  return (
    <section
      ref={stageRef}
      className={`hero-stage${allowMotion && !reduced ? " is-animated" : ""}`}
      aria-label="AI Agent Economy hero"
    >
      <div className="hero-city" />
      <div className="hero-stone" />
      <div className="hero-water" />
      <div className="hero-vignette" />
      <div className="hero-lights" aria-hidden="true">
        <span className="tower-light l1" />
        <span className="tower-light l2" />
        <span className="tower-light l3" />
        <span className="tower-light l4" />
        <span className="tower-light l5" />
        <span className="tower-light l6" />
        <span className="tower-reflection r1" />
        <span className="tower-reflection r2" />
      </div>
      <EmberField reduced={reduced} />

      <div className="hero-grid">
        <aside className="hero-rail hero-rail-left">
          {LEFT_RAIL.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </aside>

        <div className="hero-core">
          <AeMonogram reduced={reduced} />
          <div className="hero-type">
            <p className="hero-kicker">AI Agent Economy LLC</p>
            <h1 className="hero-title">
              <span className="hero-line">
                <span>AI AGENT</span>
              </span>
              <span className="hero-line hero-line-delay">
                <span>ECONOMY LLC</span>
              </span>
            </h1>
            <p className="hero-tagline" aria-label={TAGLINE}>
              <span>{TAGLINE.slice(0, typed)}</span>
              <span className={`hero-caret${typingDone ? " is-done" : ""}`} aria-hidden="true">
                █
              </span>
            </p>
            <div className="hero-ctas">
              <a className="btn-ember" href="#rebuild">
                Follow the rebuild
              </a>
              <a className="btn-ghost" href="https://www.ai-agent-economy.com">
                ai-agent-economy.com
              </a>
            </div>
          </div>
        </div>

        <aside className="hero-rail hero-rail-right">
          {RIGHT_RAIL.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </aside>
      </div>
    </section>
  );
}
