"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.questinc.com/images/blog-posts/nearshoring-onshoring-offshoring.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
        <div className="relative flex items-center justify-center h-full text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Offshoring & Consulting
            </h1>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-10 px-6 md:py-20 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl italic leading-relaxed">
            Our collaborative approach ensures that we work closely with our
            clients to understand their specific needs and develop customised
            solutions that align with their business objectives. With a proven
            track record of success, Vivly is committed to helping organisations
            navigate the complexities of the business landscape and achieve
            their full potential.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-10 px-6 md:py-20 md:px-10 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            At Vivly, we Engineer Solutions and Power Growth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Observe",
                content:
                  "We shadow your team to understand workflows, challenges, and opportunities.",
              },
              {
                title: "Analyze",
                content:
                  "Assess the problem statements to identify gaps and areas for improvement.",
              },
              {
                title: "Build",
                content:
                  "Deliver custom-made solutions specific to your problems, ensuring scalability and efficiency.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-black border border-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="leading-relaxed text-base">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Delivery Models */}
      <section className="py-10 px-6 md:py-20 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Service Delivery Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Service Delivery",
                content:
                  "Our consulting service line is flexible to deliver in various operating models to meet your business objectives and drive outcomes.",
              },
              {
                title: "BOT (Loan Staff)",
                content:
                  "Delivering Build-Operate-Transfer solutions, talent development, financial management, and OPEX/CAPEX optimization for seamless project execution.",
              },
              {
                title: "Market Exposure",
                content:
                  "With our strong 125+ years of collective experience across sectors like financial services, manufacturing, IT services, and Oil and Gas, we help our clients create new markets.",
              },
            ].map((model, index) => (
              <div
                key={index}
                className="bg-black border border-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{model.title}</h3>
                <p className="leading-relaxed text-base">{model.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6 md:py-20 md:px-10 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Technology Services",
                items: [
                  "Custom Software Development",
                  "Web and Mobile Application Development",
                  "Cloud Solutions and Integration",
                  "Data Analytics and Business Intelligence",
                  "IT Infrastructure Management",
                  "Developing and Deploying Large Language Models (LLMs)",
                  "Integrating GPT Layers into Existing Applications",
                  "Building and Managing AI Agents for Automation",
                ],
              },
              {
                title: "Consulting Services",
                items: [
                  "Business Intelligence Solutions",
                  "Data Analytics and Visualization",
                  "Technology Consulting",
                  "IT Strategy and Planning",
                  "Sustainability-Focused Technology Solutions",
                ],
              },
            ].map((service, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <ul className="list-disc list-inside">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
