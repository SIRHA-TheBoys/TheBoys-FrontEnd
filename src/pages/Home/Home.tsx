import Notifications from "../../components/Notifications/Notifications";
import "./Home.css";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
export default function Home() {
  return (
    <div>
      <TopBar />
      <SideBar />
      <div className="home">
        <Notifications />
      </div>
    </div>
  );
}