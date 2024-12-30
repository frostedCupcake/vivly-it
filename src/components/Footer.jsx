import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="contact" className="bg-gray-800 text-white px-4 py-10">
        <div className="w-full  md:max-w-7xl mx-auto text-center">
          <h3 className="text-lg md:text-xl font-bold">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:vg@vivly.in" className="underline">
              vg@vivly.in
            </a>
          </p>
          <p>&copy; 2024 Concreate Technologies Private Limited</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
