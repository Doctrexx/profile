import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./Sections/Homepage";
import Projects from "./Sections/Projects";
// import TechStack from "./Sections/TechStack";
import ContactForm from "./Sections/ContactForm";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Projects />
      {/* <TechStack /> */}
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
