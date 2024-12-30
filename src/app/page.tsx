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
        <div className="w-[80vw] mx-auto flex flex-col pt-20 pb-10 md:pb-[10rem] lg:flex-row lg:items-center justify-center">
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

      <section className="relative bg-black px-4 md:py-5 lg:py-28 ">
        <div className="w-[80vw] flex flex-col gap-2 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            At Vivly, we Engineer Solutions and Power Growth Through Offshoring{" "}
          </h1>
          {/* <p className="text-[1rem] flex flex-col gap-4 md:text-[1.2rem] text-white text-left mt-10">
            <span className="text-[1rem] md:text-[1.5rem] font-medium text-white text-left mt-2">
              {" "}
              We believe in our three step approach:
            </span>
            Observe - We shadow your team
          </p>
          <p className="text-[1rem] md:text-[1.2rem] text-white text-left mt-2">
            Analyze - Assess the problem statements
          </p>
          <p className="text-[1rem] md:text-[1.2rem] text-white text-left mt-2">
            Build - Deliver custom made solutions specific to your problems
          </p> */}
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

      {/* <section id="delivery-models" className="bg-black px-4 py-10 md:py-20">
        <div className="w-full  md:max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-10 text-white">
            Service Delivery Models
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-auto">
            <div className="flex flex-col justify-center items-center text-left lg:w-1/2">
              <p className="text-[1rem] md:text-[1.1rem] text-justify text-white border-white border-2 p-2 rounded-lg mt-5 md:mt-10">
                <span className="block border-b border-white w-fit">
                  Service Delivery
                </span>
                Our consulting service line is flexible to deliver in various
                operating model to meet your business objectives and drive the
                outcomes.
              </p>
              <p className="text-[1rem] md:text-[1.1rem] text-justify text-white border-white border-2 p-2 rounded-lg mt-10">
                <span className="block border-b border-white w-fit">
                  BOT (Loan Staff)
                </span>
                Delivering Build-Operate-Transfer solutions talent development,
                financial management, and OPEX/CAPEX optimization, for seamless
                project execution.
              </p>
              <p className="text-[1rem] md:text-[1.1rem] text-justify text-white border-white border-2 p-2 rounded-lg mt-10">
                <span className="block border-b border-white w-fit">
                  Market Exposure
                </span>
                With our strong 125+ years of collective experience across
                sectors like financial services, manufacturing, IT services, Oil
                and Gas; we help out clients in creating new markets.
              </p>
            </div>
            <img
              src="/assets/service-delivery.webp"
              alt="Service Delivery"
              className="w-full md:w-[30rem] shadow-xl h-[18rem] md:h-[25rem] animate-oscillate mx-auto rounded-lg"
            />
          </div>
        </div>
      </section> */}
      {/* 
      <section id="clients" className="bg-black px-4 py-10 md:py-20">
        <div className="w-full  md:max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-10 text-black">
            We have previously worked with
          </h2>
          <div className="flex flex-col md:flex-row gap-5 mx-auto">
            <img
              src="/assets/clients.png"
              alt="Clients"
              className="w-full md:w-[40rem] shadow-xl animate-oscillate rounded-xl mx-auto"
            />
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
