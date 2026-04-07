import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import App from "./components/graphics";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/footer";
import ProjectSection from "./components/ProjectSection";
import Project from "./components/Project";
import AnimatedText from "./components/AnimatedText"



export default function Home() {
  return (
   <main className= "flex min-h-screen flex-col bg-[#121212]">
    {/* <Navbar /> */}
    <div class='h-dvh mt-24 mx-auto px-6 py-4'>
      <HeroSection />
      <AboutSection />
      <App />
      <AnimatedText />
      {/* <Project /> */}
      <div class='h-screen w-screen  mx-auto px-6  bg-gradient-to-r from-stone-900 via-indigo-900 to-stone-900'>
        <ProjectSection />
      </div> 
      <EmailSection />
      <Footer />
    </div>
   
    
   </main>
  );
}

