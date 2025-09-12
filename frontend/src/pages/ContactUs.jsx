import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      alert(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mb-4">Have questions or feedback? We’d love to hear from you.</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input name="name" required value={form.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" rows="5" required value={form.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"></textarea>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-black text-white rounded-md shadow-sm hover:bg-gray-800 transition text-sm font-medium">Send Message</button>
            {sent && (
              <p className="text-xs text-green-600">Message sent successfully. We’ll get back to you soon.</p>
            )}
          </form>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Reach us directly</h2>
          <p className="text-gray-700">Email: <a className="text-black underline" href="mailto:team.placeprep@gmail.com">team.placeprep@gmail.com</a></p>
          <div className="mt-6 text-sm text-gray-600">
            <p className="mb-2">We typically respond within 1-2 business days.</p>
            <p>For account-related issues, please include the email used on PlacePrep.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


