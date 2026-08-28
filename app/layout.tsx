import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "senin için.", description: "Özel hazırlanmış bir doğum günü hikâyesi." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
