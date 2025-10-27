import { User } from "../../types/user"
export default function information(user : User){
    switch (user.role){
        case 'STUDENT':
            return (
            <form className="profile-form">
                <label>
                Name
                <input type="text" value={user?.name} readOnly aria-readonly="true"/>
                </label>
                <label>
                Identification
                <input type="text" value={user?.id} readOnly aria-readonly="true" />
                </label>
                <label>
                Email
                <input type="text" value={user?.email} readOnly aria-readonly="true" />
                </label>
                <label>
                Role
                <input type="text" value={user?.role.toLowerCase()} readOnly aria-readonly="true" />
                </label>
                <label>
                Career
                <input type="text" value={user.career?.toLowerCase()} readOnly aria-readonly="true"/>
                </label>
                <label>
                Semester
                <input type="text" value= {user.semester} readOnly aria-readonly="true"/>
                </label>
          </form>
            );
        case 'ADMINISTRATOR':
            return (
            <form className="profile-form">
                <label>
                Name
                <input type="text" value={user?.name} readOnly aria-readonly="true"/>
                </label>
                <label>
                Identification
                <input type="text" value={user?.id} readOnly aria-readonly="true"/>
                </label>
                <label>
                Email
                <input type="text" value={user?.email} readOnly aria-readonly="true" />
                </label>
                <label>
                Role
                <input type="text" value={user?.role.toLowerCase()} readOnly aria-readonly="true"/>
                </label>
          </form>
            );
          case 'DEANERY':
            return (
            <form className="profile-form">
                <label>
                Name
                <input type="text" value={user?.name} readOnly aria-readonly="true"/>
                </label>
                <label>
                Identification
                <input type="text" value={user?.id} readOnly aria-readonly="true"/>
                </label>
                
                <label>
                Email
                <input type="text" value={user?.email} readOnly aria-readonly="true" />
                </label>

                <label>
                Role
                <input type="text" value={user?.role.toLowerCase()} readOnly aria-readonly="true"/>
                </label>
                <label>
                Career
                <input type="text" value={user.career?.toLowerCase()} readOnly aria-readonly="true"/>
                </label>
                <label>
                Semester
                <input type="text" value= {user.semester} readOnly aria-readonly="true"/>
                </label>
          </form>
            );
    }
}