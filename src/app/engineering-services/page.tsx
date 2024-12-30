"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://technosofteng.com/wp-content/uploads/2024/03/AdobeStock_714345233-scaled.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Engineering Services
            </h1>
            <div className="w-12 h-1 bg-pink-500 mx-auto"></div>
          </div>
        </div>
      </div>
      {/* <p className="text-[1rem] md:text-[1.2rem] text-white text-left mt-10">
              <span className="font-bold"> vivly</span>, formerly known as
              Atrillu Private Limited, was established in 2018 as a professional
              services and consulting firm with a strong focus on the TMT and
              Tech sector.
            </p> */}

      <section className="relative bg-black px-4 md:py-5 pt-20 lg:pt-28 ">
        <div className="w-[80vw] flex flex-col gap-2 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            We build scalable, modern, and efficient solutions.{" "}
          </h1>

          <div className="bg-gray-800 mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">
              Re-Engineered Products
            </h2>
            <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
              We transform existing solutions by optimizing and enhancing them
              for better performance. Our team thrives on solving complex
              problems with creativity, expertise, and precision. We specialize
              in streamlining feature development and improving maintainability
              to future-proof your software.
            </p>
          </div>

          <div className="bg-gray-800 mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Take to Market MVP
            </h2>
            <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
              We follow a structured, agile process to quickly deliver Minimum
              Viable Products (MVPs) for validation and market testing. By
              prioritizing essential features, we help you launch faster, gather
              feedback, and iterate efficiently.
            </p>
          </div>

          <div className="bg-gray-800 mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">
              Boutique Solutions
            </h2>
            <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
              We create custom software solutions designed specifically for your
              business needs—much like a boutique service. These scalable
              solutions grow with your business, boosting productivity and
              enabling long-term success.
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-black px-4 py-10 lg:pt-28">
        <div className="w-[90vw] md:w-[80vw] flex flex-col gap-6 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center md:text-left">
            Business Portfolio{" "}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col lg:flex-col gap-3 lg:gap-0 items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/assets/carbon-earth.png"
                alt="Carbon Earth"
                className="w-[8rem] mr-6"
              />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Carbon Earth
                </h2>
                <p className="text-white text-[.8rem] leading-relaxed">
                  To make carbon credit markets more transparent, accurate, and
                  scalable while promoting sustainability and climate resilience
                  through data-driven insight and impactful projects by
                  leveraging AI, and machine learning.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-col gap-3 lg:gap-0 items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/assets/influencer-platform.png"
                alt="Influencer Platform"
                className="w-[8rem] mr-6"
              />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Influencer-Business Management Platform
                </h2>
                <p className="text-white text-[.8rem] leading-relaxed">
                  Influencer Platform for businesses to leverage the growing
                  trend of social media marketing. This tool works to allow
                  businesses to work with influencers which best represent their
                  company. This product's KPIs are the quality of data and the
                  AI-backed insights generated.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-col gap-3 lg:gap-0 items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/assets/ad-tracking.png"
                alt="Ad Tracking Tool"
                className="w-[8rem] mr-6"
              />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Ad Tracking Tool
                </h2>
                <p className="text-white text-[.8rem] leading-relaxed">
                  This tool tracks advertisements on various platforms giving
                  detailed insights into how the platform promotes content while
                  collecting competitor advertising tendencies.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-col gap-3 lg:gap-0 items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="/assets/ai-mmm.png"
                alt="AI Powered MMM"
                className="w-[8rem] mr-6"
              />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  AI Powered Marketing Mix Modelling (MMM)
                </h2>
                <p className="text-white text-[.8rem] leading-relaxed">
                  We added the Power of AI and Automation to MMM, enabling
                  businesses to better allocate their marketing budgets, improve
                  targeting & prediction, and simulate scenario testing through
                  Data Science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-black px-4 py-10 lg:py-28">
        <div className="w-[90vw] md:w-[80vw] flex flex-col gap-6 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            R&D Portfolio
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">
                WhatsFarzi
              </h2>
              <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
                Understand, Detect and Mitigate Misinformation on WhatsApp.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">
                Smart Ads Reddit
              </h2>
              <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
                Profiling reddit users based on content to show better ads.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">
                Privacy Leaks on Twitter in Indian Elections 2019
              </h2>
              <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
                Protecting users from leaking their Personally Identifiable
                Information (PII) based on tweeting patterns. Developed a chrome
                extension that nudges users in real time.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">
                Large Scale Profile Analysis on TikTok
              </h2>
              <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
                First look at 500K Indian Profiles on TikTok.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-white mb-4">
                Open Transit Data Delhi
              </h2>
              <p className="text-white text-[.8rem] md:text-[1rem] leading-relaxed">
                Published transit datasets of Delhi Bus Transportation and
                real-time GPS locations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
