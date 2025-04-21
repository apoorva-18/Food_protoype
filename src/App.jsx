// App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBanner from './components/Promobanner';
import Categories from './components/Categories';
import MenuHighlights from './components/MenuHighlight';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import DeliveryPartners from './components/DeliveryPartners';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PromoBanner />
      <Categories />
      <MenuHighlights />
      <Testimonials />
      <CtaBanner />
      <DeliveryPartners />
      <Footer />
    </div>
  );
}

export default App;
