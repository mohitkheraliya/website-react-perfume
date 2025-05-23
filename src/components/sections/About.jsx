import React from "react";

const About = () => {
  return (
    <section id="about" className="about text-white">
      <div className="py-[10rem] tab:py-[5rem] w-[50%] tab:w-[60%] tab-sm:w-[80%] tab-sm:py-[4rem] flex flex-col items-center">
        <h1 className="text-[3.5rem] mb-10 tab-sm:text-[3.3rem]">About us</h1>
        <div className="paragraph">
          <p>
            &nbsp; &nbsp; &nbsp; At Angel Perfumery, we believe that perfumes are
            more than just scents; they are expressions of one's individuality
            and style. Our passion for exquisite fragrances led us to curate a
            collection that captures the essence of diverse personalities,
            bringing you an unparalleled olfactory experience.
          </p>

          <p>
            &nbsp; &nbsp; &nbsp; Each fragrance in our collection is
            thoughtfully crafted, blending the finest ingredients from around
            the world to create scents that linger, inspire, and captivate. At
            Angel Perfumery, we honor the art of perfumery by working with skilled
            artisans and perfumers who share our dedication to quality and
            creativity.
          </p>

          <p>
            &nbsp; &nbsp; &nbsp; Our mission is to help you discover a signature
            scent that resonates with your essence — whether it evokes timeless
            elegance, bold confidence, or subtle allure. We believe that perfume
            is a personal journey, a way to tell your story without words.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
