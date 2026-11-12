import profile from "./profile";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import History from "./components/History";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Nav name={profile.name} />
      <Hero
        role={profile.role}
        heroSubtitle={profile.heroSubtitle}
        heroBio={profile.heroBio}
        heroTags={profile.heroTags}
        nameJa={profile.nameJa}
        title={profile.title}
      />
      <About
        about={profile.about}
        location={profile.location}
        role={profile.role}
        title={profile.title}
        interests={profile.interests}
      />
      <Services services={profile.services} />
      <Works works={profile.works} />
      <Skills skills={profile.skills} />
      <Certifications certifications={profile.certifications} />
      <History history={profile.history} />
      <Contact contact={profile.contact} note={profile.contactNote} />
      <Footer name={profile.name} />
    </>
  );
}
