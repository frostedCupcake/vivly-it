import React from "react";
import Card from "./Card";

const Deck = () => {
  return (
    <section className="relative bg-black px-4 py-5 lg:py-10">
      <div className="w-full lg:w-[80vw] flex flex-col gap-6 mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6"></h1>

        {/* Carbon Earth */}
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-10">Carbon Earth</h1>
          <Card
            imageUrl="https://www.carbon.earth/assets/logo.png"
            websiteLink="https://www.carbon.earth/"
            title=""
            description2="Focused on implementing AI-powered carbon accounting software to measure and report carbon emissions for industries and a climate-tech platform that uses AI, which can combine visual field data with multi-spectral satellite imagery to estimate GHG sequestration, enabling carbon credit generation."
            description1="Co-Founded by Viv Gadepalli and Jaswanth Beere."
          />
        </div>

        {/* Ticketing Solutions */}
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-10">
            Ticketing Solutions
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <img
              src="/assets/tickets.jpeg"
              alt="Card Image"
              className="w-full lg:w-[14rem] rounded-xl"
            />
            <div className="mt-5 text-[1rem] md:text-[1.1rem] flex flex-col gap-4">
              <p>
                Partnered with Viagogo to deliver scalable ticketing solutions
                that enable high volume sales and seamless inventory management.
                Raised $125,000, achieving 6-7x during the ICC World Cup ODI
                average returns and up to 25x during the Finals. Developed and
                scaled offline ticket exchange networks, establishing expertise
                in resale operations.
              </p>
              <p>
                We gave away more than 30 plus tickets to true cricket fans who
                couldn't afford the tickets because every cricket lover deserves
                a chance to witness history in the making.
              </p>
            </div>
          </div>
        </div>

        {/* Influencer Marketing Platform */}
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-10">
            Influencer Marketing Platform
          </h1>
          <Card
            imageUrl="/assets/vivly-tab.jpg"
            websiteLink="/influencer-marketing-platform"
            title=""
            big="true"
            description2="Founded by Viv Gadepalli. The platform is driven by a high-achieving team of exceptional individuals, all of whom are IIT Alums who have previously worked at Salesforce, Asea Brown Boveri, Blackstone Group, and other leading global firms."
            description1="An end-to-end influencer marketing platform focused on unlocking the next level of influencer marketing. Marketers can take decisions backed by data and automate routine tasks, helping them launch customer-focused campaigns at scale. It enables brands to connect with customers by discovering and collaborating with the best-suited influencers and measuring the impact of their campaigns."
          />
        </div>

        {/* PinkList India */}
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-10">
            PinkList India
          </h1>
          <Card
            imageUrl="https://pbs.twimg.com/profile_images/1119211326935404545/J0Vt4mRD_400x400.jpg"
            websiteLink="https://www.pinklistindia.com/pinksabha"
            title=""
            description2="Created PinkList India for Anish Gawande, Indian National Congress Party member, and LGBTQ+ spokesperson. This is an interactive platform that empowers users to explore the stances of 161 Lok Sabha MPs on LGBTQIA+ issues. Using a map and search tools, visitors can locate their constituency, discover which MPs have spoken up, and access detailed report cards to evaluate their advocacy and actions on LGBTQIA+ rights."
            description1="Pink List India is the country's first archive of politicians supporting LGBTQIA+ rights. Situated at the intersection of politics, queerness, and technology, it aims to push for accountability and transparency from our elected representatives."
          />
        </div>

        {/* Ad Tracking Tool */}
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-10">
            Ad Tracking Tool
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <img
              src="https://www.nexd.com/wp-content/uploads/2024/05/video_ad-1024x576.png"
              alt="Card Image"
              className="w-full lg:w-[15rem] rounded-xl"
            />
            <div className="mt-5 text-[1rem] md:text-[1.1rem] flex flex-col gap-4">
              <p>
                Built a data collection and tracking tool for Schbang and
                Schbang Network & Partnership designed to monitor and analyze
                push notifications, SMS, and email communications across
                multiple platforms and devices.
              </p>
              <p>
                Used 74 Vodafone SIM cards and 36 Airtel SIM cards to collect
                data, integrated with a cloud database for storage and
                reporting, and conducted testing across multiple devices to
                ensure performance and accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Automated Marketing Mixed Modeling */}
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-10">
            Automated Marketing Mixed Modeling
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <img
              src="https://www.c5i.ai/wp-content/uploads/Marketing-Mix-Modeling-banner-objectV1.jpg"
              alt="Card Image"
              className="w-full lg:w-[15rem] rounded-xl"
            />
            <div className="mt-5 text-[1rem] md:text-[1.1rem] flex flex-col gap-4">
              <p>
                Worked with Harshil Karia, Founder of Schbang, to develop
                AI-powered marketing solutions- Automated Marketing Mixed
                Modeling, including last-mile manual intervention for accounting
                of external factors as well as Competitor advertisement tracking
                and analytics software for Schbang and Schbang Network for
                clients like Amazon Prime and HDFC Life, optimizing marketing
                ROI by 20%.
              </p>
              <p>
                Engineered and scaled MMM solutions to reduce processing time
                from months to minutes, enabling real-time analysis of marketing
                performance across multiple channels, regions, and product
                categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deck;
