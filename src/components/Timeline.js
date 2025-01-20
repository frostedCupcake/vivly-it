import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      title: "Founder & CEO – Carbon Earth",
      duration: "2024 – Present",
      description: [
        "Envisioned building an end-to-end, self-sustaining ecosystem that bridges the gap between industries and green projects.",
        "Developed AI-powered carbon accounting software to measure, track, and report carbon emissions for industries, enabling accurate carbon credit generation.",
        "Created waste management solutions by converting agricultural and poultry waste into biochar, promoting sustainability.",
      ],
    },
    {
      title: "Founder & Product Lead – Influencer Marketing Platform",
      duration: "2022 – 2024",
      description: [
        "Built an AI-powered SaaS platform that increased campaign volume by 2x, cut manual effort by 70%, and improved creator discovery accuracy by 30%.",
        "Hired, managed, and led a high-performing team of IIT alums with experience at global firms like Salesforce and Blackstone Group.",
        "Leveraged 10M+ influencer profiles and automated campaign tools to enhance marketing ROI by 30%.",
        "Invited to Davos for the World Economic Forum in 2024 with a team.",
      ],
    },
    {
      title: "Founder & CEO – Concreate Technologies",
      duration: "2022 – Present",
      description: [
        "Developed Carbon Accounting platforms and automated influencer marketing tools, reducing operational workload by 70%.",
        "Partnered with Viagogo to deliver scalable ticketing solutions, raising $125,000 and achieving up to 25x returns during the ICC World Cup Finals.",
        "Built enterprise-grade procurement tools for sourcing and contract workflows.",
        "Invited as a World Economic Forum Hotel Badge Holder in Davos, Switzerland, in 2023.",
      ],
    },
    {
      title: "Founder & CEO – Atrillu",
      duration: "2019 – 2022",
      description: [
        "Collaborated with Harshil Karia to develop AI-powered marketing solutions, optimizing marketing ROI by 20%.",
        "Developed a medical logistics platform for Medicento, ensuring efficient distribution during the COVID-19 pandemic.",
        "Created PinkList India for an LGBTQ+ spokesperson and Indian National Congress Party member.",
        "Developed Toonsutra.com, which has surpassed 1M+ downloads, establishing a leading platform for Indian comics.",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          Professional Timeline
        </h2>
        <div className="relative border-l-4 border-blue-500 dark:border-blue-300">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute -left-2.5 bg-blue-500 dark:bg-blue-300 rounded-full h-5 w-5 border-white border-2"></div>
              <div>
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-300">
                  {item.title}
                </h3>
                <span className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {item.duration}
                </span>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="mb-1">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
