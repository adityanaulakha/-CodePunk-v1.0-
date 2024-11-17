import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bg from "./assets/bg-1.png";
import logo from "./assets/logo.png";
import introVideo from "./assets/entry.mp4"; 
import "./App.css";

// Styled Components
const FullScreenVideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9999;
  display: ${({ isPlaying }) => (isPlaying ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AppWrapper = styled.div`
  animation: fadeIn 2s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// Button Component
const Button = () => {
  const handleClick = () => {
    window.open("https://forms.gle/tq36yLm7KxEdciXZA", "_blank");
  };
  return (
    <StyledWrapper>
      <button className="cssbuttons-io-button" onClick={handleClick}>
        Book Now!!
        <div className="icon">
          <svg
            height={24}
            width={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cssbuttons-io-button {
    background: #a370f0;
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }
`;

// Main App Component
function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    // Auto-hide video after a timeout if necessary
    const timer = setTimeout(() => setIsVideoPlaying(false), 10000); // Fallback timeout
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <>
      {/* Fullscreen Video Intro */}
      <FullScreenVideoWrapper isPlaying={isVideoPlaying}>
        <video autoPlay muted onEnded={handleVideoEnd}>
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </FullScreenVideoWrapper>

      {/* Main Website Content */}
      {!isVideoPlaying && (
        <AppWrapper>
          <div
            className="min-h-screen text-white flex flex-col items-center"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Header Section */}
            <header className="w-full py-8 flex items-center justify-between px-6">
              <div>
                <img src={logo} alt="logo" />
              </div>
              {/* Button in Top-Right Corner */}
              <div>
                <Button />
              </div>
            </header>

            {/* Main Content */}
            <main className="bg-black bg-opacity-40 w-11/12 md:w-9/12 lg:w-8/12 rounded-xl p-8 mt-10">
              {/* Event Details Section */}
              <section className="mb-10">
                <h2 className="text-4xl font-bold text-center text-[#b775a3] mb-6 ">
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
                <h2 className="text-4xl font-bold text-center text-[#b775a3] mb-6 ">
                  Event Flow
                </h2>
                <div className="space-y-8">
                  {/* Introduction */}
                  <div className="bg-yellow-300 bg-opacity-10 p-4 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-[#C7ED67]">
                      Introduction & Orientation
                    </h3>
                    <p className="mt-2">
                      Warm welcome by the organizing team and a brief guest
                      introduction.
                    </p>
                  </div>
                  {/* Hackathon */}
                  <div className="bg-yellow-300 bg-opacity-10 p-4 rounded-lg shadow-md">
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
                  <div className="bg-yellow-300 bg-opacity-10 p-4 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-[#C7ED67]">
                    Refreshment Break
                    </h3>
                    <p className="mt-2">
                    Participants can relax and go for refreshments.
                    Networking opportunities for participants to connect with peers and mentors.
                    </p>
                  </div>
                  {/* Judging */}
                  <div className="bg-yellow-300 bg-opacity-10 p-4 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-[#C7ED67]">Judging</h3>
                    <p className="mt-2">
                      Initial evaluation to shortlist teams based on their websites.
                      Shortlisted teams proceed to present their work, discuss
                      resources, and demonstrate communication skills.
                    </p>
                  </div>
                  {/* Final Judging */}
                  <div className="bg-yellow-300 bg-opacity-10 p-4 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-[#C7ED67]">
                      Final Judging & Winner Announcement
                    </h3>
                    <p className="mt-2">
                    Final presentations judged by a panel, followed by the announcement of the top 10 teams.
                    </p>
                  </div>
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="bg-black bg-opacity-80 w-full py-4 text-center mt-10 text-sm text-gray-400">
              Designed with 💻 by Web-Dev Team, Droid
            </footer>
          </div>
        </AppWrapper>
      )}
    </>
  );
}

export default App;
