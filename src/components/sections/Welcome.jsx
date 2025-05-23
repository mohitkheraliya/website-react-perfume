import React from "react";

const Welcome = () => {
  return (
    <>
      <section className="main__container">
        <div className="welcome py-[10rem] tab:py-[5rem] tab-sm:py-[3rem]">
          <div className="w-[50%] tab:w-[60%] tab-sm:w-[80%] flex flex-col items-center justify-center">
            <h1 className="text-[3.5rem] mb-10 text-[#AB572D] tab-sm:text-[3.3rem]">
              Welcome to Angel Perfumery
            </h1>
            <p className="paragraph">
              &nbsp; &nbsp; &nbsp; &nbsp;Welcome to Angel Perfumery, where
              the spirit of victory and triumph come alive through scents that
              empower and inspire. Our curated collection, aptly named "Victory
              Scented," is a celebration of success and elegance, designed to
              unleash your victorious essence. Indulge in the sweet taste of
              triumph with captivating fragrances that tell the tale of your
              achievements.
              <p className="paragraph">
                &nbsp; &nbsp; &nbsp; &nbsp; At Angel Perfumery, we believe that every
                victory deserves a signature scent, and we are dedicated to
                providing unforgettable fragrances that elevate your spirit and
                empower your journey.
              </p>
            </p>
          </div>
        </div>

        <div className="our-values w-full flex h-[50rem] tab:h-[44rem] tab-sm:h-[44rem]">
          <div className="our-values__image w-[40%] tab-md:w-[50%] tab-md:hidden">
            <img
              src="/images/spraybottel.png"
              alt="our values image"
              className="our-values__img"
            />
          </div>
          <div className="our-values__content w-[40%] tab:w-[50%] tab-md:w-[60%] tab-sm:w-[80%] mx-auto flex flex-col items-center justify-center">
            <div className="text-[3.5rem] text-white mb-10 tab-sm:text-[3.3rem]">
              Our Values
            </div>
            <p className="paragraph">
              &nbsp; &nbsp; &nbsp; &nbsp; At Angel Perfumery, our perfume retail
              store is built on a foundation of passion and authenticity. We
              believe in celebrating the individuality of every customer,
              providing a diverse collection of scents that resonate with their
              unique personality and style. Our dedicated team of fragrance
              enthusiasts is committed to creating a welcoming and inclusive
              environment, where connections are forged, and inspiration
              thrives.
            </p>
            <p className="paragraph mt-5 mb:hidden">
              &nbsp; &nbsp; &nbsp; &nbsp;Embracing sustainability and continuous
              learning, Angel Perfumery strives to be more than just a shopping
              destination; we are a community that inspires and empowers
              individuals on their fragrance journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
