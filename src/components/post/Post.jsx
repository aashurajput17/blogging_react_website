import "./post.css";
export default function Post() {
  return (
    <div className="Post">
        <img className="postImg" src="post1.jpg" alt="">
        </img>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle"> 
            hi this is Aashu's Blog</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
           </div>
           <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Labore soluta pariatur praesentium possimus, modi illum! 
            Quia officia aut, vero dolor consequuntur sed itaque incidunt,
             veniam ut labore dolorem cum ratione.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Labore soluta pariatur praesentium possimus, modi illum! 
            Quia officia aut, vero dolor consequuntur sed itaque incidunt,
             veniam ut labore dolorem cum ratione.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Labore soluta pariatur praesentium possimus, modi illum! 
            Quia officia aut, vero dolor consequuntur sed itaque incidunt,
             veniam ut labore dolorem cum ratione.
           </p>
        </div>
  )
}
