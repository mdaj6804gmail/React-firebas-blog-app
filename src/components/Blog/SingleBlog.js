import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ data }) => {
  return (
    <Link to={`../blog/${data.id}`}>
      <Card sx={{ maxWidth: 345, height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.photo}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* {data.discription} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              iste amet beatae labore voluptates officia, molestiae laboriosam
              fugit quisquam? Voluptas.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default SingleBlog;
