import "./SelectSemester.css";

export default function SelectSemester() {
  return (
    <div className="select-semester">
      <h3 className="select-label">Select semester</h3>

      <select className="select-dropdown" defaultValue="">
        <option value="" disabled>
        </option>
        <option value="2024-1">2025-2</option>
        <option value="2024-2">2025-1</option>
        <option value="2025-1">2024-2</option>
      </select>
    </div>
  );
}
