import React from "react";
import { BlogData } from "../assets/data";
import SingleBlog from "./SingleBlog";
import {Box} from "@mui/material";
const Blog = () => {
  return (
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"5px"}}>
      {BlogData.map((x) => (
        <SingleBlog key={x.id} data={x} />
      ))}
    </Box>
  );
};

export default Blog;
