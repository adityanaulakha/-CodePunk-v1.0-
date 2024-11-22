import React, { useRef, useState, useEffect } from "react";
import logo from "../logo.png";
// import bgLoopDesktop from "../bg-loop-desktop.mov";

const LandingPage = () => {
  const mainContentRef = useRef(null);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  //   };

  //   // Set initial state
  //   handleResize();

  //   // Add event listener for resizing
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup event listener
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const handleExploreClick = () => {
    mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Button = () => {
    const handleClick = () => {
      window.open("https://forms.gle/tq36yLm7KxEdciXZA", "_blank");
    };

    return (
      <button
        onClick={handleClick}
        className="relative flex items-center bg-[#a370f0] text-white px-5 py-2 rounded-2xl
                 text-lg font-medium tracking-wide overflow-hidden cursor-pointer
                 shadow-[inset_0_0_1.6em_-0.6em_#714da6] h-11"
      >
        <span className="mr-12">Book Now!!</span>
        <div className="absolute right-1 flex items-center justify-center h-9 w-9 
                      bg-white rounded-xl shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9]
                      transition-all duration-300 group-hover:w-[calc(100%-0.6em)]">
          <svg
            height={24}
            width={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 transition-transform duration-300 text-[#7b52b9]
                     hover:translate-x-1"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    );
  };

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory" style={{ backgroundColor: 'black' }}>
     
      <section className="relative h-screen w-full snap-start">
        
        <div className="fixed inset-0 w-full h-screen overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src='https://res.cloudinary.com/dqdtbavzj/video/upload/f_auto:video,q_auto/ryala9m4myvatpj8uvr9' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>


        <div className="fixed inset-0 flex flex-col items-center justify-center z-10">
          <button
            onClick={handleExploreClick}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 px-8 py-4 text-lg text-white 
                     bg-white/20 backdrop-blur-sm border-2 border-white rounded-full 
                     transition-all duration-300 cursor-pointer
                     hover:bg-white/40 hover:scale-105 active:scale-95"
          >
            Explore More
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={mainContentRef} className="relative snap-start">
        <div className="min-h-screen w-full bg-black/80 backdrop-blur-lg text-white relative z-10">
          {/* Header Section */}
          <header className="w-full py-8 flex items-center justify-between px-6">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <Button />
            </div>
          </header>

          {/* Main Content */}
          <main className="bg-black/40 w-11/12 md:w-9/12 lg:w-8/12 mx-auto rounded-xl p-8 mt-10">
            {/* About Us */}
            <section className="mb-10">
              <h2 className="text-4xl font-bold text-center text-[#b775a3] mb-6">
                About Us
              </h2>
              <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
                <ul className="text-lg space-y-4">
                  <li>
                    <span className="text-[#C7ED67]">The Droid Club: Where Innovation Meets Growth <br /><br />
                    We’re not just a club; we’re a movement. At Droid, we ignite curiosity through school visits on IoT, AI/ML, Game Development, and Web Development. From sharing tech trends on Social Media platforms to hosting hands-on workshops, we blend learning with doing. Our groundbreaking projects, like the RC car and many others (IoT + AI/ML robot), are shaping the future. More than a team, we’re a family—empowering each other to grow, innovate, and excel.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Event Intro */}
            <section className="mb-10">
              <h2 className="text-4xl font-bold text-center text-[#b775a3] mb-6">
                Event Intro  
              </h2>
              <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
              <ul className="text-lg space-y-4">
                <li>
                  <span className="text-[#C7ED67]">HACK THE MATRIX, CODE LIKE A PUNK” <br /> <br />
              💡 Ready to redefine the future? {"<CodePunk v1.O> is no ordinary hackathon—it’s your gateway to unlocking AI’s true potential. With adrenaline-pumping challenges and limitless opportunities to innovate, this is where you’ll create the extraordinary. Don’t just follow the tech revolution—lead it!  "}
              </span>
                </li>
              </ul>
              </div>
            </section>

            {/* Event Intro */}
            <section className="mb-10">
              <h2 className="text-4xl font-bold text-center text-[#b775a3] mb-6">
                Event Intro  
              </h2>
              <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
                <ul className="text-lg space-y-4">
                  <li>
                    <span className="text-[#C7ED67]">"CodePunk kicks off with an orientation, followed by a hackathon where teams create AI-powered solutions under time pressure, and concludes with presentations and judging to determine the winners."
                </span>
                  </li>
                </ul>
              </div>
            </section>

            
            {/* Why Participants */}
            <section>
              <h2 className="text-4xl font-bold text-center text-[#b775a3] mb-6 mt-6">
                Why Participate?  
              </h2>
              <div className="space-y-8">
                {/* Experience AI’s Magic:  */}
                <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-[#C7ED67] mt-4">
                  🚀 Experience AI’s Magic: 
                  </h3>
                  <p className="mt-2">
                  Discover how AI amplifies your creativity.    
                  </p>
                  <h3 className="text-2xl font-semibold text-[#C7ED67] mt-4">
                  ⏳ Rise Under Pressure 
                  </h3>
                  <p className="mt-2">
                  Solve real-world problems in record time.   
                  </p>
                  <h3 className="text-2xl font-semibold text-[#C7ED67] mt-4">
                  ✨ Find Your Genius: 
                  </h3>
                  <p className="mt-2">
                  Push limits and achieve the unimaginable.    
                  </p>
                  <h3 className="text-2xl font-semibold text-[#C7ED67] mt-4">
                  💼 Skill Up for the Future: 
                  </h3>
                  <p className="mt-2">
                  Master AI, teamwork, and problem-solving. 
                  </p>
                  <h3 className="text-2xl font-semibold text-[#C7ED67] mt-4">
                  🤝 Compete & Collaborate: 
                  </h3>
                  <p className="mt-2">
                  Innovate with peers in an electric atmosphere.    
                  </p>
                  <h3 className="text-2xl font-semibold text-[#C7ED67] mt-4">
                  💪 Grow into a Leader: 
                  </h3>
                  <p className="mt-2">
                  Build confidence and refine your presentation skills.    
                  </p>
                </div>
                
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-4xl font-bold text-center text-[#b775a3] mb-6 mt-6">
              Prices
              </h2>
              <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
                <ul className="text-lg space-y-4">
                  <li>
                    <span className="text-[#C7ED67]">🏆 Compete. Innovate. Win. <br /> <br />  
                    Gear up for {"<CodePunk v1.O>! Turn ideas into reality and claim exciting prizes. The future is yours to create"}—
                    {"<CodePunk v1.O>  isn’t just a competition—it’s your launchpad to innovation, growth, and success."}
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-black/80 w-full py-4 text-center mt-10 text-sm text-gray-400">
            Designed with 💻 by Web-Dev Team, Droid
          </footer>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;