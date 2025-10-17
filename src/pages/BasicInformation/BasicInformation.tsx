import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import "./BasicInformation.css";
export default function BasicInformation() {
  return (
    <div>
      <TopBar />
      <SideBar />
      <main className="main-content">
        <div className="profile-title">
          <h1>Perfil de Usuario</h1>
          <p> Información Básica del Usuario</p>
        </div>

        <section className="profile-card">
          <form className="profile-form">
            <label>
              Name
              <input
                type="text"
                placeholder="Example: Nestor Lopez"
                defaultValue="Nestor Lopez"
              />
            </label>
            <label>
              Identification
              <input
                type="text"
                defaultValue="1000099099"
                placeholder="Example: 1000099099"
              />
            </label>
            <label>
              Role
              <input
                type="text"
                defaultValue="Student"
                placeholder="Example: Student"
              />
            </label>
            <label>
              Career
              <input
                type="text"
                defaultValue="Engineering Of Systems"
                placeholder="Example: Engineering Of Systems"
              />
            </label>
            <label>
              Semester
              <input type="text" defaultValue="7" placeholder="Example: 7" />
            </label>
          </form>
        </section>
      </main>
    </div>
  );
}
