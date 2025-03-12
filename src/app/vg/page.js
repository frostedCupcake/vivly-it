const WorkProfile = () => {
  return (
    <div className="flex bg-black flex-col items-center justify-center ">
      <div className="bg-black text-white min-h-[80vh] flex justify-center items-center md:p-6">
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
              I am a relentless leader, entrepreneur, and strategist with a
              strong foundation in international business, product and business
              development, marketing, and business turnarounds. My expertise
              lies in building future-focused ecosystems through strategic
              partnerships and building high-performing teams.
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

      <div className="pb-2 text-white/80 relative flex items-center justify-center">
        <div className=" z-[1000]">
          <h1 className="text-[1.2rem] underline mb-10 mx-auto text-center md:text-[1.7rem] mt-5">
            My Journey.{" "}
          </h1>
          <p className="text-[1.2rem] mb-2 capitalize mx-auto w-[90vw] lg:w-[60rem] md:text-[1.7rem] mt-5">
            How It All Began -
          </p>
          <ul className="space-y-4 text-left text-[.9rem] md:text-[1.1rem] w-[90vw] lg:w-[60rem] mx-auto">
            <li>
              March 2020. The world was shutting down. Streets were empty, and
              panic was everywhere. The news was flooded with images of
              overwhelmed hospitals and families struggling to get basic
              protective gear. At home, I faced a simple yet frustrating
              problem, getting masks and sanitizers for my family and relatives
              was nearly impossible. Even if they were available, the prices
              were outrageous.
            </li>
            <li>
              That’s when a thought struck me: What if I could bypass the
              middlemen and get these essentials directly at wholesale prices?
              But why stop at just my family? What if we could scale this and
              distribute to families in need, hospitals, and frontline workers?
            </li>
            <li>And just like that, my first business idea was born.</li>
            <li>
              <p className="text-[1.2rem] mb-2 capitalize mx-auto w-[90vw] lg:w-[60rem] md:text-[1.7rem] mt-5">
                Scaling Up -
              </p>
            </li>

            <li className="">
              <>
                We reached out to a healthcare startup that was working on
                pharmaceutical supply chain solutions. We proposed an idea, a
                logistics platform where anyone in the world could request a
                quote for masks, PPE kits, and sanitizers. Within weeks, we
                built the system, ensuring seamless tracking and delivery of
                medical supplies.
              </>
            </li>
            <li className="">
              <>
                Despite massive logistical challenges trucks getting stuck,
                halted rail services, and unpredictable government regulations,
                we found ways to navigate through the chaos. We helped in
                distrubution of medical supplies to multiple hospitals and
                clinics across Karnataka, Andhra Pradesh, and Tamil Nadu,
                ensuring timely delivery and inventory availability during a
                period of unprecedented demand. It was intense, exhausting, but
                deeply fulfilling.
              </>
            </li>
          </ul>

          <p className="text-[1.2rem] capitalize mb-2 mx-auto w-[90vw] lg:w-[60rem] md:text-[1.7rem] mt-5">
            Building My Network -
          </p>
          <ul className="space-y-4 text-left text-[.9rem] md:text-[1.1rem] w-[90vw] lg:w-[60rem] mx-auto">
            <li className="">
              I worked alongside a small team with Harshil Karia (Founder of
              Schbang, 2020-21) to develop Pensive, an AI-powered Automated
              Marketing Mix Modeling (AMMM) solution. Pensive was built with a
              simple but powerful goal: help companies allocate their marketing
              budgets more effectively using data analytics. Which they have
              used to optimize their ad spends at scale for their clients HDFC
              Life Insurance, Amazon, Mahindra, Baskin Robbins, Daniel
              Wellington, and many more.
            </li>

            <li className="">
              We then worked with Anish Gawande, Indian National Congress Party
              member, and LGBTQ+ spokesperson who was the founder of Pinklist
              (country's first archive of politicians supporting LGBTQIA+
              rights). We created Pinksabha an extension to the Pinklist India -
              it is an interactive platform that empowers users to explore the
              stances of 161 Lok Sabha MPs on LGBTQIA+ issues. Using a map and
              search tools, visitors can locate their constituency, discover
              which MPs have spoken up, and access detailed report cards to
              evaluate their advocacy and actions on LGBTQIA+ rights
            </li>

            <li className="">
              Finally, we built the website Toonsutra.com in 2023, which has
              since evolved into India's first webtoon comics app. Today,
              Toonsutra has surpassed 1 million app downloads on the Play Store
              and recently secured $3.2 million in funding.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkProfile;
