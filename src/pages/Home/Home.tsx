import TopBar from "../../components/TopBar";
import MenuOptions from "../../components/MenuOptions";

export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-[1fr_350px] gap-6">
        <MenuOptions />
      </div>
    </div>
  );
}
