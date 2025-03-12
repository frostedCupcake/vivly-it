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
      <div className=" overflow-x-hidden bg-black">
        <Navbar />

        <section id="welcome" className="relative  md:px-4 pt-[1rem] lg:pt-28">
          <div className="w-[100vw] md:w-[80vw] mx-auto flex flex-col pt-20 pb-10 md:pb-[10rem] lg:flex-row lg:items-center justify-center">
            <div className="mx-auto w-[84vw] lg:w-[40rem]">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                Welcome to Vivly.
              </h1>
              <p className="text-[1rem] leading-relaxed md:text-[1.1rem] italic text-white text-justify md:text-left">
                From global giants to game-changing startups, we deliver
                innovative, results-driven solutions that turn visions into
                reality—explore how we can redefine your success.
              </p>
            </div>
            <div className="md:w-1/3 mx-auto md:ml-auto">
              <img
                src="/assets/logo-re.png"
                alt="vivly brand logo"
                className="w-[13rem]  md:w-[20rem] ml-auto rounded-xl animate-oscillate"
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
              <p className="text-white text-[1rem] md:text-[1.1rem] italic leading-relaxed">
                We pride ourselves on our ability to deliver innovative,
                high-quality solutions that drive tangible results for our
                clients. By combining our deep industry knowledge with
                cutting-edge technologies, we help businesses enhance their
                operational efficiency, improve customer engagement, and achieve
                sustainable growth.
              </p>
              <p className="text-white text-[1rem] md:text-[1.1rem] italic leading-relaxed">
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

        {/* Trusted By Section */}
        <section className="relative bg-black px-4 py-10">
          <div className="w-[80vw] mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-16">
              Trusted by
            </h1>
            <div className="grid grid-cols-2 md:hidden  gap-5 mx-auto">
              <div className="flex md:w-[15rem] flex-col">
                <img
                  src="https://www.carbon.earth/assets/ce.png"
                  alt="Carbon Earth"
                  className="w-[8rem] bg-black md:w-[15rem] md:h-[15rem] rounded-xl"
                />
                <p className="text-[1.3rem] text-center md:w-[15rem] font-bold">
                  Carbon Earth
                </p>
              </div>
              <img
                src="https://pbs.twimg.com/profile_images/1119211326935404545/J0Vt4mRD_400x400.jpg"
                alt="Pink List India"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/65c5ca91394a0791985dffb1_Schbang%20Logo%20-%20Emblem-Black.png"
                alt="Schbang"
                className="w-[8rem] bg-white md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/736x/43/b6/b4/43b6b4a29c8ce1dc69409903ffc4925c.jpg"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://play-lh.googleusercontent.com/__epMJq_flh2jLnFwCmBt4lHL3FkYvQDj6dZ2yIOvYK2tdruQ8I7PWYvkXi5hJQMxuo"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
            </div>
            <div className=" md:flex scrollable infinite  gap-5 mx-auto hidden">
              <div className="flex md:w-[15rem] flex-col">
                <img
                  src="https://www.carbon.earth/assets/ce.png"
                  alt="Carbon Earth"
                  className="w-[8rem] bg-black md:w-[15rem] md:h-[15rem] rounded-xl"
                />
                <p className="text-[1.3rem] text-center md:w-[15rem] font-bold">
                  Carbon Earth
                </p>
              </div>
              <img
                src="https://pbs.twimg.com/profile_images/1119211326935404545/J0Vt4mRD_400x400.jpg"
                alt="Pink List India"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/65c5ca91394a0791985dffb1_Schbang%20Logo%20-%20Emblem-Black.png"
                alt="Schbang"
                className="w-[8rem] bg-white md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/736x/43/b6/b4/43b6b4a29c8ce1dc69409903ffc4925c.jpg"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              {/* <img
                src="https://play-lh.googleusercontent.com/__epMJq_flh2jLnFwCmBt4lHL3FkYvQDj6dZ2yIOvYK2tdruQ8I7PWYvkXi5hJQMxuo"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              /> */}
              <div className="flex md:w-[15rem] flex-col">
                <img
                  src="https://www.carbon.earth/assets/ce.png"
                  alt="Carbon Earth"
                  className="w-[8rem] bg-black md:w-[15rem] md:h-[15rem] rounded-xl"
                />
                <p className="text-[1.3rem] text-center md:w-[15rem] font-bold">
                  Carbon Earth
                </p>
              </div>
              <img
                src="https://pbs.twimg.com/profile_images/1119211326935404545/J0Vt4mRD_400x400.jpg"
                alt="Pink List India"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/65c5ca91394a0791985dffb1_Schbang%20Logo%20-%20Emblem-Black.png"
                alt="Schbang"
                className="w-[8rem] bg-white md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/736x/43/b6/b4/43b6b4a29c8ce1dc69409903ffc4925c.jpg"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://play-lh.googleusercontent.com/__epMJq_flh2jLnFwCmBt4lHL3FkYvQDj6dZ2yIOvYK2tdruQ8I7PWYvkXi5hJQMxuo"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <div className="flex md:w-[15rem] flex-col">
                <img
                  src="https://www.carbon.earth/assets/ce.png"
                  alt="Carbon Earth"
                  className="w-[8rem] bg-black md:w-[15rem] md:h-[15rem] rounded-xl"
                />
                <p className="text-[1.3rem] text-center md:w-[15rem] font-bold">
                  Carbon Earth
                </p>
              </div>
              <img
                src="https://pbs.twimg.com/profile_images/1119211326935404545/J0Vt4mRD_400x400.jpg"
                alt="Pink List India"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/65c5ca91394a0791985dffb1_Schbang%20Logo%20-%20Emblem-Black.png"
                alt="Schbang"
                className="w-[8rem] bg-white md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://i.pinimg.com/736x/43/b6/b4/43b6b4a29c8ce1dc69409903ffc4925c.jpg"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
              <img
                src="https://play-lh.googleusercontent.com/__epMJq_flh2jLnFwCmBt4lHL3FkYvQDj6dZ2yIOvYK2tdruQ8I7PWYvkXi5hJQMxuo"
                alt="Client Logo"
                className="w-[8rem] md:w-[15rem] rounded-xl"
              />
            </div>
          </div>
        </section>

        <div className="bg-black ">
          <h1 className=" text-white text-center pt-16 text-4xl font-bold">
            {" "}
            Team
          </h1>
          <div className="flex flex-col lg:flex-row justify-center gap-32 mt-10 items-center p-10">
            <div className="flex py-3 bg-gray-900 shadow-xl rounded-xl text-white flex-col justify-center items-center w-[80vw] md:w-[20rem]">
              <img
                className="rounded-xl w-[14rem] h-[15rem]"
                src="/assets/f2.png"
              />
              <h1 className="text-[1.2rem] md:text-[1.7rem] mt-5">
                {" "}
                Vivasvan Gadepalli
              </h1>
              <p className="text-center mb-5 text-[1rem] font-semibold md:text-[1.3rem]">
                Co-Founder
              </p>
              <div className="flex flex-col items-center justify-left">
                <a
                  href="/vg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center bg-white/50 p-2 rounded-xl hover:bg-white/60 transition-all"
                >
                  {/* <FaLinkedin className="mr-2" /> */}
                  Know More
                </a>
              </div>
            </div>
            <div className="flex py-3 bg-gray-900 shadow-xl rounded-xl text-white flex-col justify-center items-center w-[80vw] md:w-[20rem]">
              <img
                className="rounded-xl w-[11rem] h-[15rem]"
                src="/assets/jb-wild-pic.jpg"
              />
              <h1 className="text-[1.2rem] md:text-[1.7rem] mt-5">
                Jaswanth Beere
              </h1>
              <p className="text-center mb-5 text-[1rem] font-semibold md:text-[1.3rem]">
                Co-Founder
              </p>
              <div className="flex flex-col items-center justify-center">
                <a
                  href="/jb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center bg-white/50 p-2 rounded-xl hover:bg-white/60 transition-all"
                >
                  {/* <FaLinkedin className="mr-2" /> */}
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-[90vw] tet text-white/30 mx-auto pb-5" />

        <Footer />
      </div>
    </>
  );
}
