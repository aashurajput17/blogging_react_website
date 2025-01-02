import "./login.css";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login Here</span>
        <form className="loginForm">
            <label>E-mail</label>
            <input type="text" className="loginInput" placeholder="Enter your email.."/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password"/>
            <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
            <Link className="link" to="/register">Register</Link>
    </div>
  )
}
