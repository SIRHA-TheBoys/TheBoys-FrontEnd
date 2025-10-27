import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import "./RequestStatistics.css";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface GroupStats {
  name: string;
  percentage: number;
  color: string;
}

export default function RequestStatistics() {
  const [mostRequestedGroups, setMostRequestedGroups] = useState<GroupStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:8080/statistic/mostRequestedGroups");
        if (!res.ok) throw new Error("Error al obtener las estadísticas");

        const data = await res.json();
        console.log("Datos del backend:", data);
        const parsed = data.map((item: any) => ({
          name: item.name,
          percentage: item.count,
          color: "#90EE90",
        }));

        setMostRequestedGroups(parsed);
      } catch (error) {
        console.error("Error al cargar estadísticas:", error);
        alert("No se pudieron cargar las estadísticas");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const approvedRejectedData = {
    labels: ["Approved", "Rejected"],
    datasets: [
      {
        data: [75, 25], 
        backgroundColor: ["#90EE90", "#FF4C4C"],
        borderWidth: 1,
      },
    ],
  };

  if (loading) return <p>Cargando estadísticas...</p>;

  return (
    <>
      <TopBar />
      <SideBar />

      <div className="stats-container">
        <h2 className="title">Statistics</h2>

        {}
        <div className="section">
          <h3 className="subtitle">Most Requested Groups</h3>
          <div className="bar-list">
            {mostRequestedGroups.map((group) => (
              <div key={group.name} className="bar-item">
                <span className="bar-label">{group.name}</span>
                <div className="bar">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${group.percentage}%`,
                      backgroundColor: group.color,
                    }}
                  >
                    <span className="bar-text">{group.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="section">
          <h3 className="subtitle">Percentage Approved and Rejected</h3>
          <div className="pie-chart">
            <Pie data={approvedRejectedData} />
          </div>
        </div>
      </div>
    </>
  );
}
