import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import projectService from "../assets/services/projectService";

const STATUS_STYLES = {
  Pending: {
    badge: "text-[#fcd34d]",
    badgeBg: "rgba(245,158,11,0.15)",
    badgeBorder: "rgba(245,158,11,0.3)",
    dot: "#fcd34d",
    icon: "⏳",
  },
  Ongoing: {
    badge: "text-[#93c5fd]",
    badgeBg: "rgba(59,130,246,0.15)",
    badgeBorder: "rgba(59,130,246,0.3)",
    dot: "#93c5fd",
    icon: "🚀",
  },
  Completed: {
    badge: "text-[#6ee7b7]",
    badgeBg: "rgba(16,185,129,0.15)",
    badgeBorder: "rgba(16,185,129,0.3)",
    dot: "#6ee7b7",
    icon: "✅",
  },
};

const FILTERS = ["All", "Pending", "Ongoing", "Completed"];

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 60);
    const fetchProjects = async () => {
      try {
        const data = await projectService.getProjects();
        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching projects", error);
        setProjects([]);
      }
    };
    fetchProjects();
  }, []);

  const counts = {
    All: projects.length,
    Pending: projects.filter((p) => p.status === "Pending").length,
    Ongoing: projects.filter((p) => p.status === "Ongoing").length,
    Completed: projects.filter((p) => p.status === "Completed").length,
  };

  const filtered = (filter === "All" ? projects : projects.filter((p) => p.status === filter))
    .filter((p) => p.name?.toLowerCase().includes(search.toLowerCase()) || p.clientName?.toLowerCase().includes(search.toLowerCase()));

  const formatDate = (d) =>
    d ? new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "—";

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "linear-gradient(150deg, #064e3b 0%, #065f46 25%, #0c4a6e 55%, #1e1b4b 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimBtn { 0%{background-position:-300% center} 100%{background-position:300% center} }

        .prj-orb { position: fixed; border-radius: 50%; pointer-events: none; z-index: 0; }
        .prj-grid {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .prj-navbar {
          position: sticky; top: 0; z-index: 20;
          background: rgba(6,78,59,0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          animation: slideDown 0.5s ease both;
        }

        .prj-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          backdrop-filter: blur(10px);
          transition: all 0.25s ease;
        }

        .prj-stat-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 16px 20px;
          text-align: center;
          min-width: 72px;
          transition: all 0.2s;
          animation: fadeUp 0.5s ease both;
        }
        .prj-stat-card:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }

        .prj-filter-wrap {
          display: flex; gap: 4px; border-radius: 12px; padding: 4px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          width: fit-content;
        }
        .prj-filter-btn {
          padding: 8px 18px; border-radius: 8px; font-size: 13px; font-weight: 600;
          border: none; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 6px;
          font-family: inherit;
        }
        .prj-filter-active { background: linear-gradient(135deg,#059669,#0ea5e9); color: #fff; }
        .prj-filter-inactive { background: transparent; color: rgba(255,255,255,0.45); }
        .prj-filter-inactive:hover { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.75); }

        .prj-count-pill {
          font-size: 10px; padding: 2px 7px; border-radius: 10px;
          background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.5);
        }

        .prj-search {
          padding: 10px 18px; border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          color: #fff; font-size: 13px; width: 220px;
          outline: none; transition: all 0.22s; backdrop-filter: blur(6px);
          font-family: inherit;
        }
        .prj-search::placeholder { color: rgba(255,255,255,0.35); }
        .prj-search:focus {
          border-color: #10b981; background: rgba(255,255,255,0.12);
          box-shadow: 0 0 0 3px rgba(16,185,129,0.2);
        }

        .prj-th {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.6px; color: rgba(255,255,255,0.3);
          padding: 14px 16px;
          background: rgba(0,0,0,0.15);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .prj-tr {
          display: grid;
          grid-template-columns: 2fr 1.3fr 1fr 1fr auto;
          align-items: center;
          padding: 0 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: background 0.18s;
          animation: fadeUp 0.4s ease both;
        }
        .prj-tr:last-child { border-bottom: none; }
        .prj-tr:hover { background: rgba(255,255,255,0.04); }

        .prj-td { padding: 15px 16px; }

        .prj-review-btn {
          font-size: 12px; font-weight: 700;
          padding: 6px 16px; border-radius: 20px;
          border: 1px solid rgba(16,185,129,0.4);
          background: rgba(16,185,129,0.15);
          color: #6ee7b7; cursor: pointer;
          transition: all 0.2s; font-family: inherit;
        }
        .prj-review-btn:hover {
          background: rgba(16,185,129,0.28);
          border-color: #10b981; color: #a7f3d0;
          transform: translateY(-1px);
        }

        .prj-nav-btn {
          padding: 8px 18px; border-radius: 10px; font-size: 13px; font-weight: 600;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.7);
          cursor: pointer; transition: all 0.2s; font-family: inherit;
        }
        .prj-nav-btn:hover { background: rgba(255,255,255,0.12); color: #fff; border-color: rgba(255,255,255,0.25); }
      `}</style>

      {/* Background */}
      <div className="prj-grid" />
      <div className="prj-orb" style={{ width: 380, height: 380, top: -100, right: -80, background: "radial-gradient(circle,rgba(145, 50, 6, 0.3) 0%,transparent 70%)", animation: "float 9s ease-in-out infinite" }} />
      <div className="prj-orb" style={{ width: 300, height: 300, bottom: -60, left: -60, background: "radial-gradient(circle,rgba(73, 51, 11, 0.22) 0%,transparent 70%)", animation: "float 12s ease-in-out infinite reverse" }} />
      <div className="prj-orb" style={{ width: 200, height: 200, top: "45%", left: "35%", background: "radial-gradient(circle,rgba(59, 28, 8, 0.16) 0%,transparent 70%)", animation: "float 16s ease-in-out infinite" }} />

      {/* NAVBAR */}
      <nav className="prj-navbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,#059669,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚡</div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>TrackProject</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="prj-nav-btn" onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button className="prj-nav-btn" onClick={() => navigate("/clients")}>Clients</button>
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px 48px", position: "relative", zIndex: 10 }}>

        {/* HERO */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, animation: "fadeUp 0.5s ease both" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 14px", borderRadius: 20, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", fontSize: 11, fontWeight: 700, color: "#6ee7b7", marginBottom: 12, letterSpacing: "0.5px" }}>
              📁 PROJECTS
            </div>
            <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 800, margin: "0 0 6px", letterSpacing: "-0.4px", lineHeight: 1.2 }}>
              Manage your <span style={{ color: "#6ee7b7" }}>projects</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 13, margin: 0 }}>Track clients, deadlines, and progress in one place.</p>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            {[
              { label: "Total", count: counts.All, color: "#c4b5fd" },
              { label: "Pending", count: counts.Pending, color: "#fcd34d" },
              { label: "Ongoing", count: counts.Ongoing, color: "#93c5fd" },
              { label: "Done", count: counts.Completed, color: "#6ee7b7" },
            ].map(({ label, count, color }, i) => (
              <div key={label} className="prj-stat-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div style={{ color, fontSize: 24, fontWeight: 800, letterSpacing: "-1px" }}>{count}</div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, marginTop: 4, fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FILTERS + SEARCH */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, animation: "fadeUp 0.5s ease 0.1s both" }}>
          <div className="prj-filter-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`prj-filter-btn ${filter === f ? "prj-filter-active" : "prj-filter-inactive"}`}
              >
                {f}
                <span className="prj-count-pill">{counts[f]}</span>
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="prj-search"
          />
        </div>

        {/* TABLE */}
        <div className="prj-card" style={{ overflow: "hidden", animation: "fadeUp 0.5s ease 0.2s both" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1.3fr 1fr 1fr auto" }}>
            {["Project Name", "Client", "Deadline", "Status", "Action"].map((h, i) => (
              <div key={h} className="prj-th" style={{ textAlign: i === 4 ? "right" : "left" }}>{h}</div>
            ))}
          </div>

          {/* Rows */}
          {filtered.length > 0 ? (
            filtered.map((project, idx) => {
              const s = STATUS_STYLES[project.status] || STATUS_STYLES.Pending;
              return (
                <div key={project._id || idx} className="prj-tr" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="prj-td" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: s.dot, flexShrink: 0, display: "inline-block", boxShadow: `0 0 6px ${s.dot}` }} />
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>{project.name}</span>
                  </div>
                  <div className="prj-td" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{project.clientName}</div>
                  <div className="prj-td" style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>{formatDate(project.deadline)}</div>
                  <div className="prj-td">
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                      background: s.badgeBg, border: `1px solid ${s.badgeBorder}`, color: s.badge.replace("text-[", "").replace("]", ""),
                    }}>
                      <span style={{ fontSize: 11 }}>{s.icon}</span>
                      {project.status}
                    </span>
                  </div>
                  <div className="prj-td" style={{ textAlign: "right" }}>
                    <button className="prj-review-btn" onClick={() => navigate(`/review/${project._id}`)}>
                      Review →
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ padding: "60px 0", textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: 13 }}>
              No projects found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;