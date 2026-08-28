"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "./useCinematicGsap";
import { MemoryImage } from "./MemoryImage";
export function EmotionalSection({ src }: { src: string }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { const q = gsap.utils.selector(root); if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) gsap.to(q(".emotional-image"), { scale: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } }); q(".emotional-copy p").forEach((line) => gsap.from(line, { opacity: 0, y: 22, filter: "blur(7px)", scrollTrigger: { trigger: line, start: "top 72%", end: "top 50%", scrub: true } })); }, { scope: root });
  return <section ref={root} className="emotional"><MemoryImage src={src} alt="En sevdiğim insan" className="emotional-image" /><div className="emotional-scrim" /><div className="emotional-copy"><p>Ve sonra fark ettim...</p><p>Sen artık sadece hayatımdaki biri değildin.</p><p>Sen benim en sevdiğim insandın.</p><p>Ve hâlâ öylesin.</p></div></section>;
}
