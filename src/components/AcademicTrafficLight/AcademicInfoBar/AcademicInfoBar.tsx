import "./AcademicInfoBar.css";
import { User } from "../../../types/user";

export default function AcademicInfoBar(user: Readonly<User>) {
  return (
    <div className="student-info-card">
      <div className="student-info-header">
        <h2>PLAN 15</h2>
        <h2>{user?.faculty}</h2>
      </div>

      <div className="student-info-details">
        <div>
          <p><strong>ID:</strong> {user?.id}</p>
          <p><strong>Grado:</strong> Pregrado</p>
          <p><strong>Plan Académico:</strong> 15</p>
          <p><strong>Programa Académico:</strong> {user?.career}</p>
        </div>

        <div>
          <p><strong>Estado:</strong> Activo </p>
          <p><strong>Promedio acum:</strong> {user.studyPlan?.average}</p>
          <p><strong>Promedio de grado:</strong> {user.studyPlan?.average}</p>
          <p><strong>Situación:</strong> Regular</p>
        </div>

        <div>
          <p><strong>Créditos Plan:</strong> 139</p>
          <p><strong>Aprobados:</strong> FFF</p>
          <p><strong>Semestre Cursando:</strong> {user?.semester}</p>
          <p><strong>Correo-Campus:</strong> {user?.email}</p>
        </div>
      </div>
    </div>
  );
}
