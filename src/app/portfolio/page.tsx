"use client";
import Footer from "@/components/Footer";
import Deck from "@/components/Home/Deck";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="pt-[10rem]">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 lg:w-[60rem]">
              Showcasing a few portfolios Vivly has worked on.
            </h1>
            <div className="w-12 h-1 bg-pink-500 mx-auto"></div>
          </div>
        </div>
      </div>
      <Deck />

      <Footer />
    </div>
  );
};

export default page;
