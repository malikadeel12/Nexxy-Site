import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Story from "@/components/Story";
import Platform from "@/components/Platform";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Landing = () => (
  <div className="bg-background">
    <div className="flex flex-col bg-background">
      <Navbar />
      <Hero />
    </div>
    <Features />
    <Story />
    <Platform />
    <Pricing />
    <About />
    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
