"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 bg-gray-100 dark:bg-darkBlue transition-background duration-500">
      <header className="w-full flex justify-between">
        <div className="text-left z-10 lg:mt-48">
          <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200 transition-text duration-500">Phil Fazio</h1>
          <p className="text-3xl text-gray-600 dark:text-gray-400 transition-text duration-500 ml-2">Head Athletic Trainer for the Flint Firebirds</p>
        </div>
        <div className="hidden lg:block absolute top-40 right-20 w-1/3 h-3/4 bg-lightGold rounded-lg transform rotate-12 z-0"></div>
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
          className="absolute top-20 right-20 p-2 rounded-full bg-gray-300 dark:bg-gray-700 focus:outline-none transition-background duration-500 z-10"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      <div className="bg-lightGold p-6 w-full mb-8">

</div>
      <main className="flex flex-col items-center gap-8 sm:items-start z-10">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-lg w-1/4 h-full"
            src="/images/philufl1.jpg"
            alt="Phil Fazio"
            width={1000}
            height={1000}
            priority
          />
          <Image
            className="rounded-lg w-1/4 h-full"
            src="/images/philice1.jpg"
            alt="Phil Fazio"
            width={1000}
            height={1000}
            priority
          />
          <Image
            className="rounded-lg w-1/4 h-full"
            src="/images/philice2.jpg"
            alt="Phil Fazio"
            width={1000}
            height={1000}
            priority
          />
          <Image
            className="rounded-lg w-1/4 h-full"
            src="/images/philice3.jpg"
            alt="Phil Fazio"
            width={1000}
            height={1000}
            priority
          />
        </div>
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500">About Phil</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 transition-text duration-500">
            Phil Fazio is the head athletic trainer for the Flint Firebirds hockey team. With over 10 years of experience in sports medicine, Phil is dedicated to ensuring the health and performance of the team.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 transition-text duration-500">Employment</h3>
          <div className="mt-4 space-y-6">
            <div className="flex items-start gap-4">
              <Image
                className="rounded-lg"
                src="/images/Flint_Firebirds_logo.svg.png"
                alt="Flint Firebirds"
                width={80}
                height={80}
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500">Head Athletic Trainer for the Flint Firebirds</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-text duration-500">Phil is currently the head athletic trainer for the Flint Firebirds, where he ensures the health and performance of the hockey team.</p>
                <a href="https://chl.ca/ohl-firebirds/" className="text-blue-500" target="_blank">Learn more</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                className="rounded-lg"
                src="/images/Michigan_Panthers_transparent.png"
                alt="UFL Team"
                width={80}
                height={80}
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500">Athletic Trainer for a UFL team</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-text duration-500">Phil has experience working as an athletic trainer for a UFL team, where he was responsible for the players' physical health and injury prevention.</p>
                <a href="https://illinoisstate.edu" className="text-blue-500" target="_blank">Learn more</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                className="rounded-lg"
                src="/images/ISU-Seal_1C_186.png"
                alt="ISU Hockey"
                width={80}
                height={80}
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500">Hockey Coach at Illinois State University (ISU)</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-text duration-500">Phil also served as a hockey coach at Illinois State University, where he coached and mentored the university's hockey team.</p>
                <a href="https://illinoisstate.edu" className="text-blue-500" target="_blank">Learn more</a>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 transition-text duration-500">
            You can reach Phil at <a href="mailto:philip@flintfirebirds.com" className="text-blue-500">philip@flintfirebirds.com</a>.
          </p>
        </section>
      </main>
      <footer className="w-full text-center py-4 bg-gray-200 dark:bg-gray-800 mt-8 transition-background duration-500">
        <p className="text-gray-600 dark:text-gray-400 transition-text duration-500">© 2023 Phil Fazio. All rights reserved.</p>
      </footer>
    </div>
  );
}
