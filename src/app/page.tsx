import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";
import { Tool } from "@/components/tool/Tool";

export default function Home() {
  return (
    <>
      {/* <Services sectionId="services" /> */}
      {/* <About sectionId="about"/> */}
      {/* <Tool sectionId="tools" /> */}
      <Projects sectionId="projects" />
      {/* <Contact sectionId="contact" /> */}
    </>
  );
}
//
