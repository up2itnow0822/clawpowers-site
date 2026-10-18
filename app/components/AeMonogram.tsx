"use client";

import { useId } from "react";

type AeMonogramProps = {
  reduced: boolean;
};

export function AeMonogram({ reduced }: AeMonogramProps) {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");

  return (
    <div className={`ae-mark${reduced ? " is-static" : ""}`} aria-hidden="true">
      <div className="ae-mark-glow" />
      <svg
        className="ae-mark-svg"
        viewBox="0 0 182 214"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          <linearGradient id={`${id}-ember`} x1="40" y1="18" x2="142" y2="198" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF8A00" />
            <stop offset="100%" stopColor="#FF3D00" />
          </linearGradient>
          <linearGradient id={`${id}-core`} x1="91" y1="24" x2="91" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFB347" />
            <stop offset="55%" stopColor="#FF8A00" />
            <stop offset="100%" stopColor="#FF3D00" />
          </linearGradient>
        </defs>

        <g
          className="ae-strokes"
          stroke={`url(#${id}-core)`}
          strokeWidth="2.8"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        >
          <path className="ae-stroke ae-stroke-1" pathLength="1" d="M48 176 L48 58 L91 22 L134 58 L134 176 L91 204 Z" />
          <path className="ae-stroke ae-stroke-2" pathLength="1" d="M64 168 L64 70 L91 46 L118 70 L118 168" />
          <path className="ae-stroke ae-stroke-3" pathLength="1" d="M64 78 L91 54 L118 78" />
          <path className="ae-stroke ae-stroke-4" pathLength="1" d="M64 112 L118 112" />
          <path className="ae-stroke ae-stroke-5" pathLength="1" d="M91 78 L118 78" />
          <path className="ae-stroke ae-stroke-6" pathLength="1" d="M91 146 L118 146" />
          <path className="ae-stroke ae-stroke-7" pathLength="1" d="M76 154 L91 92 L106 154" />
        </g>
      </svg>

      <img
        className="ae-mark-photo"
        src="/brand/app-icon.png"
        alt=""
        width={182}
        height={214}
        decoding="async"
      />
    </div>
  );
}
