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
            Revolutionizing Influencer Marketing
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-300">
            Transforming influencer campaigns with cutting-edge AI and robust
            collaboration tools. Empowering marketers with insights and
            efficiency.
          </p>
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
            intuitive, user-friendly interface for marketers.
          </p>
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
          <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-[1.1rem]">
            <li>Define campaign objectives, creative ideas, and goals.</li>
            <li>
              Identify the right influencers through AI-powered recommendations.
            </li>
            <li>
              Onboard influencers with seamless tools for communication and
              payments.
            </li>
            <li>Launch the campaign and monitor performance in real-time.</li>
            <li>Analyze results and optimize future campaigns for success.</li>
          </ol>
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
