import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { Tool } from "@/components/tool/Tool";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero sectionId="home"/>
      <Services sectionId="services"/>
      {/* <Tool sectionId="services"/> */}
      {/* <Contact sectionId="contact"/> */}
      {/* <Footer /> */}
    </>
  );
}
