import React from "react";
import Card from "./Card";

const Deck = () => {
  return (
    <section className="relative bg-black px-4 py-5 lg:py-10">
      <div className="w-full lg:w-[80vw] flex flex-col gap-6 mx-auto">
        <h1 className="text-[1.4rem] text-center md:text-left md:text-5xl font-bold text-white mb-6"></h1>
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-[1.4rem] text-center md:text-left md:text-5xl font-bold mb-10">
            Tavrin
          </h1>
          <Card
            imageUrl="/assets/tavrin.png"
            websiteLink="https://youtu.be/dTIff1zItRg/"
            title=""
            description2="Building an application that is capable of replacing your entire marketing team with a single AI-driven agent which is capable of understanding audiences with unmatched depth, crafting hyper-personalized campaigns at scale, optimizing results in real time. Soon, we will deploy AI Agents to intelligently automate marketing beyond influencer campaigns and expanding into: WhatsApp Marketing, Meta & Google Ads and YouTube Campaigns"
            description1="Co-Founded by Vivasvan Krishna and Jaswanth Beere."
          />
        </div>
        {/* Carbon Earth */}
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-[1.4rem] text-center md:text-left md:text-5xl font-bold mb-10">
            Carbon Earth
          </h1>
          <Card
            imageUrl="https://www.carbon.earth/assets/logo.png"
            websiteLink="https://www.carbon.earth/"
            title=""
            description2="Building a real-time AR for smart agriculture & forestry. Ooftware that captures videos of specific crops or fields, processes the data to create a digital twin, and uses AI for analysis. By integrating visual data, satellite imagery, and geolocation, the system can estimate biomass, assess crop damage, monitor encroachment, track wildfire risks, and detect illegal logging in real-time. This technology will be accessible via an Android app and drones, providing farmers and authorities with actionable insights."
            description1="Co-Founded by Jaswanth Beere and Vivasvan Krishna."
          />
        </div>

        {/* Ticketing Solutions */}
        <div className="mt-5 p-6 rounded-lg  shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-[1.4rem] text-center md:text-left md:text-5xl font-bold mb-10">
            Ticketing Solutions
          </h1>
          <div className="flex flex-col bg-gray-900 p-5 rounded-xl lg:flex-row items-center justify-center gap-6">
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
          <h1 className="text-[1.4rem] text-center md:text-left md:text-5xl font-bold mb-10">
            Influencer Marketing Platform
          </h1>
          <Card
            imageUrl="/assets/vivly-tab.jpg"
            websiteLink="/influencer-marketing-platform"
            title=""
            big="true"
            description2="Founded by Vivasvan Krishna. The platform is driven by a high-achieving team of exceptional individuals, all of whom are IIT Alums who have previously worked at Salesforce, Asea Brown Boveri, Blackstone Group, and other leading global firms."
            description1="An end-to-end influencer marketing platform with customisable UI/UX"
          />
        </div>

        {/* PinkList India */}
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-[1.4rem] text-center md:text-left md:text-5xl font-bold mb-10">
            PinkList India
          </h1>
          <Card
            imageUrl="https://pbs.twimg.com/profile_images/1119211326935404545/J0Vt4mRD_400x400.jpg"
            websiteLink="https://www.pinklistindia.com/pinksabha"
            title=""
            description2="Created PinkList India for Anish Gawande, Indian National Congress Party member, and LGBTQ+ spokesperson. This is an interactive platform that empowers users to explore the stances of 161 Lok Sabha MPs on LGBTQIA+ issues. Using a map and search tools, visitors can locate their constituency, discover which MPs have spoken up, and access detailed report cards to evaluate their advocacy and actions on LGBTQIA+ rights."
            description1="Pink List India is the country's first archive of politicians supporting LGBTQIA+ rights."
          />
        </div>

        {/* Ad Tracking Tool */}
        <div className="mt-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-[1.4rem] text-center md:text-left md:text-5xl font-bold mb-10">
            Ad Tracking Tool
          </h1>
          <div className="flex  bg-gray-900 p-5 rounded-xl flex-col lg:flex-row items-center justify-center gap-6">
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
        <div className="mt-5  p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  text-white">
          <h1 className="text-[1.4rem] text-center md:text-left md:text-5xl font-bold mb-10">
            Automated Marketing Mixed Modeling
          </h1>
          <div className="flex bg-gray-900 p-5 rounded-xl flex-col lg:flex-row items-center justify-center gap-6">
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
