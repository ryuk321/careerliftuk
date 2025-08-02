"use client";
import Navbr from "../componenets/Navbar";
import { useState } from "react";
import "../app/globals.css"

export default function ApplyForm() {
   const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    jobLocation: "",
    postcode:"",
    jobType: "",
    bio: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;// Prevent multiple submissions
    setLoading(true);
    try{
      const res = await fetch(`/api/write-to-applications`, {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const result = await res.json();
    alert(result.message || result.error);
      
    }
    catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.');
    } finally {
      setLoading(false);
    }



    e.preventDefault();
    alert([formData.fullName, formData.email, formData.phone, formData.location, formData.postcode, formData.jobType, formData.bio]);
    const res = await fetch(`/api/write-to-sheet`, {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    
     
    });
    const result = await res.json();
    alert(result.message || result.error);
  };

  return (
    <>
    <Navbr />
    <div className="mt-5 py-40 bg-white-100 bg-opacity-50 h-screen">
      <form onSubmit={handleSubmit} className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600 font-semibold text-lg">Job Seeker Form - Please Fill up the form. We'll get back to you soon.</h1>
            </div>
          </div>
        </div>

        <div className="bg-white space-y-6 p-6">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <div className="w-full inline-flex border rounded-md">
              <div className="pt-2 px-2 bg-gray-100 bg-opacity-50">
                <svg className="w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full focus:outline-none focus:text-gray-600 p-2 text-black"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <div className="w-full inline-flex border rounded-md">
              <div className="pt-2 px-2 bg-gray-100">
                <svg className="w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full focus:outline-none focus:text-gray-600 p-2 text-black"
                placeholder="Your full name"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-400">Phone Number - Whatsapp</label>
            <div className="w-full inline-flex border rounded-md">
              <div className="pt-2 px-2 bg-gray-100">
                <svg className="w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full focus:outline-none focus:text-gray-600 p-2 text-black"
                placeholder="1234567890"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="text-sm text-gray-400">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:text-gray-600 text-black"
              placeholder="City, Country"
            />
          </div>
             {/* JOb Location */}
          <div>
            <label className="text-sm text-gray-400">Job Location- Where you want the job?</label>
            <input
              type="text"
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:text-gray-600 text-black"
              placeholder="New my Place, Hendon, Uxbridge, Inside London"
            />
          </div>
           {/* Post Code  Pickup*/}
          <div>
            <label className="text-sm text-gray-400">Post Code</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:text-gray-600 text-black"
              placeholder="SE10 9LS"
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="text-sm text-gray-400">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:text-gray-600 text-black"
              required
            >
              <option value="">Select a role</option>
              <option value="freelancer">Freelancer</option>
              <option value="Kitchen_Porter">Kitchen Porter</option>
              <option value="general_assistant">General Assistant</option>
              <option value="warehouse_Operative">Warehouse Operative</option>
              <option value="cleaner">Cleaner</option>
              <option value="house_kepper">HouseKeeper</option>
              <option value="zerohour">Zero-Hour</option>
              <option value="construction">Construction Helper</option>
              <option value="retail_assistant">Retail -Sales Assitant</option>
            </select>
          </div>  

          {/* Bio */}
          <div>
            <label className="text-sm text-gray-400">Brief Introduction / Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-md p-2 focus:outline-none focus:text-gray-600 text-black" 
              placeholder="Tell us about yourself"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition"
            >
              Submit Application
            </button>
          </div>
        </div>
      </form>
    </div>
    
    </>
  );
}