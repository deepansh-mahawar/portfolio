import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";
import { Tool } from "@/components/tool/Tool";


export default function Home() {
  return (
    <>
      <Header />
      <Hero sectionId="home" />
      <Services sectionId="services" />
      <About sectionId="about"/>
      <Tool sectionId="tools" />
      <Projects sectionId="projects"/>
      <Contact sectionId="contact" />
      <Footer />
    </>
  );
}
