import React, { useRef } from 'react';
import logo from "../logo.png";
import bgLoopVideo from '../bg-loop.mp4';

const LandingPage = () => {
  const mainContentRef = useRef(null);
  
  const handleExploreClick = () => {
    mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Button Component
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
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Video Section */}
      <section className="relative h-screen w-full snap-start">
        {/* Video Background */}
        <div className="fixed inset-0 w-full h-screen overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={bgLoopVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Explore Button Overlay */}
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
            {/* Event Details Section */}
            <section className="mb-10">
              <h2 className="text-4xl font-bold text-center text-[#b775a3] mb-6">
                Event Details
              </h2>
              <ul className="text-lg space-y-4">
                <li>
                  <strong>Date:</strong>{" "}
                  <span className="text-[#C7ED67]">27 November, 2024</span>
                </li>
                <li>
                  <strong>Venue:</strong>{" "}
                  <span className="text-[#C7ED67]">Udyaame Chaupal, CSED (AB-XI)</span>
                </li>
                <li>
                  <strong>Event Timing:</strong>{" "}
                  <span className="text-[#C7ED67]">10:00 AM – 4:30 PM</span>
                </li>
                <li>
                  <strong>Ticket Price:</strong>{" "}
                  <span className="text-[#C7ED67]">Solo – Rs.69, Duo – Rs.99</span>
                </li>
                <li>
                  <strong>Prizes:</strong>{" "}
                  <span className="text-[#C7ED67]">Exciting Prizes !!</span>
                </li>
              </ul>
            </section>

            {/* Event Flow Section */}
            <section>
              <h2 className="text-4xl font-bold text-center text-[#b775a3] mb-6">
                Event Flow
              </h2>
              <div className="space-y-8">
                {/* Introduction */}
                <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-[#C7ED67]">
                    Introduction & Orientation
                  </h3>
                  <p className="mt-2">
                    Warm welcome by the organizing team and a brief guest
                    introduction.
                  </p>
                </div>
                {/* Hackathon */}
                <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-[#C7ED67]">
                    Hackathon
                  </h3>
                  <p className="mt-2">
                    Teams log into the application, which opens with a riddle
                    leading to a choice of problem statement; unsolved riddles yield
                    a random problem. Teams have 2 hours to develop a responsive
                    website with time-limited resources.
                  </p>
                </div>
                {/* Refreshment Break */}
                <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-[#C7ED67]">
                    Refreshment Break
                  </h3>
                  <p className="mt-2">
                    Participants can relax and go for refreshments.
                    Networking opportunities for participants to connect with peers and mentors.
                  </p>
                </div>
                {/* Judging */}
                <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-[#C7ED67]">Judging</h3>
                  <p className="mt-2">
                    Initial evaluation to shortlist teams based on their websites.
                    Shortlisted teams proceed to present their work, discuss
                    resources, and demonstrate communication skills.
                  </p>
                </div>
                {/* Final Judging */}
                <div className="bg-yellow-300/10 p-4 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-[#C7ED67]">
                    Final Judging & Winner Announcement
                  </h3>
                  <p className="mt-2">
                    Final presentations judged by a panel, followed by the announcement of the top 10 teams.
                  </p>
                </div>
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