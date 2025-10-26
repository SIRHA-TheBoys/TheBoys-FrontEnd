import "./AcademicInfoBar.css";
import { User } from "../../types/user";

export default function AcademicInfoBar(user : User) {
  return (
    <div className="student-info-card">
      <div className="student-info-header">
        <h2>{user?.career}</h2>
        <p>PLAN 15</p>
      </div>

      <div className="student-info-details">
        <div>
          <p><strong>ID:</strong> {user?.name}</p>
          <p><strong>CC:</strong> {user?.name}</p>
          <p><strong>Grado:</strong> {user?.name}</p>
          <p><strong>Plan Académico:</strong> {user?.name}</p>
          <p><strong>Programa Académico:</strong> {user?.name}</p>
        </div>

        <div>
          <p><strong>Estado:</strong> {user?.name}</p>
          <p><strong>Promedio acum:</strong> {user?.name}</p>
          <p><strong>Promedio de grado:</strong> {user?.career}</p>
          <p><strong>Situación:</strong> {user?.career}</p>
        </div>

        <div>
          <p><strong>Créditos Plan:</strong> {user?.career}</p>
          <p><strong>Aprobados:</strong> {user?.career}</p>
          <p><strong>Semestre a Cursar:</strong> {user?.career}</p>
          <p><strong>Correo-Campus:</strong> {user?.career}</p>
        </div>
      </div>
    </div>
  );
}
