import { CalendarDays, GraduationCap, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
          className="flex items-center gap-4 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl px-4 py-3 shadow-sm transition"
        >
          <item.icon className="w-6 h-6 text-gray-700" />
          <span className="text-gray-800 font-medium">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
