import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className="sidebarImg" src="about.jpg"></img>
        <p>A simple bio with concrete facts goes a long way. Tell us who you are, where you're from (if it matters to you), where you live, and what you do.</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Categories</span>
      <ul className="sidebarList">
        <li className="sidebarlistItem">Life</li>
        <li className="sidebarlistItem">Music</li>
        <li className="sidebarlistItem">Style</li>
        <li className="sidebarlistItem">Sport</li>
        <li className="sidebarlistItem">Tech</li>
        <li className="sidebarlistItem">Cinema</li>
        </ul>      
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
      <div className="sidebarSocial">
            <i class="sidebarIcon fa-brands fa-square-facebook"></i>
            <i class="sidebarIcon fa-brands fa-square-instagram"></i>
            <i class="sidebarIcon fa-brands fa-square-x-twitter"></i>
            <i class="sidebarIcon fa-brands fa-youtube"></i>
      </div>
      </div>

    </div>
  )
}
