import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Ensure you have the CSS imported

const Login = ({ setIsAuthenticated, setIsAdmin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "user@gmail.com" && password === "user") {
            setIsAuthenticated(true);
            setIsAdmin(false);
            console.log("User logged in:", { email, password });
            navigate("/AppointmentForm");
        } else if (email === "admin@gmail.com" && password === "admin") {
            setIsAuthenticated(true);
            setIsAdmin(true);
            console.log("Admin logged in:", { email, password });
            navigate("/admin");
        } else {
            console.error("Invalid credentials");
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="login-container">        
            <form className="form-login" onSubmit={handleLogin}>
                <h1 className="login">LOGIN</h1>
                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <svg height={20} viewBox="0 0 32 32" width={20} xmlns="http://www.w3.org/2000/svg">
                        <g id="Layer_3" data-name="Layer 3">
                            <path d="M30.853 13.87a15 15 0 0 0-29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0-1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1-4.158-.759V2.24a1 1 0 0 0-2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zM16 22a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6z" />
                        </g>
                    </svg>
                    <input
                        type="email"
                        className="input"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex-column">
                    <label>Password</label>
                </div>
                <div className="inputForm">
                    <input
                        type="password"
                        className="input"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex-row">
                    <div>
                        <input type="checkbox" />
                        <label>Remember me</label>
                    </div>
                    <span className="span">Forgot password?</span>
                </div>
                <button className="button-submit" type="submit">Log In</button>
                <p className="p">
                    Don’t have an account? <span className="span" onClick={() => navigate('/signup')}>Sign Up</span>
                </p>
            </form>
        </div>
    );
};

export default Login;
