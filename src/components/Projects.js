import React from "react";
import Box from "./Box";

const Projects = () => {
  return (
    <div className="relative">
      <p className="text-3xl md:text-5xl font-bold mb-20 mx-auto text-center mt-20">
        Business Portfolio
      </p>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 w-[60rem] h-[60rem] mx-auto group relative">
        <Box color="#00FF00" text="Carbon Earth" year="2024-Present" />{" "}
        {/* Green */}
        <Box
          color="#FF4500"
          text="Influencer Marketing Tool"
          year="2022-Present"
        />{" "}
        {/* Yellow-Orange */}
        <Box color="#FFA500" text="Toonsutra" year="2023" /> {/* Orange */}
        <Box
          color="#FFFFFF"
          text="Automated Marketing Mixed Modeling"
          year="2020"
        />
        <Box color="#FFC0CB" text="Pinklist" year="2020" /> {/* Pink */}
        <Box color="#FFFFFF" text="medicento" year="2020" /> {/* White */}{" "}
        {/* White */}
      </div>
    </div>
  );
};

export default Projects;
