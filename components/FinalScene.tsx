"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "./useCinematicGsap";
export function FinalScene({ message, name, signature }: { message: string; name: string; signature: string }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { const q = gsap.utils.selector(root); gsap.from(q(".final-step"), { opacity: 0, y: 35, filter: "blur(10px)", stagger: .22, duration: 1.1, scrollTrigger: { trigger: root.current, start: "top 58%" } }); }, { scope: root });
  return <footer ref={root} className="final section-dark"><p className="eyebrow final-step">son bir şey.</p><p className="final-question final-step">hazır mısın?</p><h2 className="final-step">{message}</h2><p className="final-name final-step">{name}</p><p className="final-signature final-step">{signature}</p></footer>;
}
