// pages/index.js
import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-200 px-4 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome to Concrete Technologies
            </h1>
            <p className="text-lg text-gray-600">
              Delivering innovative technology transformation and consulting
              services for global clients with a focus on excellence and smart
              outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-black">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Custom Enterprise Software
              </h3>
              <p className="text-gray-600">
                We build tailored software solutions to drive success and
                efficiency for businesses.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Mobile Application Development
              </h3>
              <p className="text-gray-600">
                Creating powerful mobile apps with a focus on UX and
                performance.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Cloud Migration Services
              </h3>
              <p className="text-gray-600">
                Seamless migration to cloud environments with enhanced security
                and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Models Section */}
      <section className="bg-blue-100 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-black">
            Service Delivery Models
          </h2>
          <p className="text-lg text-gray-700">
            Our consulting service lines are flexible to deliver outcomes
            through Time & Material, Build-Operate-Transfer, or outcome-based
            models.
          </p>
        </div>
      </section>

      {/* SAP Practice */}
      <section className="bg-gray-100 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-black">SAP Practice</h2>
          <p className="text-lg text-gray-700">
            Our comprehensive SAP services cover system analysis,
            implementation, and transformation.
          </p>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-blue-200 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-black">
            Case Study: SAP S/4HANA Implementation
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We successfully implemented SAP S/4HANA for a multi-state business
            with 200,000+ customers, achieving seamless integration and high
            scalability.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white px-4 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:vg@vivly.in" className="underline">
              vg@vivly.in
            </a>
          </p>
          <p>&copy; 2024 Concrete Technologies Private Limited</p>
        </div>
      </footer>
    </div>
  );
}
