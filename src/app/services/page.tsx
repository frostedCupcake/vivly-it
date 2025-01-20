"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const page = () => {
  const [hovered1, setHovered1] = useState<string | null>(null);
  const [hovered2, setHovered2] = useState<string | null>(null);

  const techServices = [
    "Large Language Models (LLMs)",
    "AI Agents for Automation",
    "Custom Software Development",
    "Web and Mobile Application Development",
    "Cloud Solutions and Integration",
    "Data Analytics and Business Intelligence",
    "IT Infrastructure Management",
  ];

  const consultingServices = [
    "Business Intelligence Solutions",
    "Data Analytics and Visualization",
    "Technology Consulting",
    "IT Strategy and Planning",
    "Sustainability Solutions",
  ];

  const descriptions: any = {
    "Custom Software Development":
      "Create tailored software solutions designed to meet your unique business needs, enhancing productivity and driving innovation.",
    "Web and Mobile Application Development":
      "Develop responsive web and mobile applications to deliver seamless user experiences across devices.",
    "Cloud Solutions and Integration":
      "Leverage the power of cloud computing to enhance scalability, reduce costs, and streamline operations.",
    "Data Analytics and Business Intelligence":
      "Unlock actionable insights from your data with advanced analytics and BI tools, driving smarter decision-making.",
    "IT Infrastructure Management":
      "Ensure robust and efficient IT operations with comprehensive infrastructure management solutions.",
    "Large Language Models (LLMs)":
      "Implement cutting-edge AI models to streamline workflows, enhance communication, and automate processes.",
    "AI Agents for Automation":
      "Deploy AI-driven agents to automate repetitive tasks and improve operational efficiency.",
    "Business Intelligence Solutions":
      "Transform raw data into meaningful insights to support strategic business decisions.",
    "Data Analytics and Visualization":
      "Visualize complex data with intuitive dashboards, enabling better analysis and reporting.",
    "Technology Consulting":
      "Receive expert advice on technology strategy, helping you navigate the rapidly evolving digital landscape.",
    "IT Strategy and Planning":
      "Develop comprehensive IT strategies aligned with your business objectives to drive growth and innovation.",
    "Sustainability Solutions":
      "Adopt sustainable technologies to reduce your carbon footprint and promote environmental responsibility.",
  };
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Services</h1>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-10  md:py-20 md:px-10">
        <div className="w-[95vw] md:w-[55rem] mx-auto text-center">
          <p className=" text-[.9rem] md:text-xl italic leading-relaxed">
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
      <section className="py-10 px-6 md:py-10 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technology Services */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Technology Services</h2>
            <ul className="space-y-4">
              {techServices.map((service) => (
                <li
                  key={service}
                  className={`cursor-pointer text-white md:text-gray-400 text-lg transition-colors duration-300 ${
                    hovered1 === service
                      ? "md:text-white font-nomal md:font-bold"
                      : "text-gray-400"
                  }`}
                  onMouseEnter={() => setHovered1(service)}
                  //   onMouseLeave={() => setHovered(null)}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Highlighted Service */}
          <div className="hidden md:block">
            <h3 className="text-2xl font-semibold mb-4">
              {hovered1 || "Hover over a service to see details"}
            </h3>
            <p className="leading-relaxed text-lg">
              {descriptions[hovered1 ?? ""] ||
                "Hover over a service to view its description."}
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Consulting Services */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Consulting Services</h2>
            <ul className="space-y-4">
              {consultingServices.map((service) => (
                <li
                  key={service}
                  className={`cursor-pointer w-fit text-white md:text-gray-400 text-lg transition-colors duration-300 ${
                    hovered2 === service
                      ? "md:text-white font-nomal md:font-bold"
                      : "text-gray-400"
                  }`}
                  onMouseEnter={() => setHovered2(service)}
                  //   onMouseLeave={() => setHovered(null)}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Highlighted Service */}
          <div className="hidden md:block">
            <h3 className="text-2xl font-semibold mb-4">
              {hovered2 || "Hover over a service to see details"}
            </h3>
            <p className="leading-relaxed text-lg">
              {descriptions[hovered2 ?? ""] ||
                "Hover over a service to view its description."}
            </p>
          </div>
        </div>
      </section>

      {/* Service Delivery Models */}
      <section className="py-10 px-6 md:py-10 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Service Delivery Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Service Delivery",
                content:
                  "Our consulting service line is flexible to deliver in various operating models to meet your business objectives and drive outcomes.",
              },
              {
                title: "BOT (Staff Arugumentation)",
                content:
                  "Delivering Build-Operate-Transfer solutions, talent development, financial management, and OPEX/CAPEX optimization for seamless project execution.",
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

      <Footer />
    </div>
  );
};

export default page;
