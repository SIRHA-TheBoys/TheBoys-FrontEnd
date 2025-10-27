import "./Home.css";
import TopBar from "../../components/Layouts/TopBar/TopBar";
import HomeComponent from "../../components/HomeComponents/HomeComponent/HomeComponent"
export default function Home() {
  return (
    <div>
      <TopBar />
      <HomeComponent />
    </div>
  );
}