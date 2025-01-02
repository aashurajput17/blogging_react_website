import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
    <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle"> Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsProfile">
                <img src="profile.jpg"  />
                <label htmlFor="fileInput">
                    <i className="settingsProfileIcon far fa-user-circle"/>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/> 
            </div>
        
        <label>Username</label>
        <input type="text" placeholder="Cassini"></input>
        <label>E-mail</label>
        <input type="email" placeholder="cassini@gmail.com"></input>
        <label>Password</label>
        <input type="password"></input>
        <button className="settingsSubmit">Update</button>
        </form>
    </div>   
    <Sidebar/>
    </div>
  )
}
