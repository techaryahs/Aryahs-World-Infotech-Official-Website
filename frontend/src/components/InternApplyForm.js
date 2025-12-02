import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const InternApplyForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [degree, setDegree] = useState("");
  const [graduation, setGraduation] = useState("");
  const [location, setLocation] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  // -------------------------------------------------------
  // HANDLE SUBMIT
  // -------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);   // START LOADING

    try {
      let resumePath = "";

      // Resume Upload
      if (resume) {
        const resumeData = new FormData();
        resumeData.append("resume", resume);
        resumeData.append("fullName", name);

        const uploadRes = await fetch("http://localhost:5000/uploads", {
          method: "POST",
          body: resumeData,
        });

        const uploadJson = await uploadRes.json();

        if (uploadRes.ok) {
          resumePath = uploadJson.fileId;
        } else {
          alert("Resume upload failed!");
          setLoading(false);
          return;
        }
      }

      // Submit Main Form
      const formData = new FormData();
      formData.append("fullName", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("degree", degree);
      formData.append("graduationYear", graduation);
      formData.append("location", location);
      formData.append("role", role);
      formData.append("resume", resumePath);

      const res = await fetch("http://localhost:5000/api/intern/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message);

    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    }

    setLoading(false);  // STOP LOADING
  };


  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-start md:items-center z-[9999] p-4 overflow-y-auto pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 md:p-12 border border-gray-200"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white shadow-lg rounded-full p-2 text-gray-600 hover:text-black transition"
        >
          <IoClose size={26} />
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0c3b70]">
            Apply for Internship
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Fill the form below and our HR team will connect with you.
          </p>
        </div>

        {/* FORM */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Degree */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Degree</label>
            <input
              type="text"
              placeholder="B.Tech / BCA / MCA"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Graduation */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">
              Graduation Year
            </label>
            <input
              type="text"
              placeholder="2024 / 2025"
              value={graduation}
              onChange={(e) => setGraduation(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Location</label>
            <input
              type="text"
              placeholder="Your city"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Role */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Choose a role</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>AI / ML</option>
              <option>Cybersecurity</option>
              <option>Data Analytics</option>
              <option>UI/UX Designer</option>
            </select>
          </div>

          {/* Resume Upload */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">
              Upload Resume (PDF)
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setResume(e.target.files[0])}
              className="w-full p-3 rounded-lg border border-gray-400 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <motion.button
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.97 } : {}}
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-lg font-semibold text-white rounded-xl 
              bg-gradient-to-r from-blue-600 to-blue-800 shadow-xl transition-all
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </div>
              ) : (
                "Submit Application"
              )}
            </motion.button>

          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default InternApplyForm;
