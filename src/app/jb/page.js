const WorkProfile = () => {
  return (
    <div className="flex bg-black flex-col items-center justify-center ">
      <div className="bg-black text-white/80 min-h-[70vh] flex justify-center items-center md:p-6">
        <div className="w-[90vw] md:max-w-6xl mx-auto md:p-8 rounded-lg flex flex-col-reverse md:flex-row items-center md:items-start">
          {/* Left Section - Text Content */}
          <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white/80 text-center md:text-left">
              Jaswanth Beere
            </h2>
            <h3 className="text-lg sm:text-[1.3rem] font-semibold text-white/80 mt-2 text-center md:text-left">
              Revved up, ready to change the game.
            </h3>
            <p className="mt-4 text-white/80 text-sm sm:text-[1.1rem] leading-relaxed">
              I'm just an average Joe with a firm belief in the Midwit Theory,
              growing with purpose.
            </p>

            {/* Contact Section */}
            <div className="mt-6 items-center justify-center  text-[0.9rem] md:text-[1rem] flex flex-col sm:flex-row sm:justify-center md:justify-start gap-2 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:vg@vivly.in"
                className="bg-black  w-fit px-1 md:px-4 py-1 md:py-2 border border-gray-400 rounded-md flex items-center justify-center space-x-2  sm:w-auto"
              >
                {/* <span>📧</span> */}
                <span>jaswanthbeere@gmail.com</span>
              </a>
              <a
                href="tel:+917982429660"
                className="bg-black  w-fit px-1 md:px-4 py-1 md:py-2 border border-gray-400 rounded-md flex items-center justify-center space-x-2  sm:w-auto"
              >
                {/* <span>📞</span> */}
                <span>+91 9866255635</span>
              </a>
              <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
                <a
                  href="https://github.com/frostedCupcake/"
                  target="_blank"
                  className="bg-black  w-fit px-1 md:px-4 py-1 md:py-2 border border-gray-400 rounded-md flex items-center justify-center space-x-2  sm:w-auto"
                >
                  {/* <span>🔗</span> */}
                  <span>Github</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jaswanth-beere-382239224"
                  target="_blank"
                  className="bg-black  w-fit px-1 md:px-4 py-1 md:py-2 border border-gray-400 rounded-md flex items-center justify-center space-x-2  sm:w-auto"
                >
                  {/* <span>🔗</span> */}
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center md:justify-end">
            <img
              src="/assets/jb-pic.jpg"
              alt="JB"
              className="rounded-lg w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pb-20  text-white/80 relative flex items-center justify-center">
        <div className=" z-[1000]">
          <h1 className="text-[1.2rem] underline mb-10 mx-auto text-center md:text-[1.7rem] mt-5">
            How I discovered my passion.{" "}
          </h1>
          <ul className="space-y-4 text-left text-[.9rem] md:text-[1.1rem] w-[90vw] lg:w-[60rem] mx-auto">
            <li>
              A wise man once said, “Your passion is not something you find;
              it’s something you uncover within yourself by chasing what makes
              your soul come alive.”
            </li>
            <li>
              Well, if that’s true, then it’s safe to say I uncovered my passion
              multiple times throughout my bachelor’s studies.
            </li>
            <li>
              Which led me to gain substantial experience through numerous
              internships, projects, and club work. Each new challenge and
              curiosity led me to dive deeper, turning fleeting interests into
              lasting expertise. I not only honed my technical skills but also
              developed a deep appreciation for how technology drives modern
              businesses forward.
            </li>
          </ul>
          <p className="text-[1.2rem] mb-2 capitalize mx-auto w-[90vw] lg:w-[60rem] md:text-[1.7rem] mt-5">
            How It All Began -
          </p>
          <ul className="space-y-4 text-left text-[.9rem] md:text-[1.1rem] w-[90vw] lg:w-[60rem] mx-auto">
            <li>
              I am not sure if this comes across as cliché, but my mother has
              been a profound influence in my life, exemplifying hard work,
              dedication, and perseverance. Despite numerous challenges, she
              qualified as a Chartered Accountant to support our family. Her
              sacrifices taught me the importance of focus, independence, and
              the value of education
            </li>
            <li>
              Building on these foundational lessons, I stepped into my first
              year of college on November 21, 2022, with my inaugural class:
              Introduction to Programming in C. Initially, I wanted to stay
              ahead of the instructor just to better understand the course
              material. To achieve this, I watched tutorials and practiced
              problems every single day. I fell in love with the journey and the
              progress I was making. I accelerated my learning and finished the
              entire syllabus in just two weeks.
            </li>
            <li>
              After that, I started learning Python by making games and
              automating boring processes. By doing so aided me in understanding
              python as a language and also foundation to start my journey in
              deep learning. I then gradually shifted my focus to understand the
              mathamatics behind them. This was fun until I built something
              interesting but I couldn't show it to anyone as I could only
              interact with it through a terminal. I needed a way to bring my
              ideas to people.
            </li>
            <li>
              That's how I got into Web development. I dedicated countless hours
              to mastering the fundamentals of frontend development. I refined
              my skills to the point where translating ideas into elegant
              websites. Later, I've explored Backend and DevOps, where I enjoyed
              system design, building cloud architectures, and optimizing
              backend systems to scale applications efficiently. What started as
              a necessity quickly became another passion.
            </li>

            <li className="">
              <>
                I must say it was at IITH I realized the true potential of
                technology. I became actively involved in several technological
                clubs and contributed to a variety of projects. I wanted to to
                get a taste of IoT development so I worked hands on with
                arduino, microcontrollors and various sensors. Notably, I worked
                on cool hardware projects involving gestures to communicate
                wirelessly with various devices. Firstly, a gesture controlled
                car. Secondly, AI powered gesture recoginition system utilizing
                motion sensors where we capture and analyse data from a Google
                Wear OS wrist watch in real time and finally, IoT-based fall
                detection using a NodeMCU, MPU6050 sensor, Flutter and
                Websockets.{" "}
              </>
            </li>
            <li className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className="w-[90vw] md:w-[14rem] my-2">
                <img className="rounded-xl  " src="/assets/robo-car.jpg" />
                <span className="text-[.75rem]  w-[90vw] md:w-[15rem]  mt-2 text-white/80">
                  Gesture Controlled Car.
                </span>
              </div>
              <div className="w-[90vw] md:w-[35rem]">
                <img className="rounded-xl  " src="/assets/fall.png" />
                <span className="text-[.75rem]  w-[90vw] md:w-[25rem]  mt-2 text-white/80">
                  Fall Detection System.
                </span>
              </div>
            </li>
            <li className="">
              <>
                As I reached the end of my second year of college, I got
                promoted to an overall head of lambda, software club of IIT
                Hyderabad along alongside Kartheek Tamanna, Kushagra Gupta and
                Varun Gupta. Notably, One of our most impactful projects was a
                cab-sharing portal for the campus, which quickly attracted over
                10,000 sign-ups and hundreds of active monthly users.{" "}
              </>
            </li>
            <li className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className="w-[90vw] md:w-[25rem] my-2">
                <img className="rounded-xl  " src="/assets/lambda.jpg" />
                <span className="text-[.75rem]  w-[90vw] md:w-[25rem]  mt-2 text-white/80">
                  A picture from 2024 with my Lambda Co-Heads, right after
                  conducting a session on Docker.
                </span>
              </div>
              <div className="w-[90vw] md:w-[25rem]">
                <img className="rounded-xl  " src="/assets/at.jpg" />
                <span className="text-[.75rem]  w-[90vw] md:w-[25rem]  mt-2 text-white/80">
                  My genius friend and I hacking our way through our college's
                  attendance app.
                </span>
              </div>
            </li>
          </ul>

          <p className="text-[1.2rem] capitalize mb-2 mx-auto w-[90vw] lg:w-[60rem] md:text-[1.7rem] mt-5">
            Falling in love with my work -
          </p>
          <ul className="space-y-4 text-left text-[.9rem] md:text-[1.1rem] w-[90vw] lg:w-[60rem] mx-auto">
            <li className="">
              <>
                At the start of my third year, I began my entrepreneurial
                journey by joining the founding team of{" "}
                <a
                  href="https://picapool.com/"
                  className="underline italic font-serif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Picapool
                </a>
                , aiming to solve overbuying by connecting people to pool
                resources for similar products. We validated our idea by
                interviewing 2,000 individuals in Delhi and Mumbai, which helped
                me develop empathy and a deep understanding of diverse
                perspectives. This experience was my first exposure to
                large-scale networking, helping me cultivate resilience and the
                ability to communicate clearly and effectively.
              </>
            </li>

            <li className="">
              <>
                I wanted to be a valuable asset to the company, so I
                binge-watched courses on{" "}
                <a
                  href="https://www.algoexpert.io/systems/fundamentals"
                  className="underline italic font-serif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AlgoExpert's Systems Design
                </a>
                ,{" "}
                <a
                  href="https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/"
                  className="underline italic font-serif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flutter
                </a>
                ,{" "}
                <a
                  href="https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/"
                  className="underline italic font-serif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Certified Solutions Architect
                </a>
                , and{" "}
                <a
                  href="https://www.udemy.com/course/docker-kubernetes-the-practical-guide/"
                  className="underline italic font-serif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Docker & Kubernetes
                </a>
                . On August 17, 2023, we began development after expanding the
                team with some of the best developers from IIT Hyderabad.
              </>
            </li>
            <li className="flex py-3   flex-col justify-center items-center ">
              <img
                className="rounded-xl  w-[40rem]"
                src="/assets/pp-flow.jpeg"
              />
              <span className="text-[.75rem] mt-2 text-white/80">
                A picture taken from my hostel room during discussions on
                Picapool's app flow.
              </span>
            </li>
            <li className="">
              <>
                I took on the responsibility of leading the team and converted
                my room into a makeshift office, lining the walls with
                whiteboards labeled App Flow, Weekly Tasks, Ideation, and
                Challenges List. We worked tirelessly, often until 5 AM. Every
                day was a dev night, and it was the best team environment I had
                ever experienced.
              </>
            </li>
            <li className="">
              <>
                Handling both frontend and DevOps, I worked jointly with my team
                on client-server integrations and maintained active loop with
                the designer to ensure all ideas were accurately translated into
                designs.
              </>
            </li>
            <li className="flex py-3   flex-col justify-center items-center ">
              <img
                className="rounded-xl  w-[40rem]"
                src="/assets/pp-google.jpeg"
              />
              <span className="text-[.75rem] mt-2 text-white/80">
                A picture taken at Google Hyderabad Office, with me sitting near
                the heart of Google.
              </span>
            </li>
            <li className="">
              <>
                I delivered the product in a month and launched it on the Play
                Store on September 17th. The result? Picapool won first place
                ₹15,00,000 with no equity dilution in Suzuki's Global Seed
                Innovation Challenge on September 23, 2023.
              </>
            </li>

            <li className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className="w-[90vw] md:w-[25rem] ">
                <img
                  className="rounded-xl  bg-white"
                  src="https://picapool.com/assets/CreatePool1.svg"
                />
                <span className="text-[.75rem]  w-[90vw] md:w-[25rem]  mt-2 text-white/80">
                  Save more with Picapool.
                </span>
              </div>
              <div className="w-[90vw] md:w-[21rem]">
                <img
                  className="rounded-xl  "
                  src="https://picapool.com/assets/bootcampimage.svg"
                />
                <span className="text-[.75rem]  w-[90vw] md:w-[25rem]  mt-2 text-white/80">
                  September 24th 2023.
                </span>
              </div>
            </li>
          </ul>

          <p className="text-[1.2rem] mb-2 capitalize mx-auto w-[90vw] lg:w-[60rem] md:text-[1.7rem] mt-5">
            Meeting Viv (Vivasvan Krishna) -
          </p>
          <ul className="space-y-4 text-left text-[.9rem] md:text-[1.1rem] w-[90vw] lg:w-[60rem] mx-auto">
            <li>
              This was even before starting of picapool, I got a message from my
              friend that changed the tragectory of my life:
            </li>

            <li>
              "Bro, U up for some freelance work? It's two webpages ka rework".{" "}
            </li>

            <li>
              <>
                He then introduced me to Viv, and we quickly met for a
                discussion regarding the work. We worked on{" "}
                <a
                  href="https://www.toonsutra.com"
                  className="underline italic font-serif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Toonsutra
                </a>
                , a nascent startup in its early development stages with a
                mission to bring comics and graphic novels from leading creators
                and publishers, offering them in Indian languages for the first
                time. My role involved building its website, which contained
                hundreds of images, while optimizing performance. This was my
                first time working in a professional setting, and it was Viv who
                helped me communicate with the Toonsutra team, navigate
                difficult situations, and grow professionally.
              </>
            </li>
            <li>
              Over time, we continued working on multiple projects, notably{" "}
              <a
                href="https://www.pinklistindia.com/pinksabha"
                className="underline italic font-serif"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinklist's Pinksabha
              </a>
              - it is an interactive platform that empowers users to explore the
              stances of 161 Lok Sabha MPs on LGBTQIA+ issues. Additionally, we
              participated in the EMC Glocal Pitch Competition by{" "}
              <a
                href="https://www.musashino-u.ac.jp/english/"
                className="underline italic font-serif"
                target="_blank"
                rel="noopener noreferrer"
              >
                Musashino University
              </a>{" "}
              and IIT Hyderabad, where we became finalists. We showcased a
              privacy-first note-taking app with on-device AI to an audience of
              Indian and Japanese professors.
            </li>
            <li className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className="w-[90vw] md:w-[25rem]">
                <img className="rounded-xl  " src="/assets/jp.jpg" />
                <span className="text-[.75rem]  w-[90vw] md:w-[25rem]  mt-2 text-white/80">
                  Musashino University x IIT Hyderabad.
                </span>
              </div>
            </li>
            <li>
              Despite never meeting in person, our friendship grew stronger
              while working together. I stayed in touch with him even while
              working on Picapool. It was during this time that my
              entrepreneurial passion ignited, and I conveyed to Viv my intent
              to start something new and something he was excited to be a part
              of. We discussed my interest in sustainability, explored and
              brainstormed ideas. Our ideation sessions, combined with an open
              offer from a carbon credit trader from Switzerland, helped us
              navigate the complexities of the carbon credit market and the
              sustainability policies of nations globally and that's how Carbon
              Earth was born.
            </li>

            <li>
              One thing I liked about him is that, even though he's much better
              than me in many aspects, he never tries to complement me. Instead,
              he reminds me that I’m already whole in my own way. That approach
              gave me the freedom to grow, learn, and improve myself without
              feeling overshadowed.
            </li>
          </ul>
          <p className="text-[1.2rem] mb-2 capitalize mx-auto w-[90vw] lg:w-[60rem] md:text-[1.7rem] mt-5">
            Inter IIT Tech Meet
          </p>
          <ul className="space-y-4 text-left text-[.9rem] md:text-[1.1rem] w-[90vw] lg:w-[60rem] mx-auto">
            <li className="">
              Just recently, in December 2024, I led a 7-member team at the
              Inter IIT Tech Meet, representing my college at IIT Bombay. We
              presented a solution for the Indian Space Research Organisation
              challenge and developed a Google Earth equivalent for the Moon.
            </li>
            <li className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className="w-[90vw] md:w-[21rem]">
                <img className="rounded-xl  " src="/assets/isro-day.jpg" />
                <span className="text-[.75rem]  w-[90vw] md:w-[25rem]  mt-2 text-white/80">
                  Day of presentation.
                </span>
              </div>
              <div className="w-[90vw] md:w-[21rem]">
                <img className="rounded-xl  " src="/assets/isro-t.jpg" />
                <span className="text-[.75rem]  w-[90vw] md:w-[25rem]  mt-2 text-white/80">
                  My team.
                </span>
              </div>
              <div className="w-[90vw] md:w-[14rem] my-2">
                <img className="rounded-xl  " src="/assets/inter-iit-win.jpg" />
                <span className="text-[.75rem]  w-[90vw] md:w-[15rem]  mt-2 text-white/80">
                  IIT Hyderabad's trophies.
                </span>
              </div>
            </li>
            <li>
              {" "}
              During the same event, I had the opportunity to present Carbon
              Earth at the Pan IIT Tech Expo, where I encountered a startup born
              out of a biotechnology club. They had engineered a bioorganism
              capable of capturing atmospheric CO₂ and rapidly converting it
              into limestone. I was blown away when I realized the potential of
              this field to radically transform the world and improve people's
              lives.
            </li>
            <li>
              {" "}
              This discovery pushed me to explore not only microbial but also
              terrain and marine mechanisms for CO₂ capture. Despite their
              promising impact on the climate, many startups in this sphere
              struggle to scale due to capital constraints. I see an opportunity
              to change that by helping them generate carbon credits for every
              ton of CO₂ they mitigate, using tools that quantify CO₂
              sequestration. This realization drives me to delve deeper into
              genetics and systems biology, determined to do whatever it takes
              to turn this concept into reality.
            </li>
          </ul>

          <p className="text-[1.2rem] mb-2 capitalize mx-auto w-[90vw] lg:w-[60rem] md:text-[1.7rem] mt-5">
            Impact all of these on me
          </p>
          <ul className="space-y-4 text-left text-[.9rem] md:text-[1.1rem] w-[90vw] lg:w-[60rem] mx-auto">
            <li className="">
              <>
                Today, I see myself as an inquisitive, highly motivated, and
                ambitious individual who is unafraid of taking risks and
                embracing new challenges with unwavering optimism. Even when
                stepping out of my comfort zone, I remain driven and
                perseverant, pushing forward until I master whatever comes my
                way. Furthermore, my projects and internships are a testimony to
                my remarkable analytical skills, creativity, and technical
                expertise, showcasing my exceptional ability to apply
                theoretical concepts to real-world challenges.
              </>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkProfile;
