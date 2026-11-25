 
import Navbar from "../components/Navbar.jsx";
import Services from "../components/Services.jsx";
 
import Footer from "../components/Footer.jsx";
import About from "../components/About.jsx";

 

function Aboutpage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default Aboutpage;