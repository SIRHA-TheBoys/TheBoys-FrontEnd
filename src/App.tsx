import Login from "./pages/LogIn/Login";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Request from "./pages/Request/Request";
import AcademicTrafficLight from "./pages/AcademicTrafficLight/AcademicTrafficLight";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicInformation from "./pages/BasicInformation/BasicInformation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/requests" element={<Request />} />
        <Route path="/basicInformation" element={<BasicInformation />} />
        <Route path="/academicTrafficLight" element={<AcademicTrafficLight />} />
      </Routes>
    </Router>
  );
}

export default App;