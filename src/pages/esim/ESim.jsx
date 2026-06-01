import ESimNavbar from '../../components/esim/ESimNavbar';
import ESimHero from '../../components/esim/ESimHero';
import ESimDestinations from '../../components/esim/ESimDestinations';
import ESimHowItWorks from '../../components/esim/ESimHowItWorks';
import ESimWhyChooseUs from '../../components/esim/ESimWhyChooseUs';
import ESimDevices from '../../components/esim/ESimDevices';
import ESimVsPhysical from '../../components/esim/ESimVsPhysical';
import ESimFAQ from '../../components/esim/ESimFAQ';
import ESimCTA from '../../components/esim/ESimCTA';
import ESimFooter from '../../components/esim/ESimFooter';
import WhatsAppFloating from '../../components/shared/WhatsAppFloating';
import GoToTop from '../../components/shared/GoToTop';
import SEOMeta from '../../components/shared/SEOMeta';

export default function ESim() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      <SEOMeta
        title="International eSIM for Travelers | EConnect eSIM"
        description="Stay connected globally with EConnect eSIM. High-speed prepaid data plans for 190+ countries. Instant activation, no physical SIM card required."
        path="/esim"
        keywords="international eSIM, travel eSIM, prepaid eSIM data, global eSIM card, travel data plans"
      />
      <ESimNavbar />
      <main>
        <ESimHero />
        <ESimDestinations />
        <ESimHowItWorks />
        <ESimWhyChooseUs />
        <ESimDevices />
        <ESimVsPhysical />
        <ESimFAQ />
        <ESimCTA />
      </main>
      <ESimFooter />
      <WhatsAppFloating />
      <GoToTop />
    </div>
  );
}
