"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />

      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.questinc.com/images/blog-posts/nearshoring-onshoring-offshoring.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Offshoring & Consulting
            </h1>
            <div className="w-12 h-1 bg-pink-500 mx-auto"></div>
          </div>
        </div>
      </div>
      <section id="delivery-models" className="bg-black px-4 py-10 md:py-20">
        <div className="w-full  md:max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-10 text-white">
            Service Delivery Models
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mx-auto">
            <div className="flex flex-col justify-center items-center text-left lg:w-[60rem]">
              <div className="bg-gray-800 mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Service Delivery
                </h2>
                <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
                  Our consulting service line is flexible to deliver in various
                  operating models to meet your business objectives and drive
                  the outcomes.
                </p>
              </div>

              <div className="bg-gray-800 mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-white mb-4">
                  BOT (Loan Staff)
                </h2>
                <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
                  Delivering Build-Operate-Transfer solutions, talent
                  development, financial management, and OPEX/CAPEX optimization
                  for seamless project execution.
                </p>
              </div>

              <div className="bg-gray-800 mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Market Exposure
                </h2>
                <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
                  With our strong 125+ years of collective experience across
                  sectors like financial services, manufacturing, IT services,
                  and Oil and Gas, we help our clients in creating new markets.
                </p>
              </div>
            </div>
            {/* <img
              src="/assets/service-delivery.webp"
              alt="Service Delivery"
              className="w-full md:w-[25rem] shadow-xl h-[18rem] md:h-[25rem] mx-auto rounded-lg"
            /> */}
          </div>
        </div>
      </section>
      <section id="services" className="bg-black px-4 py-10 md:py-20 h-auto">
        <div className="w-full  md:max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-10 text-white">
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
      <Footer />
    </div>
  );
};

export default page;
