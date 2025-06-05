import React from 'react'

const About = () => {
   return (
    <div className="max-w-3xl mx-4 sm:mx-auto my-12 px-4 sm:px-8 py-8 bg-white border-2 border-blue-500 rounded-2xl shadow-2xl text-center">

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img src="/profile.jpeg" alt="dev image"  width={170} height={120}  className="rounded-2xl border-4 border-blue-300 object-cover"/>
       
      </div>

      {/* About Section */}
      <h2 className="text-3xl font-bold mb-4 text-blue-700">About the Developer</h2>
      <p className="text-gray-800 mb-8 text-justify leading-relaxed">
        I’m a passionate Full Stack MERN Developer with hands-on experience in building scalable web applications using MongoDB, Express.js, React, and Node.js. 
        My expertise spans both frontend and backend development, along with deployment and infrastructure management using AWS services such as EC2, S3, and RDS. 
        I thrive on turning complex problems into elegant solutions and building high-quality, user-friendly products.
      </p>

      {/* Contact Section */}
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">Contact Me</h3>
      <div className="flex flex-wrap justify-center gap-6 text-blue-800">
        <a
          href="mailto:shubhamjii2002@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-lg shadow hover:bg-blue-200 transition"
        >
          📧 Gmail
        </a>
        <a
          href="https://www.instagram.com/mr_shubham_6684"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-lg shadow hover:bg-pink-200 transition"
        >
          📷 Instagram
        </a>
        <a
          href="https://github.com/Shubhamsharma2002"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shubhamsharma2026/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-lg shadow hover:bg-blue-200 transition"
        >
          💼 LinkedIn
        </a>
      </div>
    </div>
  )
}

export default About