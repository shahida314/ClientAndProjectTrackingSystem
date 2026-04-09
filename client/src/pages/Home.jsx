import { Link } from "react-router-dom";
import homeImg from "../assets/home.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">

      {/* 🔶 NAVBAR */}
      <div className="w-full bg-yellow-200 flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-white tracking-widest"></h1>

        {/* Only About Us at right corner */}
        <div className="flex items-center">
          <button className="bg-red-400 px-4 py-1 rounded-md font-semibold shadow">
            About Us
          </button>
        </div>
      </div>

      {/* 🔷 MAIN SECTION */}
      <div className="flex flex-1 items-center justify-between px-16">

        {/* LEFT CONTENT */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome To
          </h1>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Client & Project Tracking System
          </h2>

          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            Easily manage your clients and track project progress in one place.
            This system helps you stay organized and improve productivity.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">
            <Link to="/login">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 shadow">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 shadow">
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={homeImg}
            alt="home"
            className="w-[400px] object-contain"
          />
        </div>

      </div>

    </div>
  );
};

export default Home;
