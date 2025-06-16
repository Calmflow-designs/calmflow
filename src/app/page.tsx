"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#e7f6fd] text-gray-800 p-8">
      <img
        src="/calmflow.jpg"
        alt="CalmFlow Logo"
        className="w-48 h-auto mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Welcome to CalmFlow</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        CalmFlow is your all-in-one space to reduce mental clutter, organize your day, and stay focused — effortlessly.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => alert("Signup coming soon!")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Get Started
        </button>
        <button
          onClick={() => alert("More details launching soon!")}
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg"
        >
          Learn More
        </button>
      </div>
    </main>
  );
}
