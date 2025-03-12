// pages/index.js
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-black text-white min-h-screen py-10 px-5 pt-[10rem]">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Automated Influencer Marketing
          </h1>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
          <p className="mb-6 leading-relaxed text-[1.1rem]">
            We aim to bridge the gap between brands and influencers by offering
            an innovative platform that simplifies the process of discovery,
            collaboration, and performance tracking. With our tool, brands can
            unlock the true potential of influencer marketing, creating
            impactful campaigns that resonate.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">What we do</h2>
          <p className="mb-6 leading-relaxed text-[1.1rem]">
            We empower brands to build authentic connections with their
            audience, reduce inefficiencies in influencer marketing campaigns,
            enable data-driven decision-making for maximum ROI, and foster
            long-term collaborations between influencers and brands.
          </p>
          <p className="mb-6 leading-relaxed text-[1.1rem]">
            Developed proprietary AI for precise influencer matching, integrated
            real-time campaign performance analytics, streamlined workflows with
            automation for onboarding and payments, ensured scalability to
            support global campaigns and large datasets, and provided an
            intuitive, user-friendly interface for marketers/agencies.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-left mb-10">
            How It Works
          </h2>
          <div className="relative flex flex-col items-center space-y-10 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center text-xl font-bold rounded-full">
                1
              </div>
              <p className="mt-4 text-lg font-medium max-w-[200px]">
                Define campaign objectives, creative ideas, and goals.
              </p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-full h-1 bg-gray-300 self-center"></div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center text-xl font-bold rounded-full">
                2
              </div>
              <p className="mt-4 text-lg font-medium max-w-[200px]">
                Identify the right influencers through AI-powered
                recommendations.
              </p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-full h-1 bg-gray-300 self-center"></div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white flex items-center justify-center text-xl font-bold rounded-full">
                3
              </div>
              <p className="mt-4 text-lg font-medium max-w-[200px]">
                Onboard influencers with seamless tools for communication and
                payments.
              </p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-full h-1 bg-gray-300 self-center"></div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center text-xl font-bold rounded-full">
                4
              </div>
              <p className="mt-4 text-lg font-medium max-w-[200px]">
                Launch the campaign and monitor performance in real-time.
              </p>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-full h-1 bg-gray-300 self-center"></div>

            {/* Step 5 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center text-xl font-bold rounded-full">
                5
              </div>
              <p className="mt-4 text-lg font-medium max-w-[200px]">
                Analyze results and optimize future campaigns for success.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Explore the Platform</h2>
          <p className="mb-6 leading-relaxed text-[1.1rem]">
            See how our tool can transform your campaigns. Watch the demo video
            to understand how we empower marketers to achieve their goals with
            ease.
          </p>
          <div className="mb-8">
            <iframe
              width="400"
              height="400"
              src="https://www.youtube.com/embed/S7L8XqLvmQk?si=2sr37GLEmNqUd6AA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full rounded-md shadow-lg"
            ></iframe>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <p className="mb-6 leading-relaxed text-[1.1rem]">
            Collaboration and partnership are at the heart of what we do. We
            provide personalized support, ensuring that every campaign achieves
            its full potential.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Future Work (Tavrin) - AI Marketeer
          </h2>
          <p className="mb-6 leading-relaxed text-[1.1rem]">
            We have a bold vision to replace the entire marketing team with a
            single AI-driven agent which is capable of understanding audiences
            with unmatched depth, crafting hyper-personalized campaigns at
            scale, optimizing results in real time.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="mb-6 leading-relaxed text-[1.1rem]">
            Ready to elevate your influencer marketing campaigns? Contact us
            today to learn more about our innovative platform and how it can
            help you achieve your goals.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default page;
