import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./RequestDescription.css";
export default function RequestDescription(){
    return (
        <div>
            <TopBar />
            <SideBar />
            <div className="request_description">
                <h2 className="request_title"></h2>
            </div>
            <div className="buttonBackToRequest">
                <button>Back To Requests</button>
            </div>
        </div>

    )
}