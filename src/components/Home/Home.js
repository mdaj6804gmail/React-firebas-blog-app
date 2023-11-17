/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

import { get_User } from "../../firebase/config.firebas";
import { Avatar } from "@mui/material";

const Home = () => {
  const [userData, setuserData] = useState();

  useEffect(() => {
    get_User("users")
      .then((user) => {
        console.log(Object.values(user));
        setuserData(Object.values(user));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Home">
      <h1>Home Page</h1>

      {userData &&
        userData.map((x, index) => {
          return (
            <div key={index} style={{ border: "solid", width: "content" }}>
              <img width={200} src={x.photo} alt="imagea" />
              <h1>
                email:[ {index + 1} ]{x.email + ""}
              </h1>
              <h1> name :{x.name}</h1>
              <p>id : {x.id}</p>
            </div>
          );
        })}
      {/* <Button onClick={dataget} variant="contained" color="secondary">
        data get
      </Button> */}
      <Blog />
    </div>
  );
};

export default Home;
// 01302898309
