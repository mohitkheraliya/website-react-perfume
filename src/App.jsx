import { useState } from "react";
import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Welcome from "./components/sections/Welcome";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/layout/Footer";
import MapContainer from "./components/sections/GoogleMap";
import Collection from "./components/sections/Collection";
import Whatsapp from "./components/sections/Whatsapp";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "toast",
          success: {
            className: "toast-success",
          },
          error: {
            className: "toast-error",
          },
        }}
      />
      <Header />
      <Hero />
      <Welcome />
      <About />
      <Collection />
      <Contact />
      <MapContainer />
      <Whatsapp />
      <Footer />
    </> 
  );
}

export default App;
