import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import "./BasicInformation.css";
export default function BasicInformation() {
  return (
    <div>
      <TopBar />
      <SideBar />
      <main className="main-content">
        <div>
          <h1>Perfil de Usuario</h1>
          <p> Información Básica del Usuario</p>
        </div>

        <section className="profile-card">
          <form className="profile-form">
            <label>
              Name
              <input type="text" defaultValue="Example: Nestor Lopez" />
            </label>
            <label>
              Identification
              <input type="text" defaultValue="Example: 1000099099" />
            </label>
            <label>
              Role
              <input type="text" defaultValue="Example: Administrator" />
            </label>
            <label>
              Career
              <input
                type="text"
                defaultValue="Example: Engineering Of Systems"
              />
            </label>
            <label>
              Semester
              <input type="text" defaultValue="Example: 7" />
            </label>
          </form>
        </section>
      </main>
    </div>
  );
}
