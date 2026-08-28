"use client";
import { useRef } from "react";
import type { Memory } from "@/data/birthday-data";
import { useGSAP, gsap } from "./useCinematicGsap";
import { MemoryImage } from "./MemoryImage";
export function MemoryGallery({ memories }: { memories: readonly Memory[] }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { const q = gsap.utils.selector(root); if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; q(".memory-card").forEach((card, i) => gsap.to(card, { y: i % 2 ? -120 : 100, rotate: i % 3 === 0 ? 4 : -3, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: .7 } })); }, { scope: root });
  return <section ref={root} className="gallery"><header><p className="eyebrow">hafızada kalanlar</p><h2>bazı anlar<br /><em>hep kalır.</em></h2></header><div className="gallery-stage">{memories.map((memory, i) => <figure className={`memory-card memory-${i + 1}`} key={memory.src}><MemoryImage src={memory.src} alt={memory.alt} /><figcaption><span>{memory.caption}</span><small>{memory.date}</small></figcaption></figure>)}</div></section>;
}
