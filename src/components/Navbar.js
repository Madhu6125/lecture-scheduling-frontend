import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo">Lecture Scheduler</div>

      <div className="nav-links">
        {!user && <Link to="/">Login</Link>}

        {user?.role === "admin" && <Link to="/admin">Admin</Link>}

        {user?.role === "instructor" && (
          <Link to="/instructor">My Lectures</Link>
        )}

        {user && (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;