"use client";
import { useEffect } from "react";
export function CustomCursor() { useEffect(() => { const cursor = document.querySelector<HTMLElement>(".custom-cursor"); if (!cursor || !window.matchMedia("(pointer:fine)").matches) return; const move = (event: PointerEvent) => { cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`; }; window.addEventListener("pointermove", move, { passive: true }); return () => window.removeEventListener("pointermove", move); }, []); return <div className="custom-cursor" aria-hidden="true" />; }
