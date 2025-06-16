'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-calm-accent text-calm-text flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <Image
            src="/calmflow-logo.png"
            alt="CalmFlow Logo"
            width={160}
            height={60}
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Lighten Your Mental Load with CalmFlow
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          CalmFlow is your personal productivity companion, designed to bring peace and clarity to your busy day. Organize tasks, track goals, and let the stress fade away.
        </p>
        <div className="space-x-4">
          <a
            href="#"
            className="bg-calm-primary text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-calm-primary/90 transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="text-calm-text underline text-lg font-medium hover:text-calm-primary transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}

