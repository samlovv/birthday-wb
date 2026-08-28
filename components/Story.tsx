"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "./useCinematicGsap";
export function Story({ items }: { items: readonly { date: string; text: string }[] }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => { const q = gsap.utils.selector(root); q(".story-item").forEach((item, i) => gsap.from(item, { opacity: 0, x: i % 2 ? 80 : -80, y: 35, duration: .9, scrollTrigger: { trigger: item, start: "top 78%" } })); }, { scope: root });
  return <section ref={root} className="story"><div className="section-label">bizim hikâyemiz <span>03</span></div><div className="story-list">{items.map((item, i) => <article className={`story-item story-item-${i % 2}`} key={`${item.text}-${i}`}><span>{item.date || String(i + 1).padStart(2, "0")}</span><h3>{item.text}</h3></article>)}</div></section>;
}
