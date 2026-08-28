"use client";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGSAP, gsap } from "./useCinematicGsap";
export function Gift({ title, message, url }: { title: string; message: string; url: string }) {
  const root = useRef<HTMLElement>(null); const [open, setOpen] = useState(false);
  useGSAP(() => { gsap.from(".gift-envelope", { y: 50, opacity: 0, rotateX: 12, scrollTrigger: { trigger: root.current, start: "top 70%" } }); }, { scope: root });
  const openGift = () => {
    setOpen(true);
    const q = gsap.utils.selector(root);
    gsap.timeline()
      .to(q(".gift-envelope"), { scale: 1.025, duration: .22 })
      .to(q(".gift-flap"), { rotateX: 180, duration: .65, transformOrigin: "top", ease: "power3.inOut" })
      .to(q(".gift-note"), { y: -28, opacity: 1, duration: .55, ease: "power3.out" }, "<.18")
      .from(q(".gift-orbit"), { scale: .5, opacity: 0, duration: .45, ease: "back.out(2)" }, "<.1")
      .to(q(".gift-envelope"), { scale: 1, duration: .5, ease: "power2.out" });
  };
  return <section ref={root} className="gift"><p className="eyebrow">küçük bir sürpriz</p><div className={`gift-envelope ${open ? "is-open" : ""}`}><div className="gift-flap" /><div className="gift-note"><div className="gift-orbit" aria-hidden="true"><i /><i /><i /></div><p>{message}</p><a className="surprise-link" href={url} target="_blank" rel="noreferrer">sürpriz <ArrowUpRight size={15} strokeWidth={1.5} /></a><small>başlatmak için dokun</small></div><div className="gift-front"><p>{title}</p>{!open && <button onClick={openGift}>hediyeni aç <span>♡</span></button>}</div></div></section>;
}
