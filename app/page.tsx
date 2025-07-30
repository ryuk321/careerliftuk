
import Test from "../pages/test"
import Status from "../componenets/Status"
import Navbar from "../componenets/Navbar"
import Hero from "../componenets/Hero"
import CTA from "../componenets/CTA";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-sans px-6">
      {/* Nav Bar */}
     <Navbar />
     <div className="mt-15 ">
       <img
    src="/logo.png" // replace with your logo path
    alt="CareerLift UK Logo"
    className="w-35 h-35  mt-10 rounded-full shadow-lg"
    />

     </div>
     

      {/* Hero Section */}
      <section className="mt-25 text-center">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to CareerLift UK</h1>
        <p className="text-lg mb-6">Connecting skilled workers with exciting opportunities across London.</p>
        <button className="px-6 py-2 bg-white text-purple-700 rounded font-semibold hover:bg-purple-100 transition">
          See Jobs
        </button>
      </section>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl w-full">
        {[
          { title: "For Jobs-Seekers", desc: "Find in-depth information your jobs" },
          { title: "For Recruiters", desc: "Post Job to hire employee ASAP." },
          { title: "Part-Time", desc: "For Part timers Strictly Part-timers" },
          { title: "Students", desc: "Instantly get Hired!" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-sm shadow-md hover:bg-white/20 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

