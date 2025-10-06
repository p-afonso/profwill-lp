import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Reels from './components/Reels';
import Transformation from './components/Transformation';
import Benefits from './components/Benefits';
import Achievements from './components/Achievements';
import Pricing from './components/Pricing';
import Instructor from './components/Instructor';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Testimonials />
      <Reels />
      <Transformation />
      <Benefits />
      <Achievements />
      <Pricing />
      <Instructor />
      <FAQ />
      <Guarantee />
      <Footer />
    </div>
  );
}

export default App;
