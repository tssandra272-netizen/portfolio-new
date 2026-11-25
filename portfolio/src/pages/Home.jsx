import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Services from "../components/Services.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import About from "../components/About.jsx";

 

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;