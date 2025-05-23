import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="hero text-white flex items-center justify-between"
      >
        <div className="hero__content basis-[60%] items-start px-[5rem] tab-md:basis-[90%] tab-md:m-auto tab-md:px-0">
          <h1 className="hero-heading text-[4.5rem] justify-self-center">
            Elevate Your Spirit with Victory Scented Fragrances!
          </h1>
          <p className="hero__description">
            Grace your presence with Angel Perfumery.
          </p>
        </div>

        <div className="h-full mr-[7rem] tab-md:hidden iside:mr-[2.5rem]">
          <img src="/images/spray.png" alt="Spray" className="hero__img" />
        </div>
      </section>
    </>
  );
};

export default Hero;
