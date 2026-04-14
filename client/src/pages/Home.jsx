import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const features = [
  { icon: "🔐", label: "JWT Auth" },
  { icon: "👤", label: "Client CRUD" },
  { icon: "📁", label: "Project Tracking" },
  { icon: "📊", label: "Dashboard" },
];

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7ff] flex flex-col overflow-hidden">

      {/* NAVBAR */}
      <nav
        className="w-full flex justify-between items-center px-10 py-4"
        style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white text-lg">
            ⚡
          </div>
          <span className="text-white text-lg font-medium tracking-wide">TrackProject</span>
        </div>
        <Link to="/about">
          <button className="bg-white/15 border border-white/30 text-white px-5 py-2 rounded-lg text-sm hover:bg-white/25 transition-all duration-200">
            About Us
          </button>
        </Link>
      </nav>

      {/* HERO */}
      <div className="flex flex-1 items-center justify-between px-16 py-14 gap-12">

        {/* LEFT */}
        <div
          className="max-w-xl transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
          }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full mb-5">
            <span
              className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
              style={{ animation: "pulse 1.8s infinite" }}
            ></span>
            MERN Stack Application
          </span>

          {/* Title */}
          <h1 className="text-4xl font-semibold text-indigo-950 leading-snug mb-4">
            Welcome to <br />
            <span className="text-indigo-600">Client & Project</span> <br />
            Tracking System
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            A secure, centralized platform to manage clients, track project progress,
            and organize your workflow — built for freelancers and small teams.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {features.map((f) => (
              <span
                key={f.label}
                className="flex items-center gap-1.5 bg-white border border-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full shadow-sm"
              >
                <span>{f.icon}</span> {f.label}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link to="/login">
              <button
                className="bg-indigo-600 text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all duration-200"
                style={{ boxShadow: "0 4px 14px rgba(79,70,229,0.35)" }}
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-white text-indigo-600 border border-indigo-200 px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-200">
                Register
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-gray-100">
            {[
              { num: "100%", label: "Secure" },
              { num: "CRUD", label: "Full Control" },
              { num: "JWT", label: "Auth Protected" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-semibold text-indigo-600">{s.num}</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wide mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Project Cards */}
        <div
          className="flex flex-col gap-4 w-[280px] transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          {/* Header label */}
          <div className="text-xs text-gray-400 uppercase tracking-widest font-medium px-1">
            Live Project Overview
          </div>

          {/* Project 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center text-base">📁</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">Website Redesign</div>
                <div className="text-[11px] text-gray-400">Due: March 31</div>
              </div>
              <span className="text-[11px] bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full font-medium">
                Ongoing
              </span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-1000"
                style={{ width: visible ? "68%" : "0%" }}
              ></div>
            </div>
            <div className="flex justify-between mt-1.5 text-[11px] text-gray-400">
              <span>Progress</span>
              <span className="text-gray-600 font-medium">68%</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-base">✅</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">Mobile App MVP</div>
                <div className="text-[11px] text-gray-400">Delivered on time</div>
              </div>
              <span className="text-[11px] bg-green-50 text-green-600 border border-green-100 px-2 py-0.5 rounded-full font-medium">
                Completed
              </span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-1000"
                style={{ width: visible ? "100%" : "0%" }}
              ></div>
            </div>
            <div className="flex justify-between mt-1.5 text-[11px] text-gray-400">
              <span>Progress</span>
              <span className="text-gray-600 font-medium">100%</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center text-base">⏳</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">API Integration</div>
                <div className="text-[11px] text-gray-400">Starts next week</div>
              </div>
              <span className="text-[11px] bg-amber-50 text-amber-600 border border-amber-100 px-2 py-0.5 rounded-full font-medium">
                Pending
              </span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                style={{ width: visible ? "10%" : "0%" }}
              ></div>
            </div>
            <div className="flex justify-between mt-1.5 text-[11px] text-gray-400">
              <span>Progress</span>
              <span className="text-gray-600 font-medium">10%</span>
            </div>
          </div>

          {/* Mini Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { val: "3", label: "Projects", color: "text-indigo-600" },
              { val: "1", label: "Active", color: "text-blue-500" },
              { val: "1", label: "Done", color: "text-green-500" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-2.5 text-center">
                <div className={`text-base font-semibold ${s.color}`}>{s.val}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-indigo-950 text-center py-4 text-xs text-white/40">
        © 2026 TrackProject — Client & Project Tracking System | Team CodeNova
      </div>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default Home;