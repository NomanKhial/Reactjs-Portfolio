import About from "../../Components/Aboutme/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Services from "../../Components/Services/Services";
import Work from "../../Components/Work/Work";
import "./Home.css";

function Home() {
  return (
    <>
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
    </>
  );
}

export default Home;
