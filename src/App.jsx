import profile from "./profile";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import History from "./components/History";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Nav name={profile.name} contact={profile.contact} />
      <Hero role={profile.role} heroSubtitle={profile.heroSubtitle} heroBio={profile.heroBio} />
      <About about={profile.about} location={profile.location} role={profile.role} interests={profile.interests} />
      <Skills skills={profile.skills} />
      <Certifications certifications={profile.certifications} />
      <History history={profile.history} />
      <Contact contact={profile.contact} />
      <Footer name={profile.name} />
    </>
  );
}
