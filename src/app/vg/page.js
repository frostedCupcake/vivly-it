import { title } from "process";

const timelineData = [
  {
    year: "2016",
    title: "Beginning of Entrepreneurship Journey",
    description:
      "During my first year of college, I was always interested in exploring new opportunities and actively participating in organizations like the Sports Council and the Student Council. However, I felt I needed a bigger challenge, and that's when I turned towards entrepreneurship.",
  },
  {
    year: "2017 - 2018",
    title: "Startup School & Society Security App",
    description:
      "I connected with a friend, who was pursuing computer science at IIIT Delhi. Together, we identified an opportunity to improve security management for gated societies specifically focusing on people ie househelp and driver management within societies. We applied to Y Combinator's Startup School program, completed the course, and implemented our concept in several residential societies in Bangalore. We started onboarding household help, drivers and security guards across four to five societies in the Whitefield area, particularly around Seegehalli, where I used to reside.",
  },
  {
    year: "",
    title: "",
    description:
      "Despite our initial progress, we faced significant logistical hurdles. Managing accountability and tracking personnel was becoming increasingly difficult, as our method relied heavily on manual calls and Excel sheets. Without a dedicated application to streamline this process, we struggled to maintain efficiency. Consequently, we decided to pause the project temporarily.",
  },
  {
    year: "",
    title: "Internships at Savari & Avalon Labs",
    description:
      "To further develop my skills, I interned at different firms from Savari(Vehicle2X technology) to Avalon Labs, a micro venture capital and service-based firm. This role provided firsthand experience observing entrepreneurs and their operational pace, teaching me the commitments required to build successful ventures.",
  },

  {
    year: "2020",
    title: "It's COVID",
    description:
      "Post my time there, I founded Atrillu, a service-based company, but unfortunately the world entered lockdown in March 2020. The news was flooded with images of overwhelmed hospitals and families struggling to get basic protective gear. At home, I faced a frustrating problem, getting masks and sanitizers for my family and relatives was nearly impossible. Even if they were available, the prices were outrageous.",
  },
  {
    year: "",
    title: "",
    description:
      "That’s when a thought struck me: What if I could bypass the middlemen and get these essentials directly at wholesale prices? But why stop at just my family? What if we could scale this and distribute to families and hospitals in need.",
  },
  {
    year: "",
    title: "",
    description:
      "We reached out to a healthcare startup working on pharmaceutical supply chain solutions and proposed a logistics platform allowing anyone globally to request quotes for masks, PPE kits, and sanitizers. Within weeks, we built the system, ensuring seamless tracking and delivery of medical supplies. Despite massive logistical challenges, such as trucks getting stuck, halted rail services, and unpredictable government regulations, we found ways to navigate through the chaos. We distributed medical supplies to numerous hospitals and clinics across Karnataka, Andhra Pradesh, and Tamil Nadu, ensuring timely deliveries during unprecedented demand. It was intense, exhausting, but deeply fulfilling.",
  },

  {
    year: "2020 - 2021",
    title: "AI Marketing Solution at Schbang (Pensive)",
    description:
      "After the lockdown, I worked closely with Harshil Karia, founder of Schbang (2020-21), on an AI-powered Automated Marketing Mix Modeling (AMMM) solution named Pensive. Pensive helped companies effectively allocate their marketing budgets through data analytics, optimizing ad spends for clients like HDFC Life Insurance, Amazon, Mahindra, Baskin Robbins, and Daniel Wellington.",
  },
  {
    year: "2021",
    title: "Boom of influencer Marketing in India",
    description:
      "Around this time, influencer marketing started trending, and after working with Schbang, I noticed several problems that could be addressed through technology. Managing influencer marketing at scale is challenging due to conversations scattered across multiple platforms, leading to confusion, overlooked messages, and difficulty tracking progress. When relationships with creators suffer, campaign reporting to brands becomes complicated, resulting in excessive spreadsheets, incomplete reporting, longer campaign durations, and frustration. This ultimately causes wasted time and lost opportunities. That's why I started building an influencer marketing platform with customizable UI/UX specifically designed for agencies.",
  },
  {
    year: "",
    title: "",
    description:
      "While figuring out how to build the influencer marketing platform and building a team to finally building a product we worked on multiple service deals to keep us bootstrapped and to continue our journey and as well as ticketing solutions which gave us funds to push out the initial version of influencer marketing platform.",
  },

  {
    year: "2022-2023",
    title: "Service Deals: Pinklist and Toonsutra",
    description:
      "Notably, We created Pinksabha an extension to the Pinklist India for Anish Gawande, Indian National Congress Party member, and LGBTQ+ spokesperson who was the founder of Pinklist (country's first archive of politicians supporting LGBTQIA+ rights) and built a website for Toonsutra, which has since evolved into India's first webtoon comics app. Today, Toonsutra has surpassed 1 million app downloads on the Play Store and recently secured $3.2 million in funding",
  },
  {
    year: "2022 - 2024",
    title: "Influencer Marketing Campaign Tool",
    description:
      "I've lead a high-caliber team of engineers and designers, all of whom are IIT Hyderabad alumni, who have previously worked at Salesforce, Blackstone Group, Arcesium, and other leading global firms. We succesfully built an working MVP of our Idea without any AI. We partnered with multiple agencies - Schbang, Sociowash and Django Digital to test our system and run automated campaigns. We ran a campign for Urbanic, an Indian fashion brand for two months. We gathered real-time insights, and identified key challenges. I then realized payments happen at a very slow rate, and we decided to pause the project.",
  },

  {
    year: "2025",
    title: "",
    description: "I'm working on some cool stuff with Jaswanth.",
  },
];

export default function Timeline() {
  return (
    <main className="bg-black text-gray-200 min-h-screen py-10 px-5 md:px-10">
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
            I am a relentless leader, entrepreneur, and strategist with a strong
            foundation in international business, product and business
            development, marketing, and business turnarounds. My expertise lies
            in building future-focused ecosystems through strategic partnerships
            and building high-performing teams.
          </p>
          <p className="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
            An avid reader, athlete, and comic enthusiast, I apply the same
            principles of discipline, resilience, and adaptability both on and
            off the field. Invited twice as a World Economic Forum Hotel Badge
            Holder in Davos, Switzerland, in 2023 and 2024.
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
        <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/assets/vg.png"
            alt="Vivasvan Gadepalli"
            className="rounded-lg w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-12">
          My Entrepreneurship Journey
        </h1>
        <div className="relative">
          <div className="absolute left-2 md:left-4 h-full border-l-2 border-gray-600 "></div>

          {timelineData.map((event, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full md:flex-row }`}
            >
              <div className="z-20 -mr-10 bg-gray-900 shadow-xl w-4 md:w-8 h-4 md:h-8 rounded-full border-4 border-indigo-500"></div>
              <div className=" bg-gray-800 rounded-lg shadow-xl px-4 py-4 w-[80vw] lg:w-[60vw]">
                <h3 className="mb-1 font-bold text-lg text-indigo-400">
                  {event.year}
                </h3>
                <h4 className="mb-2 text-xl font-semibold">{event.title}</h4>
                <p className="text-sm md:text-base text-gray-300">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
