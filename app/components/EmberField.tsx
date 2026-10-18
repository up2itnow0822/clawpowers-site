"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  max: number;
  heat: number;
};

function seed(width: number, height: number): Ember {
  return {
    x: Math.random() * width,
    y: height + Math.random() * height * 0.2,
    vx: (Math.random() - 0.5) * 0.18,
    vy: -(0.22 + Math.random() * 0.42),
    size: 0.6 + Math.random() * 1.8,
    life: Math.random(),
    max: 4 + Math.random() * 5,
    heat: Math.random(),
  };
}

type EmberFieldProps = {
  reduced: boolean;
};

export function EmberField({ reduced }: EmberFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;

    const context = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!context) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let embers: Ember[] = [];
    let frame = 0;
    let last = performance.now();
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 700 ? 18 : 32;
      embers = Array.from({ length: count }, () => seed(width, height));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(canvas);

    const onVisibility = () => {
      visible = document.visibilityState === "visible" && visible;
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible) {
        last = now;
        return;
      }

      const dt = Math.min(32, now - last) / 16.67;
      last = now;
      context.clearRect(0, 0, width, height);

      for (const ember of embers) {
        ember.x += ember.vx * dt;
        ember.y += ember.vy * dt;
        ember.life += 0.016 * dt;
        ember.vx += Math.sin((ember.y + ember.heat * 40) * 0.02) * 0.01;

        if (ember.life > ember.max || ember.y < -8) {
          Object.assign(ember, seed(width, height), { life: 0 });
        }

        const fade = 1 - ember.life / ember.max;
        const alpha = Math.max(0, fade * 0.7);
        context.beginPath();
        context.fillStyle = ember.heat > 0.55
          ? `rgba(255, 61, 0, ${alpha})`
          : `rgba(255, 138, 0, ${alpha})`;
        context.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        context.fill();
      }
    };

    resize();
    frame = requestAnimationFrame(tick);
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  if (reduced) return null;

  return <canvas ref={canvasRef} className="ember-field" aria-hidden="true" />;
}
