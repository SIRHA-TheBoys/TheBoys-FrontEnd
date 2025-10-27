import useRequestNotificationsHook from "../../hooks/usersHook/useRequestNotificationsHook";
import Notification from "../Notifications/Notification";
import "./NotificationsList.css"

export default function NotificationsList() {
    const { requests } = useRequestNotificationsHook();

    if(!requests || requests.length == 0){
        return(
            <div>
                Not notifications yet...
            </div>
        )
    }
    
    return(
        <div className = "notifications-list">
            {requests.slice(-5).map((r) => (
                <Notification groupDestinyId = {r.groupDestinyId} state = {r.state}/>
            ))}
        </div>
    );
}
