import "./CourseCard.css";

interface CourseCardProps {
  name: string;
  credits: number;
  status?: "APPROVED" | "INPROGRESS" | "REPROVED" | "PENDING";
}

export default function CourseCard({name, credits, status = "APPROVED",
}: CourseCardProps) {
  return (
    <div className={`course-card course-card--${status}`}>
      <h4 className="course-card__name">{name}</h4>
      <p className="course-card__credits">Créditos: {credits}</p>
    </div>
  );
}