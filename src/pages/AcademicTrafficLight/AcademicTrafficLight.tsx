import CourseCard from "../../components/CourseCard/CourseCard";
import SideBar from "../../components/SideBar/SideBar";
import AcademicInfoBar from "../../components/AcademicInfoBar/AcademicInfoBar";
import TopBar from "../../components/TopBar/TopBar";
import subjectHook from "../../hooks/subjectHook";
import { Subject } from "../../types/subject";
import "./AcademicTrafficLight.css";
import { userHook } from "../../hooks/userHook";
import PopUpStudentID from "../../components/PopUpStudentID/PopUpStudentID";
import useConsultStudentInfoHook from "../../hooks/consultStudentInfoHook";
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
