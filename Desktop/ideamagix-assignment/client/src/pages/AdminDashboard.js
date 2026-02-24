import { useEffect, useState } from "react";
import {
  getCourses,
  getUsers,
  getLectures,
  assignLecture,
} from "../services/api";
import LectureCard from "../components/LectureCard";

function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [lectures, setLectures] = useState([]);

  const [courseId, setCourseId] = useState("");
  const [instructorId, setInstructorId] = useState("");
  const [date, setDate] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const c = await getCourses();
      const u = await getUsers();
      const l = await getLectures();

      setCourses(c.data.data);
      setInstructors(
        u.data.data.filter((x) => x.role === "instructor")
      );
      setLectures(l.data.data);
    } catch {
      setError("Failed to load admin data");
    }
  };

  const handleAssign = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await assignLecture({
        course: courseId,
        instructor: instructorId,
        date,
      });

      setSuccess("Lecture assigned successfully ✅");
      setCourseId("");
      setInstructorId("");
      setDate("");
      loadData();
    } catch {
      setError("Assignment failed");
    }
  };

  return (
    <div className="container">
      <h2 className="page-title">Admin Dashboard</h2>

      <div className="form-card">
        <h3>Assign Lecture</h3>

        <form onSubmit={handleAssign}>
          <select value={courseId} onChange={(e) => setCourseId(e.target.value)} required>
            <option value="">Select Course</option>
            {courses.map((c) => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>

          <select value={instructorId} onChange={(e) => setInstructorId(e.target.value)} required>
            <option value="">Select Instructor</option>
            {instructors.map((i) => (
              <option key={i._id} value={i._id}>{i.name}</option>
            ))}
          </select>

          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <button type="submit">Assign Lecture</button>
        </form>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>

      <h3 className="section-title">All Assigned Lectures</h3>

      <div className="grid">
        {lectures.map((l) => (
          <LectureCard key={l._id} lecture={l} />
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;