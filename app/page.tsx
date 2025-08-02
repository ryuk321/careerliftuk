
"use client";
import Test from "../pages/test"
import Status from "../componenets/Status"
import Navbar from "../componenets/Navbar"
import Hero from "../componenets/Hero"
import CTA from "../componenets/CTA";
import Link from "next/link";



import { useState, useEffect } from "react";



export default function Home() {

  const [user, setUser] = useState<{ name: string; email: string; photoURL: string } | null>(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [])


  


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
        {user ? (
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome Back to CareerLift UK, {user.name}</h1>
            <p className="text-lg mb-6">Connecting skilled workers with exciting opportunities across London.</p>
            <p className="text-lg mb-6 italic">For the time being, Please leave us a message we will get back to you soon.</p>

          </div>
        ) : (
          <div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to CareerLift UK</h1>
            <p className="text-lg mb-6">Connecting skilled workers with exciting opportunities across London.</p>
            <p className="text-lg mb-6 italic">For the time being, Please leave us a message we will get back to you soon.</p>
          </div>
        )

        }


        <Link href="/jobs" passHref legacyBehavior>
          <a className="px-6 py-2 bg-white text-purple-700 rounded font-semibold hover:bg-purple-100 transition">
            See Jobs</a>
        </Link>
        <Link href="/forms" passHref legacyBehavior>
          <a className="ml-5 px-6 py-2 bg-white text-pink-700 rounded font-semibold hover:bg-purple-100 transition inline-block text-center">
            Contact Us
          </a>
        </Link>
      </section>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl w-full">
        {[
          { title: "For Jobs-Seekers", desc: "Find in-depth information your jobs", href: "/jobs" },
          { title: "For Recruiters", desc: "Post Job to hire employee ASAP.", href: "/job-register" },
          { title: "Part-Time", desc: "For Part timers Strictly Part-timers", href: "/jobs" },
          { title: "Students", desc: "Instantly get Hired!", href: "/jobs" },
          { title: "Zero-Hour Contract", desc: "Instantly get Hired!", href: "/jobs" },
        ].map((item, i) => (
          <Link href={item.href} key={i} passHref legacyBehavior>
            <a
              className="block bg-white/10 p-6 rounded-xl backdrop-blur-sm shadow-md hover:bg-white/20 transition cursor-pointer no-underline"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm">{item.desc}</p>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}

