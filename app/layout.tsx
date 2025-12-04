// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nubexs — Software Studio",
  description:
    "Nubexs is a US-registered software studio building intelligent digital products, AI platforms, and real-time systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {/* Global background gradient */}
        <div className="fixed inset-0 -z-10 bg-slate-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(79,70,229,0.14),_transparent_55%)]" />
        </div>

        {children}
      </body>
    </html>
  );
}
