import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import { useEffect, useState} from "react";
import "./BasicInformation.css";
interface User {
  id: string
  name: string
  email: string
  role: Role
}

type Role = 'STUDENT' | 'DEANERY' | 'ADMINISTRATOR';

export default function BasicInformation() {

  const [user, setUser] = useState<User | null >(null);

  useEffect(function () {

	fetch("http://localhost:8080/users/9999999999")
		.then(res => res.json())
		.then(response => {
			const user  = response
			console.log (response)
      setUser(user)
	});
  
  } )

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
                defaultValue={user?.name}
              />
            </label>
            <label>
              Identification
              <input
                type="text"
                defaultValue={user?.id}
              />
            </label>
            <label>
              Role
              <input
                type="text"
                defaultValue={user?.role}
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
