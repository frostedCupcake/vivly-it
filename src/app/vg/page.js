import WorkExperience from "../../components/WorkExperience";

const WorkProfile = () => {
  const experiences = [
    {
      company: "Carbon Earth",
      role: "Founder & CEO",
      description:
        "Building an end-to-end, self-sustaining ecosystem bridging industries and green projects.",
      achievements: [
        "Developed AI-powered carbon accounting software for tracking and reporting carbon emissions.",
        "Enabled accurate carbon credit generation for industries through AI-powered tracking solutions.",
        "Created waste management solutions converting agricultural and poultry waste into biochar, generating carbon credits to promote sustainability.",
        "Positioned Carbon Earth as a leader in sustainability and carbon finance solutions.",
      ],
      startDate: "2024",
      endDate: "Present",
      location: "Global",
      logo: "/assets/ce.png",
    },
    {
      company: "Tavrin",
      role: "Founder & Product Lead",
      description:
        "Built an AI-powered SaaS platform that doubled campaign volume while reducing manual effort by 70%.",
      achievements: [
        "Developed an influencer discovery tool that improved accuracy by 30% and scaled outreach to 1,000+ influencers.",
        "Hired, managed, and led a high-performing team of IIT alums with experience at Salesforce, ABB, and Blackstone.",
        "Leveraged 10M+ influencer profiles with advanced analytics to improve selection accuracy and ROI.",
        "Invited to the World Economic Forum in Davos 2024 with a team.",
      ],
      startDate: "2022",
      endDate: "2024",
      location: "Global",
      logo: "/assets/tavrin.png",
    },
    {
      company: "Concreate Technologies - Vivly",
      role: "Founder & CEO",
      description:
        "From global giants to game-changing startups, we delivered innovative, results-driven solutions that turn visions into reality.",
      achievements: [
        "Currently working on a Carbon Accounting platform for industries and sustainable projects.",
        "Built an influencer marketing & analytics suite to automate campaign management, reducing workload by 70%.",
        "Partnered with Viagogo to deliver scalable ticketing solutions that enabled high-volume sales, achieving up to 25x returns during major events.",
        "Developed an enterprise-grade procurement tool for vendor sourcing and contract workflows.",
        "Recognized as a World Economic Forum Hotel Badge Holder in Davos, 2023.",
      ],
      startDate: "2022",
      endDate: "Present",
      location: "Global",
      logo: "/assets/vivly.png",
    },
    {
      company: "Atrillu",
      role: "Founder & CEO",
      description:
        "Led AI-powered marketing, logistics, and digital media innovations, impacting major brands and platforms.",
      achievements: [
        "Collaborated with Harshil Karia (Founder of Schbang) to develop AI-driven marketing solutions that optimized marketing ROI by 20%.",
        "Developed an AI-powered competitor ad tracking and analytics tool for brands like Amazon Prime and HDFC Life.",
        "Created a medical logistics platform to streamline procurement and distribution for Medicento, playing a critical role in COVID-19 supply chain management.",
        "Launched PinkList India, an LGBTQ+ political advocacy platform, with Anish Gawande.",
        "Developed Toonsutra.com, which surpassed 1M+ downloads as a leading Indian comics and graphic novel platform.",
      ],
      startDate: "2019",
      endDate: "2022",
      location: "Global",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHWlc-jnpp5sw/company-logo_200_200/company-logo_200_200/0/1630579014501?e=1749081600&v=beta&t=Pn0Ka6edpBBgzNGhPFoNNRfMCAub_g5_Nily6wyn5eE",
    },
  ];

  return (
    <div className="flex bg-black flex-col items-center justify-center ">
      <div className="bg-black text-white min-h-screen flex justify-center items-center md:p-6">
        <div className="w-[90vw] md:max-w-6xl mx-auto md:p-8 rounded-lg flex flex-col-reverse md:flex-row items-center md:items-start">
          {/* Left Section - Text Content */}
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center md:text-left">
              Vivasvan Gadepalli
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mt-2 text-center md:text-left">
              Serial Entrepreneur & Angel Investor
            </h3>
            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              I'm a boundary-pushing entrepreneur and angel investor with 7+
              years of experience weaving together AI/ML innovation,
              sustainability, and strategic partnerships.
            </p>
            <p className="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
              I’ve led cross-functional teams of up to 20 professionals across
              engineering, design, sales, and corporate finance at global firms
              such as Blackstone, Salesforce, and ABB.
            </p>
            <p className="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
              Over the years, I’ve launched multiple platforms and built an
              international network of investors, founders, and CEOs.
            </p>
            <p className="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
              My focus is on leveraging technology and capital to spur growth,
              create lasting value, and drive transformative change.
            </p>

            {/* Contact Section */}
            <div className="mt-6 items-center justify-center  text-[0.9rem] md:text-[1rem] flex flex-row sm:flex-row sm:justify-center md:justify-start gap-2 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:vg@vivly.in"
                className="bg-gray-800  w-fit px-1 md:px-4 py-1 md:py-2 border border-white rounded-md flex items-center justify-center space-x-2  sm:w-auto"
              >
                {/* <span>📧</span> */}
                <span>vg@vivly.in</span>
              </a>
              <a
                href="tel:+917982429660"
                className="bg-gray-800  w-fit px-1 md:px-4 py-1 md:py-2 border border-white rounded-md flex items-center justify-center space-x-2  sm:w-auto"
              >
                {/* <span>📞</span> */}
                <span>+91 79824 29660</span>
              </a>
              <a
                href="https://linkedin.com/in/vivasvan-gadepalli-83078061"
                target="_blank"
                className="bg-gray-800  w-fit px-1 md:px-4 py-1 md:py-2 border border-white rounded-md flex items-center justify-center space-x-2  sm:w-auto"
              >
                {/* <span>🔗</span> */}
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end">
            <img
              src="/assets/vg.png"
              alt="Vivasvan Gadepalli"
              className="rounded-lg w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl flex flex-col">
        <h2 className="text-white text-2xl font-bold mb-4">💼 My Portfolio</h2>
        {experiences.map((exp, index) => (
          <WorkExperience key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default WorkProfile;
