"use client";
import React, { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <nav className="bg-[#477F8E]/90 text-white fixed top-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-10">
          <div className="text-xl md:text-2xl font-bold">
            <img
              src="/assets/vivly.png"
              alt="vivly brand logo"
              className="w-[2rem] md:w-[3rem] mx-auto rounded-xl "
            />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#welcome" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#delivery-models" className="hover:underline">
                Delivery Models
              </a>
            </li>
            {/* <li>
              <a href="#clients" className="hover:underline">
                Clients
              </a>
            </li> */}
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 px-4 py-6">
              <li>
                <a href="#welcome" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#delivery-models" className="hover:underline">
                  Delivery Models
                </a>
              </li>
              {/* <li>
                <a href="#clients" className="hover:underline">
                  Clients
                </a>
              </li> */}
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <section
        id="welcome"
        className="relative bg-[#477F8E]/90 px-4 md: pt-5 lg:pt-28"
      >
        <div className="w-[90vw] md:w-full  md:max-w-7xl mx-auto flex flex-col pt-20 pb-10 md:pb-[10rem] lg:flex-row lg:items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Welcome to Concreate Technologies.
            </h1>
            <p className="text-[1rem] md:text-[1.2rem] text-white text-justify mt-10">
              Concreate Technologies -{" "}
              <span className="font-bold">cobranded by vivly</span>, formerly
              known as Atrillu Private Limited, was established in 2018 as a
              professional services and consulting firm with a strong focus on
              the TMT and Tech sector.
            </p>
            <p className="text-[1rem] md:text-[1.2rem] text-white text-justify mt-2">
              We deliver innovative technology transformation and consulting
              services for global clients with a focus on excellence and smart
              outcomes.
            </p>
          </div>
          <div className="lg:w-1/2 mx-auto">
            <img
              src="/assets/vivly.png"
              alt="vivly brand logo"
              className="w-[10rem]  hidden md:block  md:w-[20rem] mx-auto rounded-xl shadow-xl animate-oscillate"
            />
          </div>
        </div>
      </section>

      <section id="services" className="bg-gray-100 px-4 py-10 md:py-20 h-auto">
        <div className="w-full  md:max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-10 text-black">
            Service Lines
          </h2>
          <div className="flex flex-col md:flex-row gap-5 mx-auto">
            <img
              src="/assets/IT-consulting.png"
              alt="IT Consulting"
              className="w-[90vw] md:w-[45vw]  shadow-xl rounded-xl mx-auto"
            />
            <img
              src="/assets/TT-services.png"
              alt="TT Services"
              className="w-[90vw] md:w-[45vw]  shadow-xl rounded-xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section
        id="delivery-models"
        className="bg-[#477F8E]/90 px-4 py-10 md:py-20"
      >
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
      </section>
      {/* 
      <section id="clients" className="bg-gray-100 px-4 py-10 md:py-20">
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

      <footer id="contact" className="bg-gray-800 text-white px-4 py-10">
        <div className="w-full  md:max-w-7xl mx-auto text-center">
          <h3 className="text-lg md:text-xl font-bold">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:vg@vivly.in" className="underline">
              vg@vivly.in
            </a>
          </p>
          <p>&copy; 2024 Concreate Technologies Private Limited</p>
        </div>
      </footer>
    </div>
  );
}
