
import "./header.css"
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSmall">Read & Create</span>
        <span className="headerTitlesLarge">Blog</span>
      </div>
      <img className="headerImg" src="bgimage.jpeg"/>
    </div>
  )
}
