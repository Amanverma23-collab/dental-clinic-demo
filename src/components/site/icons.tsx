import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 48 48",
};

export const ToothIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M16 6c-4 0-8 3-8 8 0 4 2 6 3 10 1 3 1 8 3 14 1 3 4 4 5 0 1-4 1-8 3-8s2 4 3 8c1 4 4 3 5 0 2-6 2-11 3-14 1-4 3-6 3-10 0-5-4-8-8-8-3 0-4 2-6 2s-3-2-6-2z"/>
  </svg>
);

export const ToothSparkleIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M16 8c-4 0-7 3-7 7 0 3 2 5 3 9 1 3 1 8 3 13 1 3 4 4 5 0 1-4 1-7 3-7s2 3 3 7c1 4 4 3 5 0 2-5 2-10 3-13 1-4 3-6 3-9 0-4-3-7-7-7-3 0-4 2-6 2s-3-2-6-2z"/>
    <path d="M36 10l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM38 20l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"/>
  </svg>
);

export const ImplantIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M18 6c-3 0-6 2-6 6 0 3 2 4 3 7 1 2 1 5 2 8M30 6c3 0 6 2 6 6 0 3-2 4-3 7-1 2-1 5-2 8"/>
    <path d="M20 28h8M19 32h10M20 36h8M22 40l2 4 2-4"/>
  </svg>
);

export const InvisalignIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M10 18c2-6 8-8 14-8s12 2 14 8c1 4-2 6-4 6H14c-2 0-5-2-4-6zM14 24h20M14 28h20M14 32h20M16 24v10M22 24v10M28 24v10M34 24v10"/>
  </svg>
);

export const RootCanalIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M16 6c-4 0-7 3-7 7 0 3 2 5 3 9 1 3 1 8 3 13 1 3 4 4 5 0 1-4 1-7 3-7s2 3 3 7c1 4 4 3 5 0 2-5 2-10 3-13 1-4 3-6 3-9 0-4-3-7-7-7-3 0-4 2-6 2s-3-2-6-2z"/>
    <path d="M24 18v10M22 22h4M22 26h4"/>
  </svg>
);

export const PediatricIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="24" cy="18" r="7"/>
    <path d="M14 40c0-6 4-10 10-10s10 4 10 10"/>
    <path d="M21 18h.01M27 18h.01M21 21c1 1 5 1 6 0"/>
  </svg>
);

export const VeneerIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M10 16h28v6a8 8 0 01-8 8h-12a8 8 0 01-8-8z"/>
    <path d="M16 16v14M22 16v14M28 16v14M34 16v14"/>
  </svg>
);

export const EmergencyIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M20 8h8v12h12v8H28v12h-8V28H8v-8h12z"/>
  </svg>
);

export const SmileIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M10 22c2 8 8 14 14 14s12-6 14-14c-4 2-9 3-14 3s-10-1-14-3z"/>
  </svg>
);

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 48 48" className="h-9 w-9 text-teal-soft" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M16 16c-3 0-6 2-6 6 0 3 2 4 3 7 1 2 1 6 2 10 1 2 3 3 4 0 1-3 1-6 3-6s2 3 3 6c1 3 3 2 4 0 1-4 1-8 2-10 1-3 3-4 3-7 0-4-3-6-6-6-2 0-3 1-5 1s-3-1-5-1z"/>
      <path d="M24 6v4M14 8l2 3M34 8l-2 3M8 14l3 1M40 14l-3 1"/>
    </svg>
    <div className="leading-none">
      <div className="font-serif text-xl tracking-wide text-foreground">DR. DENTAL</div>
      <div className="text-[10px] tracking-[0.3em] text-muted-foreground">SIKAR · CLINIC</div>
    </div>
  </div>
);
