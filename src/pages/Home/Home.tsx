import TopBar from "../../components/TopBar";
import MenuOptions from "../../components/MenuOptions/MenuOptions";
import Notifications from "../../components/Notifications/Notifications";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="home">
        <MenuOptions />
        <Notifications />
      </div>
    </div>
  );
}
