import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-500 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>

      <ul className="space-y-4">
        

        <li>
          <Link to="/clients" className="block hover:bg-slate-700 p-2 rounded">
            Manage Clients
          </Link>
        </li>

        <li>
          <Link to="/projects" className="block hover:bg-slate-700 p-2 rounded">
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;