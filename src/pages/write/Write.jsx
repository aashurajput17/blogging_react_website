import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="singlepost.png" alt=""></img>
        <form className="writeForm">
        <div className="writeformGroup">
            <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeformGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText">
            </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
        </form>


    </div>
  )
}
