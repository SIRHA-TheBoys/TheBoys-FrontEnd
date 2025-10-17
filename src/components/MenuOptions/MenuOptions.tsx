import { CalendarDays, GraduationCap, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./MenuOptions.css";

const menuItems = [
  { icon: CalendarDays, label: "My schedule", path: "/schedule" },
  {
    icon: GraduationCap,
    label: "Academic Traffic Light",
    path: "/academicTrafficLight",
  },
  { icon: Mail, label: "My Requests", path: "/requests" },
];

export default function MenuOptions() {
  const navigate = useNavigate();

  return (
    <ul>
      {menuItems.map((item, index) => (
        <li
          key={index}
          onClick={() => navigate(item.path)}
          className="menuItems"
        >
          <item.icon className="item" />
          <span className="item-title">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
