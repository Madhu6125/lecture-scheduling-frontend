import { deleteLecture } from "../services/api";   // ✅ ADDED

function LectureCard({ lecture }) {

  const user = JSON.parse(localStorage.getItem("user"));   // ✅ ADDED

  const handleDelete = async () => {                        // ✅ ADDED
    if (!window.confirm("Are you sure you want to delete this lecture?")) return;

    try {
      await deleteLecture(lecture._id);
      window.location.reload();
    } catch {
      alert("Failed to delete lecture");
    }
  };

  return (
    <div className="card lecture-card">
      <div className="lecture-badge">Lecture</div>

      <h4 className="lecture-title">
        {lecture.course?.name}
      </h4>

      {lecture.instructor && (
        <p className="lecture-meta">
          <strong>Instructor:</strong> {lecture.instructor.name}
        </p>
      )}

      <p className="lecture-meta">
        <strong>Date:</strong>{" "}
        {new Date(lecture.date).toDateString()}
      </p>

      {/* ✅ ADDED DELETE BUTTON (ADMIN ONLY) */}
      {user?.role === "admin" && (
        <button
          onClick={handleDelete}
          style={{
            marginTop: "10px",
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Delete Lecture
        </button>
      )}
    </div>
  );
}

export default LectureCard;