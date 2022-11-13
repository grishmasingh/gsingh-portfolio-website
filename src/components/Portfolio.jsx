import React from "react";
import game from "../assets/portfolio/physic.PNG";
import instabot from "../assets/portfolio/instabot.PNG";
import keylogger from "../assets/portfolio/keylogger.PNG";
import webapp from "../assets/portfolio/notes.PNG";
import webscraper from "../assets/portfolio/scraper.PNG";


const Portfolio = () => {
  const portfolios = [
    {

      id: 1,
      src: game,
      href: "https://github.com/grishmasingh/physics-simulation-pymunk-pygame",
    },
    {
      id: 2,
      src: instabot,
      href: "https://github.com/grishmasingh/instagram-bot-scraper",
    },
    {
      id: 3,
      src: keylogger,
      href: "https://github.com/grishmasingh/keylogger-user-pass",
    },
    {
      id: 4,
      src: webapp,
      href: "https://github.com/grishmasingh/notes-application-python-flask",
    },
    {
      id: 5,
      src: webscraper,
      href: "https://github.com/grishmasingh/webscraper-imdb-animelist",
    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-white to-white w-full text-black md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">These are my Projects and the Github links are provided!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
              href={href}
            >
                  Github Link
                  </a>
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
