"use client";

import React, { useState } from "react";

// interface WorkExperienceProps {
//   company: string;
//   role: string;
//   description: string;
//   achievements?: string[];
//   startDate: string;
//   endDate?: string;
//   location: string;
//   logo: string;
// }

const WorkExperience = ({
  company,
  role,
  description,
  achievements,
  startDate,
  endDate,
  location,
  logo,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-6xl text-white p-6 rounded-lg mb-4">
      {/* Company Header */}
      <div className=" flex items-center space-x-4">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold">{company}</h3>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-gray-300">{description}</p>

      {/* Achievements - Expandable */}
      {expanded && achievements && (
        <div className="max-w-6xl mt-3">
          <h4 className="text-gray-400 font-semibold">Key Achievements →</h4>
          <ul className="list-none mt-2 space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-gray-500">✔</span>
                <p className="text-gray-300">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer - Date & Location */}
      <div className="mt-4 flex justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center space-x-2">
          <span>
            📅 {startDate} - {endDate || "Current"}
          </span>
          <span>📍 {location}</span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-400"
        >
          {expanded ? "↑ Close" : "↓ Know More"}
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;
