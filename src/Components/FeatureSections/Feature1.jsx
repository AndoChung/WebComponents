import React from "react";
import defaultImg from '../../assets/images/default.jpg';

const Feature1 = () => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="w-full">
        <div className="mx-auto mb-12 w-full max-w-xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Tagline</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-5 lg:text-5xl">
          Short heading goes here
          </h2>
          <p className="md:text-md">Description</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 lg:gap-y-16">

          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-6 md:mb-8">
              <img src={defaultImg} />
            </div>
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl">
              Small Heading
            </h3>
            <p>Description</p>
            <div className="mt-6 flex items-center gap-4 md:mt-8"></div>
          </div>

          <div className="flex w-full flex-col items-center text-center">
            <div className="mb-6 md:mb-8">
              <img src={defaultImg} />
            </div>
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl">
              Small Heading
            </h3>
            <p>Description</p>
            <div className="mt-6 flex items-center gap-4 md:mt-8"></div>
          </div>

          <div className="flex w-full flex-col items-center text-center">
          <div className="mb-6 md:mb-8">
            <img src={defaultImg} />
          </div>
          <p className="mb-3 font-semibold md:mb-4">Tagline</p>
          <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl">
            Small Heading
          </h3>
          <p>Description</p>
          <div className="mt-6 flex items-center gap-4 md:mt-8"></div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
