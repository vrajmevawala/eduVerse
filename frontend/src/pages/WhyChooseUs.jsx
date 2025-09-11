import React from "react";
import {
  CheckCircle,
  BarChart3,
  Users,
  ShieldCheck,
  MonitorSmartphone,
  Linkedin,
  Github,
  Instagram,
  Brain,
  Layers,
  Database,
} from "lucide-react";

import yugImg from "../assets/yug.jpeg";
import vrajImg from "../assets/Vraj.jpeg";
import samarthImg from "../assets/samarth.jpeg";
import aaryanImg from "../assets/aaryan.jpeg";

const features = [
  {
    icon: <CheckCircle className="h-7 w-7 text-white" />,
    bg: "bg-gray-800",
    title: "Comprehensive Practice",
    points: [
      "Thousands of curated aptitude and technical questions",
      "Practice by category, subcategory, and difficulty level",
      "Detailed explanations for every question",
    ],
  },
  {
    icon: <BarChart3 className="h-7 w-7 text-white" />,
    bg: "bg-gray-800",
    title: "Realistic Test Series",
    points: [
      "Timed test series simulating real placement exams",
      "Instant feedback and performance analytics",
      "Track your progress and improve over time",
    ],
  },
  {
    icon: <Users className="h-7 w-7 text-white" />,
    bg: "bg-gray-800",
    title: "Expert Guidance",
    points: [
      "Role-based dashboards for students, moderators, and admins",
      "Moderators and admins ensure quality and fairness",
      "Resource sharing and up-to-date materials",
    ],
  },
  {
    icon: <MonitorSmartphone className="h-7 w-7 text-white" />,
    bg: "bg-gray-800",
    title: "Modern, User-Friendly Platform",
    points: [
      "Clean, responsive UI for seamless experience on any device",
      "Secure authentication (including Google login)",
      "Easy question upload (Excel/JSON) for bulk management",
    ],
  },
];

const team = [
  {
    name: "Yug Gandhi",
    role: "Full-Stack Developer",
    desc: "Yug bridges front-end and back-end with scalable systems and clean architecture, ensuring seamless integration and a smooth experience across EduVerse.",
    socials: { linkedin: "https://www.linkedin.com/in/yug-gandhi-7a3353284/", github: "https://github.com/YugGandhi", instagram: "https://www.instagram.com/yug_0403/" },
    img: yugImg,
    roleIcon: <Layers className="h-6 w-6 text-gray-600" />,
  },
  {
    name: "Vraj Mevawala",
    role: "Full-Stack Developer",
    desc: "Vraj brings ideas to life with full-stack expertise, ensuring features are robust, efficient, and user-friendly while maintaining high-quality development practices.",
    socials: { linkedin: "#", github: "#", instagram: "#" },
    img: vrajImg,
    roleIcon: <MonitorSmartphone className="h-6 w-6 text-gray-600" />,
  },
  {
    name: "Samarth Kachhadiya",
    role: "Database Specialist",
    desc: "Samarth designs and manages efficient, reliable databases. He ensures EduVerse data is secure, consistent, and flows seamlessly across applications and services.",
    socials: { linkedin: "#", github: "#", instagram: "#" },
    img: samarthImg,
    roleIcon: <Database className="h-6 w-6 text-gray-600" />,
  },
  {
    name: "Aaryan Chavda",
    role: "AI Engineer",
    desc: "Aaryan specializes in artificial intelligence and machine learning. He builds smart models that drive intelligent, adaptive features within EduVerse applications.",
    socials: { linkedin: "#", github: "#", instagram: "#" },
    img: aaryanImg,
    roleIcon: <Brain className="h-6 w-6 text-gray-600" />,
  },

];


const WhyChooseUs = () => {
  return (
    <div className="page py-16 px-6 bg-white">
      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Why Choose <span className="text-gray-700">EduVerse</span>?
        </h1>
        <p className="text-lg text-gray-600 mb-14 max-w-3xl mx-auto">
          EduVerse is your one-stop solution for placement preparation,
          designed to empower students and job seekers with the best tools,
          resources, and support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-8 text-left hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${feature.bg}`}
              >
                {feature.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-800 rounded-2xl py-10 px-6 shadow-lg flex flex-col items-center text-center">
          <ShieldCheck className="h-12 w-12 text-white mb-3" />
          <h2 className="text-3xl font-bold text-white mb-3">
            Join EduVerse Today!
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl">
            Start your journey towards placement success with EduVerse.
            Practice, compete, learn, and achieve your goals with us!
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Developers Section */}
      <div className="py-12 px-4 mt-10">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Meet <span className="text-gray-600">Our Developers</span>
            </h1>
            <p className="text-sm text-gray-600">
              The passionate innovators building EduVerse with dedication and vision.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="relative bg-white text-black rounded-lg p-5 
                     border border-gray-200 shadow-sm 
                     hover:shadow-[0_0_12px_2px_rgba(0,0,0,0.5)] 
                     transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  {/* Profile Image */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover bg-gray-200"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="text-base font-semibold">{member.name}</h2>
                    <h3 className="text-xs font-medium text-gray-500">
                      {member.role}
                    </h3>
                  </div>

                  {/* Role Icon */}
                  <div className="text-gray-700">{member.roleIcon}</div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 mt-3 mb-4 leading-relaxed text-left">
                  {member.desc}
                </p>

                {/* Social Links */}
                <div className="flex space-x-2">
                  {/* LinkedIn */}
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white border border-black text-black p-2.5 rounded-md shadow-sm 
                    hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] 
                    hover:
                    transition-all duration-300"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>

                  {/* GitHub */}
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white border border-black text-black p-2.5 rounded-md shadow-sm 
                    hover:bg-gray-900 hover:text-white hover:border-gray-900 
                    hover:
                    transition-all duration-300"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white border border-black text-black p-2.5 rounded-md shadow-sm 
                    hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 
                    hover:text-white hover:border-pink-500 
                    hover:
                    transition-all duration-300"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>



    </div>
  );
};

export default WhyChooseUs;
