"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "./useCinematicGsap";
export function Hero({ title }: { title: string }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { gsap.to(".hero-inner", { scale: 0.86, opacity: 0, y: -70, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } }); }, { scope: root });
  return <section ref={root} className="hero section-dark"><div className="hero-inner"><p className="eyebrow">bir doğum günü hikâyesi</p><h1>{title}</h1><p className="scroll-cue">hikâyemizi yeniden yaşayalım <span>↓</span></p></div></section>;
}
