"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "./useCinematicGsap";
import { MemoryImage } from "./MemoryImage";
export function FirstPhoto({ src, title, subtitle }: { src: string; title: string; subtitle: string }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { const q = gsap.utils.selector(root); if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; gsap.fromTo(q(".first-photo"), { scale: 1.08, filter: "grayscale(1) blur(12px)", opacity: .2 }, { scale: 1, filter: "grayscale(0) blur(0px)", opacity: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 85%", end: "center center", scrub: true } }); gsap.from(q(".first-copy > *"), { opacity: 0, y: 30, stagger: .18, scrollTrigger: { trigger: root.current, start: "30% 70%" } }); }, { scope: root });
  return <section ref={root} className="first-photo-section"><div className="first-photo-frame"><MemoryImage src={src} alt="İlk önemli anımız" className="first-photo" /></div><div className="first-copy"><p className="eyebrow">bir kare, bin his</p><h2>{title}</h2><p>{subtitle}</p></div></section>;
}
