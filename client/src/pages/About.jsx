import { Link } from "react-router-dom";

const teamMembers = [
    { name: "Jhuma Chanda", id: "231-115-178", initials: "JC", color: "bg-indigo-100 text-indigo-700" },
    { name: "Shahida Rahman Akhi", id: "231-115-184", initials: "SA", color: "bg-purple-100 text-purple-700" },
];

const features = [
    { icon: "🔐", title: "Secure Authentication", desc: "JWT-based login & registration with bcrypt password encryption." },
    { icon: "👤", title: "Client Management", desc: "Add, edit, delete, and view all clients in one organized place." },
    { icon: "📁", title: "Project Tracking", desc: "Create projects, assign to clients, and track Pending / Ongoing / Completed status." },
    { icon: "📊", title: "Dashboard Overview", desc: "See total clients, active and completed projects at a glance." },
    { icon: "🔍", title: "Search & Filter", desc: "Quickly find clients or projects by name or filter by status." },
    { icon: "☁️", title: "Cloud Storage", desc: "Profile images stored securely via Cloudinary." },
];

const About = () => {
    return (
        <div className="min-h-screen bg-[#f8f7ff] flex flex-col">
            {/* Smooth Fade-in Animations */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-up { animation: fadeInUp 0.6s ease-out forwards; }
                .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
                .feature-card:hover { transform: translateY(-5px); transition: all 0.3s ease; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
            `}</style>

            {/* NAVBAR */}
            <nav className="w-full flex justify-between items-center px-10 py-4"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}>
                <div className="flex items-center gap-3 animate-fade-in">
                    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white text-lg">⚡</div>
                    <span className="text-white text-lg font-medium tracking-wide">TrackPro</span>
                </div>
                <Link to="/">
                    <button className="bg-white/15 border border-white/30 text-white px-5 py-2 rounded-lg text-sm hover:bg-white/25 transition">
                        ← Home
                    </button>
                </Link>
            </nav>

            {/* HERO BANNER */}
            <div className="text-center py-14 px-6 animate-fade-in" style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}>
                <h1 className="text-3xl font-medium text-white mb-3">About Our Project</h1>
                <p className="text-indigo-200 text-sm max-w-xl mx-auto leading-relaxed">
                    A full-stack MERN application built to help freelancers and teams manage clients
                    and track projects efficiently — all from one secure platform.
                </p>
            </div>

            <div className="max-w-4xl mx-auto w-full px-6 py-12 flex flex-col gap-12">

                {/* PROJECT INFO */}
                <section className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-xl font-medium text-indigo-950 mb-2">What is TrackPro?</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        The <span className="text-indigo-600 font-medium">Client & Project Tracking System</span> is a web-based
                        management tool designed to solve the common problem of manually managing client
                        data and project progress. It provides a centralized, secure platform where users
                        can organize clients, assign projects, and monitor their status — all in real time.
                    </p>
                    <div className="mt-5 grid grid-cols-3 gap-4">
                        {[
                            { label: "Technology", value: "MERN Stack" },
                            { label: "Course", value: "CSE 300 & 323" },
                            { label: "University", value: "Metropolitan University" },
                        ].map((item, idx) => (
                            <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-4 feature-card">
                                <div className="text-[11px] text-gray-400 uppercase tracking-wide mb-1">{item.label}</div>
                                <div className="text-sm font-medium text-indigo-700">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FEATURES */}
                <section className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="text-xl font-medium text-indigo-950 mb-5">Core Features</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {features.map((f, idx) => (
                            <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-4 flex gap-3 feature-card">
                                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">{f.icon}</div>
                                <div>
                                    <div className="text-sm font-medium text-gray-800 mb-1">{f.title}</div>
                                    <div className="text-xs text-gray-500 leading-relaxed">{f.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TECH STACK */}
                <section className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
                    <h2 className="text-xl font-medium text-indigo-950 mb-5">Technology Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "bcrypt", "Tailwind CSS", "Cloudinary", "Vercel"].map((tech) => (
                            <span key={tech} className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* TEAM */}
                <section className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
                    <h2 className="text-xl font-medium text-indigo-950 mb-5">Meet the Team</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {teamMembers.map((m) => (
                            <div key={m.id} className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-4 feature-card">
                                <div className={`w-12 h-12 rounded-full ${m.color} flex items-center justify-center text-sm font-medium flex-shrink-0`}>
                                    {m.initials}
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-800">{m.name}</div>
                                    <div className="text-xs text-gray-400 mt-0.5">ID: {m.id}</div>
                                    <div className="text-xs text-gray-400">Section: E</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 feature-card">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm">👨‍🏫</div>
                        <div>
                            <div className="text-xs text-gray-400 mb-0.5">Supervised by</div>
                            <div className="text-sm font-medium text-gray-800">Abu Jafar Md. Jakaria</div>
                            <div className="text-xs text-gray-400">Senior Lecturer, Dept. of CSE</div>
                        </div>
                    </div>
                </section>
            </div>

            {/* FOOTER */}
            <div className="bg-indigo-950 text-center py-4 text-xs text-white/40 mt-auto">
                © 2026 TrackPro — Client & Project Tracking System | Team CodeNova
            </div>
        </div>
    );
};

export default About;