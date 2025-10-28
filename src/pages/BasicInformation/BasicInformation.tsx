import TopBar from "../../components/Layouts/TopBar/TopBar";
import SideBar from "../../components/Layouts/SideBar/SideBar";
import Information from "../../components/Login/Information/Information";
import "./BasicInformation.css";
import { userHook } from "../../hooks/usersHook/userHook"

export default function BasicInformation() {

  const {user} = userHook();

  return (
    <div>
      <TopBar />
      <SideBar />
      <main className="main-content">
        <div className="profile-title">
          <h1>User Profile</h1>
          <p> Basic User Information </p>
        </div>
        <section className="profile-card">
          <Information {...user} />
        </section>
      </main>
    </div>
  );
}