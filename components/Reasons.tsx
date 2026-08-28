"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "./useCinematicGsap";
export function Reasons({ reasons }: { reasons: readonly string[] }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { const q = gsap.utils.selector(root); q(".reason").forEach((reason) => gsap.fromTo(reason, { opacity: .1, scale: .94, filter: "blur(8px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", scrollTrigger: { trigger: reason, start: "top 72%", end: "bottom 42%", scrub: true } })); }, { scope: root });
  return <section ref={root} className="reasons section-light"><header><p className="eyebrow">küçük bir liste</p><h2>10 neden.</h2><p>ama aslında 10&apos;dan çok daha fazla.</p></header><div>{reasons.map((reason, i) => <article className="reason" key={reason}><span>{String(i + 1).padStart(2, "0")}</span><h3>{reason}</h3></article>)}</div></section>;
}
