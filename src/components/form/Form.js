import React, { useState } from "react";
import { Button } from "@mui/material";
import { Create_User } from "../../firebase/firebase";

const Form = () => {
  const [filedata, setfiledata] = useState();
  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [loading, setloading] = useState();
  const submit = (e) => {
    setloading(true);
    if (!filedata) return;
    e.preventDefault();
    console.log(loading);
    Create_User(name, email, password, filedata)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));

    setloading(false);
  };
  return (
    <div>
      <form onSubmit={submit} style={{ color: "black" }}>
        <input type="file" onChange={(e) => setfiledata(e.target.files[0])} />{" "}
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          name="Name"
          placeholder="name"
          value={name}
        />
        <br /> <br />
        <input
          type="text"
          onChange={(e) => setemail(e.target.value)}
          name="email"
          placeholder="Email"
          value={email}
        />
        <br /> <br />
        <input
          type="text"
          onChange={(e) => setpassword(e.target.value)}
          name="password"
          placeholder="password"
          value={password}
        />
        <br /> <br />
        {loading ? (
       
          <Button type="submit" variant="contained">
            loading.....
          </Button>
        ) : (
          <Button type="submit" variant="contained">
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};

export default Form;
