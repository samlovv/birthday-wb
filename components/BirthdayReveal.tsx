"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "./useCinematicGsap";
export function BirthdayReveal({ name }: { name: string }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { const q = gsap.utils.selector(root); q(".birthday-line").forEach((line) => gsap.fromTo(line, { opacity: 0, filter: "blur(14px)", y: 28 }, { opacity: 1, filter: "blur(0px)", y: 0, scrollTrigger: { trigger: line, start: "top 75%", end: "top 52%", scrub: true } })); gsap.from(q(".birthday-name"), { scale: .8, opacity: 0, duration: 1, scrollTrigger: { trigger: q(".birthday-name"), start: "top 80%" } }); }, { scope: root });
  return <section ref={root} className="birthday section-dark"><div className="birthday-prelude"><p className="birthday-line">iyi ki doğdun.</p><p className="birthday-line">iyi ki varsın.</p><p className="birthday-line">iyi ki hayatımdasın.</p></div><div className="birthday-main"><p className="eyebrow">bugün senin günün</p><h2>DOĞUM GÜNÜN<br />KUTLU OLSUN</h2><p className="birthday-name">{name}</p></div></section>;
}
