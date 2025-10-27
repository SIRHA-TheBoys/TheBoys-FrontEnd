import Notification from "../Notifications/Notification";
import useRequestHook  from "../../hooks/requestHook"
import "./NotificationsList.css"

export default function NotificationsList() {
    const { requests } = useRequestHook();

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
