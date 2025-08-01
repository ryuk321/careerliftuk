'use client';

import { useState } from 'react';
import "../app/globals.css";
// pages/sales.tsx


export default function SalesForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    contactName: '',
    phone: '',
    email: '',
    address: '',
    status: '',
    remarks: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`/api/write-to-alleat`, {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const result = await res.json();
    alert(result.message || result.error);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-purple-700">All Eat Sales Form</h2>

        {/* Business Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
          <input
            name="businessName"
            type="text"
            value={formData.businessName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:font-bold"
          />
        </div>

        {/* Business Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:font-bold"
          >
            <option value="">Select type</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Cafe">Cafe</option>
            <option value="Takeaway">Takeaway</option>
            <option value="Grocery">Grocery</option>
            <option value="Convenience Store">Convenience Store</option>
            <option value="Supermarket">Supermarket</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Contact Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
          <input
            name="contactName"
            type="text"
            value={formData.contactName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:font-bold"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:font-bold"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:font-bold"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={2}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:font-bold"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:font-bold"
          >
            <option value="">Select status</option>
            <option value="Interested">Interested</option>
            <option value="Signed">Signed</option>
            <option value="In Process">In Process</option>
            <option value="Declined">Declined</option>
          </select>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:font-bold"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
