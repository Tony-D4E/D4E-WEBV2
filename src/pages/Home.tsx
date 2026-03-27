import { HeroIntegrateur } from '../sections/HeroIntegrateur';
import { Probleme } from '../sections/Probleme';
import { NosMetiers } from '../sections/NosMetiers';
import { Services } from '../sections/Services';
import { Sectors } from '../sections/Sectors';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { References } from '../sections/References';
import { Methodology } from '../sections/Methodology';
import { Team } from '../sections/Team';
import { ContactForm } from '../sections/ContactForm';
import { Footer } from '../sections/Footer';

export function Home() {
  return (
    <main>
      <HeroIntegrateur />
      <Probleme />
      <NosMetiers />
      <Services />
      <Sectors />
      <WhyChooseUs />
      <References />
      <Methodology />
      <Team />
      <ContactForm />
      <Footer />
    </main>
  );
}
