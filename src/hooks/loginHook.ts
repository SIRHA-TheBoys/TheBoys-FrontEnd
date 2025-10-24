import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function loginHook(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Plese complete all fields");
            setEmail("");
            setPassword("");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, role }),
        });

        const userData = await response.json();

        if (!response.ok) {
            alert(userData.message || "Invalid credentials");
            return;
        }
        localStorage.setItem("user", JSON.stringify(userData))
        alert("Login succesful!");
        navigate("/home");
        } catch (error) {
            console.log(error);
            alert(":(");
        }
    };

    return {email, password, role, setEmail, setPassword, handleLogin, setRole};
}