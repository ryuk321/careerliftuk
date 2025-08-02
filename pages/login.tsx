'use client';

import { useState } from 'react';
import "../app/globals.css"
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../componenets/Navbar';
import { auth } from "../lib/firebase"
import { useRouter } from "next/router";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // 🔒 TODO: Add API call here for authentication
            // Example:
            // const response = await fetch('/api/login', { ... });
            await signInWithEmailAndPassword(auth, email, password)
            alert('Login successful!');

        } catch (err) {
            setError('Login failed. Please try again.');

        } finally {
            setLoading(false);
        }
    };
    const handleGoogleLogin = async () => {
        // 🔒 TODO: Add Google authentication logic here

        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userData = {
                name : user.displayName,
                email: user.email,
                photoURL: user.photoURL}
            localStorage.setItem('user', JSON.stringify(userData));
            router.push('/'); // Redirect to home page after successful login

        } catch (err:any) {
            setError(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <section className="mt-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
                    <div className="flex justify-center mb-4">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-20 h-20 rounded-full object-cover border-2 border-purple-300 shadow-sm"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Login - Welcome Back!</h1>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition disabled:opacity-50"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="my-4 text-center text-sm text-gray-500">or</div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-md transition"
                    >
                        <FcGoogle className="text-xl text-black" /> Sign in with Google
                    </button>

                    <p className="mt-4 text-sm text-gray-500 text-center">
                        Don't have an account? <a href="/register" className="text-purple-600 hover:underline">Register</a>
                    </p>
                </div>
            </section>
        </>

    );
}
