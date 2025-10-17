import "./Login.css";
import campus from "../../assets/eci-campus.png";
import Form from "../../components/Form/Form";

function Login() {
  return (
    <div className="login-page">
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
