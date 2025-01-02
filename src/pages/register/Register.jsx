import "./register.css";
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Login Here</span>
        <form className="registerForm">
            <label>E-mail</label>
            <input type="text" 
            className="registerInput" 
            placeholder="Enter your email.."/>

            <label>Username</label>
            <input type="text" 
            className="registerInput" 
            placeholder="Enter your username.."/>
            
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password"/>
            <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>

            <Link className="link" to="/login">Login</Link>

    </div>
  )
}
