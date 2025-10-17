import { User } from "../../types/user"
export default function information(user : User){
    switch (user.role){
        case 'STUDENT':
            return (
            <form className="profile-form">
                <label>
                Name
                <input type="text" defaultValue={user?.name} />
                </label>
                <label>
                Identification
                <input type="text" defaultValue={user?.id} />
                </label>
                <label>
                Role
                <input type="text" defaultValue={user?.role.toLowerCase()} />
                </label>
                <label>
                Career
                <input type="text" defaultValue={user.career} />
                </label>
                <label>
                Semester
                <input type="text" defaultValue= {user.semester}/>
                </label>
          </form>
            );
        case 'ADMINISTRATOR':
            return (
            <form className="profile-form">
                <label>
                Name
                <input type="text" defaultValue={user?.name} />
                </label>
                <label>
                Identification
                <input type="text" defaultValue={user?.id} />
                </label>
                <label>
                Role
                <input type="text" defaultValue={user?.role.toLowerCase()} />
                </label>
          </form>
            );
          case 'DEANERY':
            return (
            <form className="profile-form">
                <label>
                Name
                <input type="text" defaultValue={user?.name} />
                </label>
                <label>
                Identification
                <input type="text" defaultValue={user?.id} />
                </label>
                <label>
                Role
                <input type="text" defaultValue={user?.role.toLowerCase()} />
                </label>
                <label>
                Career
                <input type="text" defaultValue={user.career} />
                </label>
                <label>
                Semester
                <input type="text" defaultValue= {user.semester}/>
                </label>
          </form>
            );
    }
}