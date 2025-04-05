import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Your Fashion Stylist</h1>
      <p className="text-gray-600">Let’s get to know your vibe so we can dress you like the icon you are.</p>
      <Link href="/onboarding/steps/1" className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
        Start Styling
      </Link>
    </div>
  );
}
