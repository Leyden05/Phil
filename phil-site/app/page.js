import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Phil Fazio</h1>
        <p className="text-xl text-gray-600">Head Athletic Trainer for the Flint Firebirds</p>
      </header>
      <main className="flex flex-col items-center gap-8 sm:items-start">
        <Image
          className="rounded-full"
          src="/phil-fazio.jpg"
          alt="Phil Fazio"
          width={180}
          height={180}
          priority
        />
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">About Phil</h2>
          <p className="text-gray-600 mt-4">
            Phil Fazio is the head athletic trainer for the Flint Firebirds hockey team. With over 10 years of experience in sports medicine, Phil is dedicated to ensuring the health and performance of the team.
          </p>
        </section>
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
          <p className="text-gray-600 mt-4">
            You can reach Phil at <a href="mailto:phil.fazio@flintfirebirds.com" className="text-blue-500">phil.fazio@flintfirebirds.com</a>.
          </p>
        </section>
      </main>
      <footer className="w-full text-center py-4 bg-gray-200 mt-8">
        <p className="text-gray-600">© 2023 Phil Fazio. All rights reserved.</p>
      </footer>
    </div>
  );
}
