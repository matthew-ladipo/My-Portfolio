import React from "react";
import img from '../image/subtle-prism.png'

const Contact = () => {
  return (
    <div
      id="contact"
      style={{ backgroundImage: `url(${img})` }}
      className="flex items-center justify-center bg-gray-100 text-gray-800 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-3xl">
        {/* Section Heading */}
        <div className="text-center pb-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <span className="bg-blue-800 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-500 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Feel free to get in touch with me by filling out the form below.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full">
            <form className="bg-white shadow-md rounded-lg p-6 sm:p-8">
              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-all w-full sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
