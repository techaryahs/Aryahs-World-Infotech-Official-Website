import React, { useState } from "react";
import { motion } from "framer-motion";
import InternApplyForm from "../components/InternApplyForm";


const Interns = () => {
  const [openForm, setOpenForm] = useState(false);

  // ⭐ Internship Roles
  const roles = [
    {
      title: "ANDROID DEVELOPMENT INTERN",
      desc: "Learn Android Studio, Kotlin, Java, XML, and Firebase while working on guided live projects and real-world mobile app development tasks.",
    },
    {
      title: "FULL STACK DEVELOPER INTERN",
      desc: "Learn HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB & MySQL while working on guided full-stack live projects and real web applications.",
    },
    {
      title: "MERN STACK DEVELOPER INTERN",
      desc: "Build modern web apps using React, Node.js, Express, and MongoDB with step-by-step guidance, API integration practice, and hands-on MERN live project experience.",
    },
    {
      title: "WEB DEVELOPMENT INTERN",
      desc: "Start with HTML, CSS, JavaScript, and Bootstrap while creating responsive websites, interactive pages, and guided real-world web development projects.",
    },
    {
      title: "AI ML INTERN",
      desc: "Learn Python, NumPy, Pandas, and machine learning basics with guided model-building sessions, data preprocessing practice, and real AI/ML prediction projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 pt-36 pb-20">

      {/* ⭐ HERO SECTION */}
      <section className="text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm"
        >
          Join Our <span className="text-blue-600">Internship Program</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Kickstart your career with Aryahs World Infotech. Work on powerful real-world
          products, learn industry-level tools, and elevate your skills with expert mentorship.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenForm(true)}
          className="mt-8 px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
          font-semibold rounded-2xl shadow-lg hover:shadow-blue-300/50 transition"
        >
          Apply Now 🚀
        </motion.button>
      </section>

      {/* ⭐ ROLES SECTION */}
      <section className="mt-24 px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Internship <span className="text-blue-600">Roles</span> You Can Apply For
        </h2>

        <div className="overflow-hidden mt-16 relative">
          <motion.div
            className="flex gap-8 flex-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...roles, ...roles].map((role, i) => (
              <div key={i} className="inline-block">
                <div
                  className="w-72 bg-white/90 rounded-3xl p-8 shadow-xl 
                  border border-gray-100 hover:shadow-blue-200/50
                  flex flex-col justify-between h-56 relative"
                >
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">{role.title}</h3>
                    <p className="text-gray-600 mt-3 leading-relaxed line-clamp-2">
                      {role.desc}
                    </p>
                  </div>

                  <div className="flex justify-end">
                  
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ⭐ PERKS SECTION */}
      <section className="mt-24 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Why <span className="text-blue-600">Intern With Us?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {[
            {
              title: "REAL-WORLD EXPERIENCE",
              text: "Apply concepts practically, develop stronger skills, understand industry expectations, solve real challenges, and grow into confident, job-ready professionals.",
            },
            {
              title: "PROFESSIONAL NETWORKING",
              text: "Build valuable connections, gain industry insights, discover opportunities, collaborate effectively, exchange knowledge, and grow with strong professional relationships.",
            },
            {
              title: "RESUME ENHANCEMENT",
              text: "Highlight practical skills, showcase real projects, demonstrate industry readiness, strengthen profiles, and increase chances of securing better career opportunities.",
            },
            {
              title: "TECHNICAL SKILL DEVELOPMENT",
              text: "Strengthen hands-on skills, gain exposure to relevant tools, build real projects, and boost readiness for high-demand tech career roles.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-md border border-blue-100"
            >
              <h4 className="text-xl font-bold text-blue-700 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed text-[15px]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ APPLY CTA */}
      <section className="text-center mt-24">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold text-gray-900">
          Ready To Begin Your Journey?
        </motion.h2>

        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(59,130,246,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenForm(true)}
          className="mt-8 px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg 
          font-semibold rounded-full shadow-lg transition"
        >
          Apply for Internship 🚀
        </motion.button>
      </section>









      {/* ⭐ OPEN FORM MODAL */}
      {openForm && (
        <InternApplyForm
          onClose={() => setOpenForm(false)}
        />
      )}
    </div>
  );
};

export default Interns;
