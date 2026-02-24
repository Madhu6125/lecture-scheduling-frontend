import { useEffect, useState } from "react";
import { getMyLectures } from "../services/api";
import LectureCard from "../components/LectureCard";

function InstructorDashboard() {
  const [lectures, setLectures] = useState([]);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    loadLectures();
  }, []);

  const loadLectures = async () => {
    try {
      const res = await getMyLectures();
      setLectures(res.data.data);
    } catch {
      setError("Failed to load lectures");
    }
  };

  return (
    <div className="container">
      <h2 className="page-title">
        Welcome, {user?.name}
      </h2>

      {error && <p className="error">{error}</p>}

      {lectures.length === 0 && !error && (
        <p>No lectures assigned yet.</p>
      )}

      <div className="grid">
        {lectures.map((l) => (
          <LectureCard key={l._id} lecture={l} />
        ))}
      </div>
    </div>
  );
}

export default InstructorDashboard;