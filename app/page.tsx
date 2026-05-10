import Header           from './components/Header';
import Hero             from './components/Hero';
import Compass          from './components/Compass';
import Gallery          from './components/Gallery';
import GrandFinale      from './components/GrandFinale';
import EditorialOffer   from './components/EditorialOffer';
import FAQ              from './components/FAQ';
import FinaleClaim      from './components/FinaleClaim';
import Footer           from './components/Footer';
import WhatsAppFloat    from './components/WhatsAppFloat';

export default function Page() {
  return (
    <main className="bg-[#1A0F08] text-ink-50">
      <Header />
      <Hero />
      <Compass />
      <Gallery />
      <GrandFinale />
      <EditorialOffer />
      <FAQ />
      <FinaleClaim />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
