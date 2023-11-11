import React from "react";
import { useParams,} from "react-router-dom";
import { BlogData } from "../assets/data";
import imageC from "../assets/image/Profile_image.png";

const SinglePageBlog = () => {
  const param = useParams();
  const blog = BlogData.find((x) => x.id === Number(param.id));
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <img style={{width:"400px"}} src={imageC} alt="imageq" />
      <h1 style={{margin:"20px 0"}}>{blog.title}</h1>
      <p>{blog.discription}</p>
    </div>
  );
};

export default SinglePageBlog;
