import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Card = ({
  imageUrl,
  websiteLink,
  title,
  description1,
  description2,
  big = "false",
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start gap-10">
      {/* Image and Link */}
      <div className="flex flex-col items-center justify-center gap-5 w-full lg:w-auto">
        <img
          src={imageUrl}
          alt="Card Image"
          className={`w-full lg:w-[15rem] ${
            big == "true" ? "lg:w-[20rem]" : ""
          } rounded-xl`}
        />
        <a
          target="_blank"
          href={websiteLink}
          className="bg-white text-black w-fit mx-auto rounded-xl px-3 py-1 flex items-center gap-2"
        >
          Explore
          <MdArrowOutward />
        </a>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-[40rem] text-[1rem] md:text-[1.1rem] flex flex-col gap-2">
        <p>{description1}</p>
        <p>{description2}</p>
      </div>
    </div>
  );
};

export default Card;
