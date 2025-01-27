import React from 'react';
import { FaMapPin, FaPhoneSquareAlt, FaEnvelopeOpen } from 'react-icons/fa'; // Colorful icons from react-icons

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1350&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {/* About the Contact Page */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch with Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Om Advertisement is committed to delivering impactful outdoor advertising solutions. Whether you're looking for a billboard in a prime location or have questions about our services, our team is here to assist you.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Address Card */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="text-4xl text-blue-500 mb-4">
                <FaMapPin /> {/* Colorful icon */}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Address</h3>
              <p className="text-gray-600">123 Main Street</p>
              <p className="text-gray-600">City, State, Country</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="text-4xl text-green-500 mb-4">
                <FaPhoneSquareAlt /> {/* Colorful icon */}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Us</h3>
              <p className="text-gray-600">+1 234 567 890</p>
              <p className="text-gray-600">+1 987 654 321</p>
            </div>

            {/* Email Card */}
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="text-4xl text-red-500 mb-4">
                <FaEnvelopeOpen /> {/* Colorful icon */}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Email Us</h3>
              <p className="text-gray-600">info@omadvertisement.com</p>
              <p className="text-gray-600">support@omadvertisement.com</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Om Advertisement Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5924990186268!2d72.6533925!3d23.0020077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e877a71e9b125%3A0x478cd6dbc608859d!2sCode%20Craft%20Technical%20Institue!5e0!3m2!1sen!2sin!4v1737964537415!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Additional Call to Action */}
      <div className="bg-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advertise?</h2>
          <p className="text-lg text-white mb-6">
            Reach out to us and discover how Om Advertisement can help you create an impactful outdoor advertising campaign.
          </p>
          <a
            href="mailto:info@omadvertisement.com"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
