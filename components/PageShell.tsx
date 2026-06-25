import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";
import { ContactBar } from "./ContactBar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <ContactBar />
      <Footer />
    </div>
  );
}
