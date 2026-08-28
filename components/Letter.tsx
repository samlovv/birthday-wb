"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "./useCinematicGsap";
export function Letter({ letter }: { letter: string }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { gsap.from(".letter-paper", { y: 70, opacity: 0, rotate: 1.5, duration: 1.1, scrollTrigger: { trigger: root.current, start: "top 72%" } }); }, { scope: root });
  return <section ref={root} className="letter-section section-light"><p className="eyebrow">bir mektup</p><article className="letter-paper">{letter.split("\n").map((line, index) => <p key={`${line}-${index}`}>{line || " "}</p>)}</article></section>;
}
