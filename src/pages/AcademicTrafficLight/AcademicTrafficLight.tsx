import CourseCard from "../../components/AcademicTrafficLight/CourseCard/CourseCard";
import SideBar from "../../components/Layouts/SideBar/SideBar";
import AcademicInfoBar from "../../components/AcademicTrafficLight/AcademicInfoBar/AcademicInfoBar";
import TopBar from "../../components/Layouts/TopBar/TopBar";
import subjectHook from "../../hooks/studentHooks/subjectHook";
import { Subject } from "../../types/subject";
import "./AcademicTrafficLight.css";
import { userHook } from "../../hooks/usersHook/userHook";
import PopUpStudentID from "../../components/PopUps/PopUpStudentID/PopUpStudentID";
import useConsultStudentInfoHook from "../../hooks/studentHooks/consultStudentInfoHook";
import { useState } from "react";

export default function AcademicTrafficLight() {

  const { subjects } = subjectHook();
  const { user, role } = userHook();
  const isAdmin = role === "administrator";
  const [consultedStudentId, setConsultedStudentId] = useState("");
  const { student: consultedStudent } = useConsultStudentInfoHook(consultedStudentId);

  const semesters = subjects.reduce<Record<number, Subject[]>>((acc, subject) => {
    const semester = subject.semester || 1;
    if (!acc[semester]) acc[semester] = [];
    acc[semester].push(subject);
    return acc;
  }, {});

  return (
    <div className="layout">
      <TopBar />
      <div className="main">
        <SideBar />
        <div className="content">
          { isAdmin && (
            <PopUpStudentID
              name="Consult Student Academic Traffic Light"
              onSubmit={(id) => setConsultedStudentId(id)}
            />
          )}
          <div>
            <AcademicInfoBar {...(consultedStudent ?? user)} />
          </div>
          <div>
          </div>
          <div className="semesters">
            {Object.entries(semesters).map(([semester, subjectsInSemester]) => (
              <div key={semester} className="semester">
                <h3>Semestre {semester}</h3>
                {subjectsInSemester.map((subject) => (
                  <CourseCard
                    key={subject.code}
                    name={subject.name}
                    credits={subject.credits}
                    status={subject.status}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
