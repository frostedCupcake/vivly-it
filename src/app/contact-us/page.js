"use client";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="w-12 h-1 bg-pink-500 mx-auto"></div>
          </div>
        </div>
      </div>
      <ContactPage />
      <Footer />
    </div>
  );
};

export default page;
