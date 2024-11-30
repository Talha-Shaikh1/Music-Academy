import React from 'react'

function page() {
  return (
    <section className="bg-slate-900 text-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Get in Touch
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Have questions or want to work together? Drop us a message below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-3 border border-gray-700 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-3 border border-gray-700 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full mt-1 p-3 border border-gray-700 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-500 rounded text-white font-medium hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Contact Details</h3>
            <p className="text-gray-400">
              Email: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
            </p>
            <p className="text-gray-400">Phone: +123 456 789</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-400">123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default page
