"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredJob, setHoveredJob] = useState(null);
  const [currentImage, setCurrentImage] = useState("/images/philice1.jpg");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    AOS.init({});
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (hoveredJob) {
      // Start fading out
      setIsFading(true);

      // Wait for the fade-out transition to finish, then change the image
      const timeout = setTimeout(() => {
        const job = jobs.find((job) => job.id === hoveredJob);
        if (job) {
          setCurrentImage(job.image);
        }
        setIsFading(false); // Start fading in
      }, 300); // Match the duration of the CSS transition (300ms)

      return () => clearTimeout(timeout);
    }
  }, [hoveredJob]);

  const jobs = [
    {
      id: "firebirds",
      title: "Head Athletic Trainer for the Flint Firebirds",
      description:
        "Phil is currently the head athletic trainer for the Flint Firebirds, where he ensures the health and performance of the entire hockey team.",
      link: "https://chl.ca/ohl-firebirds/",
      logo: "/images/Flint_Firebirds_logo.svg.png",
      image: "/images/philice1.jpg",
    },
    {
      id: "panthers",
      title: "Athletic Trainer for the Michigan Panthers",
      description:
        "Phil has experience working as an athletic trainer for the Michigan Panthers, where he was responsible for the players' physical health and injury prevention.",
      link: "https://example.com",
      logo: "/images/Michigan_Panthers_transparent.png",
      image: "/images/philufl1.jpg",
    },
    {
      id: "isu",
      title: "Hockey Coach at Illinois State University (ISU)",
      description:
        "Phil also served as the NCAA Division 1 & Division 2 hockey coach at Illinois State University. At ISU, he coached and mentored the university's hockey team.",
      link: "https://illinoisstate.edu",
      logo: "/images/ISU-Seal_1C_186.png",
      image: "/images/philisu1.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 dark:bg-darkBlue transition-background duration-500">
      <header className="w-full flex justify-between">
        <div className="text-left z-10 lg:mt-48">
          <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200 transition-text duration-500"
          data-aos="fade-up">
            Phil Fazio
          </h1>
          <p className="text-3xl text-gray-600 dark:text-gray-400 transition-text duration-500 ml-2"
          data-aos="fade-up"
          data-aos-delay="600">
            Head Athletic Trainer for the Flint Firebirds
          </p>
        </div>
        <div className="hidden lg:block absolute top-40 right-20 w-1/3 h-3/4 bg-lightGold rounded-lg transform rotate-12 z-0"
        data-aos="fade-up"></div>
        <Image
          className="md:block hidden rounded-lg w-1/2 max-w-[40%] h-3/4 z-10"
          src="/images/philnobg1.png"
          alt="Phil Fazio"
          width={1000}
          height={1500}
          priority
        />
      </header>
      <button
        onClick={toggleDarkMode}
        className="absolute top-10 right-10 lg:top-20 lg:right-20 p-2 rounded-full bg-gray-300 dark:bg-gray-700 focus:outline-none transition-background duration-500 z-10"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line x1="12" y1="1" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.752 15.002A9 9 0 0112 3c-.548 0-1.085.048-1.612.14a7 7 0 108.224 8.224 9.056 9.056 0 011.14 3.638z" />
          </svg>
        )}
      </button>

      <div className="bg-lightGold p-6 w-full mt-4 lg:mt-0 mb-8 rounded-lg z-2"
      data-aos="fade-up"
      data-aos-delay="300"></div>
      <main className="flex flex-col items-center gap-8 sm:items-start z-10">
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500"
          data-aos="fade-up"
          data-aos-delay="600">
            About Phil
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 transition-text duration-500"
          data-aos="fade-up"
          data-aos-delay="600">
            Phil Fazio is the head athletic trainer for the Flint Firebirds
            hockey team. With over 3 years of experience in sports medicine,
            Phil is dedicated to ensuring the health and performance of the
            team.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 my-6 transition-text duration-500"
          data-aos="fade-up"
          data-aos-delay="600">
            Employment
          </h3>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full lg:w-1/2 space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="flex lg:flex-row flex-col items-center lg:items-start gap-4 text-gray-800 dark:text-gray-200 hover:text-gray-200 hover:bg-gray-800 transition duration-500 p-6 rounded-lg"
                    onMouseEnter={() => setHoveredJob(job.id)}
                    onMouseLeave={() => setHoveredJob(null)}
                  >
                    <Image
                      className="rounded-lg"
                      src={job.logo}
                      alt={job.title}
                      width={80}
                      height={80}
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{job.title}</h4>
                      <p>{job.description}</p>
                      <a
                        href={job.link}
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden w-1/2 h-full rounded-lg">
                <Image
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className={`hidden lg:block inset-0 w-full h-[550px] max-h-[550px] object-cover transition-opacity duration-300 ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                  src={currentImage}
                  alt="Hovered job image"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className="text-center text-gray-600 dark:text-gray-400 transition-text duration-500 mt-16"
        data-aos="fade-up">
          &copy; 2021 Phil Fazio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
