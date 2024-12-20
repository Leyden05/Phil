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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-100 dark:bg-gray-900 transition-background duration-500">
      <header className="w-full flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200 transition-text duration-500">Phil Fazio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 transition-text duration-500 ml-2">Head Athletic Trainer for the Flint Firebirds</p>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 focus:outline-none transition-background duration-500"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="flex flex-col items-center gap-8 sm:items-start">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-lg w-1/4 h-full"
            src="/images/philhighqual1.jpg"
            alt="Phil Fazio"
            width={180}
            height={180}
            priority
          />
          <Image
            className="rounded-lg w-1/4 h-full"
            src="/images/phillowqual1.jpg"
            alt="Phil Fazio"
            width={180}
            height={180}
            priority
          />
          <Image
            className="rounded-lg w-1/4 h-full"
            src="/images/phillowqual2.jpg"
            alt="Phil Fazio"
            width={180}
            height={180}
            priority
          />
          <Image
            className="rounded-lg w-1/4 h-full"
            src="/images/phillowqual3.jpg"
            alt="Phil Fazio"
            width={180}
            height={180}
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
                src="/images/flint-firebirds.jpg"
                alt="Flint Firebirds"
                width={80}
                height={80}
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500">Head Athletic Trainer for the Flint Firebirds</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-text duration-500">Phil is currently the head athletic trainer for the Flint Firebirds, where he ensures the health and performance of the hockey team.</p>
                <a href="https://flintfirebirds.com" className="text-blue-500">Learn more</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                className="rounded-lg"
                src="/images/ufl-team.jpg"
                alt="UFL Team"
                width={80}
                height={80}
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500">Athletic Trainer for a UFL team</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-text duration-500">Phil has experience working as an athletic trainer for a UFL team, where he was responsible for the players' physical health and injury prevention.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                className="rounded-lg"
                src="/images/isu-hockey.jpg"
                alt="ISU Hockey"
                width={80}
                height={80}
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500">Hockey Coach at Illinois State University (ISU)</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-text duration-500">Phil also served as a hockey coach at Illinois State University, where he coached and mentored the university's hockey team.</p>
                <a href="https://illinoisstate.edu" className="text-blue-500">Learn more</a>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 transition-text duration-500">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 transition-text duration-500">
            You can reach Phil at <a href="mailto:phil.fazio@flintfirebirds.com" className="text-blue-500">phil.fazio@flintfirebirds.com</a>.
          </p>
        </section>
      </main>
      <footer className="w-full text-center py-4 bg-gray-200 dark:bg-gray-800 mt-8 transition-background duration-500">
        <p className="text-gray-600 dark:text-gray-400 transition-text duration-500">© 2023 Phil Fazio. All rights reserved.</p>
      </footer>
    </div>
  );
}
