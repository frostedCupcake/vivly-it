"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section
        id="welcome"
        className="relative bg-black px-4 md: pt-5 lg:pt-28"
      >
        <div className="w-[80vw] h-[80vh] mx-auto flex flex-col pt-20 pb-10 md:pb-[10rem] lg:flex-row lg:items-center justify-center">
          <div className="w-full lg:w-[40rem]">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Welcome to Vivly.
            </h1>
            {/* <p className="text-[1rem] md:text-[1.2rem] text-white text-left mt-10">
              <span className="font-bold"> vivly</span>, formerly known as
              Atrillu Private Limited, was established in 2018 as a professional
              services and consulting firm with a strong focus on the TMT and
              Tech sector.
            </p> */}
            <p className="text-[1rem] md:text-[1.2rem] text-white text-left mt-2">
              Your one stop destination for strategic software solutions.
            </p>
            <div className="flex flex-col md:flex-row md:gap-5">
              <a href="/engineering-services">
                <button className="hover:-translate-y-1 transition-all text-[.8rem] md:text-[.9rem] w-[16rem] mt-5 md:mt-10 bg-white text-black rounded-xl px-4 py-2 flex items-center gap-2">
                  Engineering Solutions
                  <IoIosArrowForward />
                </button>
              </a>
              <a href="/offshoring-&-consulting">
                <button className="hover:-translate-y-1 transition-all text-[.8rem] md:text-[.9rem] w-[16rem] mt-2 md:mt-10 bg-white text-black rounded-xl px-4 py-2 flex items-center gap-2">
                  Offshoring and Consulting
                  <IoIosArrowForward />
                </button>
              </a>
            </div>
          </div>
          <div className="w-1/3 ml-auto">
            <img
              src="/assets/vivly.png"
              alt="vivly brand logo"
              className="w-[10rem]  hidden md:block  md:w-[20rem] ml-auto rounded-xl shadow-xl animate-oscillate"
            />
          </div>
        </div>
      </section>
      <hr className="w-[90vw] tet text-white/30 mx-auto pb-5" />

      <section className="relative bg-black px-4 py-5 lg:py-28 ">
        <div className="w-[80vw] flex flex-col gap-2 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            At Vivly, we Engineer Solutions and Power Growth Through Offshoring{" "}
          </h1>

          <div className="bg-gray-800 mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">Observe</h2>
            <p className="text-white text-[1rem] leading-relaxed">
              We shadow your team to understand workflows, challenges, and
              opportunities.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">Analyze</h2>
            <p className="text-white text-[1rem] leading-relaxed">
              Assess the problem statements to identify gaps and areas for
              improvement.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">Build</h2>
            <p className="text-white text-[1rem] leading-relaxed">
              Deliver custom-made solutions specific to your problems, ensuring
              scalability and efficiency.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
