import TopBar from "../../components/TopBar";
import MenuOptions from "../../components/MenuOptions";
import Notifications from "../../components/Notifications";
export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-[1fr_350px] gap-6">
        <MenuOptions />
        <Notifications />
      </div>
    </div>
  );
}
