"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import Timeline from "../components/Timeline";
import Deck from "../components/Home/Deck";
export default function Home() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          // backgroundImage: `url('https://img.freepik.com/premium-photo/office-interior-room-space-background-working-place-generative-ai_839051-3687.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(2px)",
          WebkitFilter: "blur(2px)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>
      <div className="min-h-screen">
        <Navbar />

        <section id="welcome" className="relative  px-4 md: pt-5 lg:pt-28">
          <div className="w-[80vw] h-[80vh] mx-auto flex flex-col pt-20 pb-10 md:pb-[10rem] lg:flex-row lg:items-center justify-center">
            <div className="w-full lg:w-[40rem]">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                Welcome to Vivly.
              </h1>
              {/* <p className="text-[1rem] md:text-[1.2rem] text-white text-left mt-10">
              <span className="font-bold"> vivly</span>, formerly known as
              Atrillu Private Limited, was established in 2018 as a professional
              services and consulting firm with a strong focus on the TMT and
              Tech sector.
            </p> */}
              {/* the tag line should be techonology oriented */}
              <p className="text-[1rem] leading-relaxed md:text-[1.1rem] italic text-white text-left">
                We specialize in on-demand staff augmentation and outcome
                delivery, offering comprehensive technology and business
                services tailored to meet the unique needs of our clients.
              </p>
              <div className="flex flex-col md:flex-row md:gap-5">
                {/* <a href="/engineering-services">
                  <button className="hover:-translate-y-1 transition-all text-[.8rem] md:text-[.9rem] w-[16rem] mt-5 md:mt-10 bg-white text-black rounded-xl px-4 py-2 flex items-center gap-2">
                    Engineering Solutions
                    <IoIosArrowForward />
                  </button>
                </a> */}
                {/* <a href="/offshoring-&-consulting">
                  <button className="hover:-translate-y-1 transition-all text-[.8rem] md:text-[.9rem] w-[16rem] mt-2 md:mt-10 bg-white text-black rounded-xl px-4 py-2 flex items-center gap-2">
                    Offshoring and Consulting
                    <IoIosArrowForward />
                  </button>
                </a> */}
              </div>
            </div>
            <div className="w-1/3 ml-auto">
              <img
                src="/assets/vivly.png"
                alt="vivly brand logo"
                className="w-[10rem]  hidden md:block  md:w-[20rem] ml-auto rounded-xl animate-oscillate"
              />
            </div>
          </div>
        </section>
        {/* <Timeline /> */}
        <section className="relative bg-black px-4 py-5 lg:py-10 ">
          <div className="w-[80vw] flex flex-col gap-2 mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What We Do at Vivly
            </h1>

            <div className="flex flex-col gap-5 leading-relaxed rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-white text-[1.1rem] italic leading-relaxed">
                We pride ourselves on our ability to deliver innovative,
                high-quality solutions that drive tangible results for our
                clients. By combining our deep industry knowledge with
                cutting-edge technologies, we help businesses enhance their
                operational efficiency, improve customer engagement, and achieve
                sustainable growth.
              </p>
              <p className="text-white text-[1.1rem] italic leading-relaxed">
                Our collaborative approach ensures that we work closely with our
                clients to understand their specific needs and develop
                customised solutions that align with their business objectives.
                With a proven track record of success, Vivly is committed to
                helping organisations navigate the complexities of the business
                landscape and achieve their full potential.
              </p>
              <p className="text-white text-[1.1rem] italic leading-relaxed">
                Over the years, we have partnered with some of the most renowned
                agencies, including Schbang, to deliver enterprise-ready
                products for prestigious clients such as HDFC Life Insurance,
                Amazon, Mahindra, Baskin Robbins, Daniel Wellington, and many
                more. Our commitment to excellence and customer satisfaction has
                positioned us as a trusted partner in the industry.
              </p>
            </div>
          </div>
        </section>
        {/* <Deck /> */}
        <section id="services" className="relative bg-black px-4 py-10">
          <div className="w-[90vw] mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Technology Services */}
              <div className="text-white flex-1">
                <h2 className="text-2xl font-semibold mb-4">
                  Technology Services
                </h2>
                <ul className="list-disc text-base md:text-lg list-inside">
                  <li>Custom Software Development</li>
                  <li>Web and Mobile Application Development</li>
                  <li>Cloud Solutions and Integration</li>
                  <li>Data Analytics and Business Intelligence</li>
                  <li>IT Infrastructure Management</li>
                  <li>Developing and Deploying Large Language Models (LLMs)</li>
                  <li>Integrating GPT Layers into Existing Applications</li>
                  <li>Building and Managing AI Agents for Automation</li>
                </ul>
              </div>

              {/* Consulting Services */}
              <div className="text-white flex-1">
                <h2 className="text-2xl font-semibold mb-4">
                  Consulting Services
                </h2>
                <ul className="list-disc text-base md:text-lg list-inside">
                  <li>Business Intelligence Solutions</li>
                  <li>Data Analytics and Visualization</li>
                  <li>Technology Consulting</li>
                  <li>IT Strategy and Planning</li>
                  <li>Sustainability-Focused Technology Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="relative bg-black px-4 py-10">
          <div className="w-[90vw] mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Trusted by
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-fit mx-auto">
              <img
                src="https://www.carbon.earth/assets/logo.png"
                alt="Carbon Earth"
                className="w-full md:w-[15rem] rounded-xl"
              />
              <img
                src="https://pbs.twimg.com/profile_images/1119211326935404545/J0Vt4mRD_400x400.jpg"
                alt="Pink List India"
                className="w-full md:w-[15rem] rounded-xl"
              />
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/404/6a60dc204832053.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png"
                alt="Schbang"
                className="w-full md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                alt="Client Logo"
                className="w-full md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/736x/43/b6/b4/43b6b4a29c8ce1dc69409903ffc4925c.jpg"
                alt="Client Logo"
                className="w-full md:w-[15rem] rounded-xl"
              />
              <img
                src="https://play-lh.googleusercontent.com/__epMJq_flh2jLnFwCmBt4lHL3FkYvQDj6dZ2yIOvYK2tdruQ8I7PWYvkXi5hJQMxuo"
                alt="Client Logo"
                className="w-full md:w-[15rem] rounded-xl"
              />
            </div>
          </div>
        </section>
        <hr className="w-[90vw] tet text-white/30 mx-auto pb-5" />

        <Footer />
      </div>
    </>
  );
}
