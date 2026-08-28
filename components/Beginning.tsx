"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "./useCinematicGsap";
export function Beginning({ date, text }: { date: string; text: string }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { const q = gsap.utils.selector(root); gsap.from(q(".beginning-reveal"), { y: 48, opacity: 0, filter: "blur(10px)", duration: 1.2, stagger: .14, scrollTrigger: { trigger: root.current, start: "top 70%" } }); }, { scope: root });
  return <section ref={root} className="beginning section-light"><div className="beginning-noise" /><div className="beginning-content"><p className="eyebrow beginning-reveal">her şeyin başlangıcı</p><time className="beginning-date beginning-reveal">{date}</time><h2 className="beginning-reveal">Her şeyin başladığı gün.</h2><p className="body-copy beginning-reveal">{text}</p></div></section>;
}
