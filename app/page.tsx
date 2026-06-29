import { AppointmentCTA } from "@/components/AppointmentCTA";
import { Budget } from "@/components/Budget";
import { CdcpInfo } from "@/components/CdcpInfo";
import { ClinicFinder } from "@/components/ClinicFinder";
import { ContactBar } from "@/components/ContactBar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { GiftCardPopup } from "@/components/GiftCardPopup";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Promotions } from "@/components/Promotions";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TopBar } from "@/components/TopBar";
import { Welcome } from "@/components/Welcome";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ContactBar />
        <Promotions />
        <Welcome />
        <ClinicFinder />
        <Services />
        <Budget />
        <CdcpInfo />
        <FAQ />
        <Reviews />
        <AppointmentCTA />
      </main>
      <Footer />
      <GiftCardPopup />
    </div>
  );
}
