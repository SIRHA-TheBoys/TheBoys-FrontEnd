import "./Login.css";
import campus from "../../assets/eci-campus.png";
import TopBar from "../../components/TopBar";
import Form from "../../components/Form";

function Login() {
  return (
    <div className="login-page">
      <TopBar />
      <div className="login-container">
        <div className="login-image">
          <img src={campus} alt="Campus ECI" />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Login;
