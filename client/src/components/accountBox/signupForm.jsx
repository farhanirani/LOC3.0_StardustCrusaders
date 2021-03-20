import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [fname, setFname] = useState("");
  const [confirmPassword, setCpass] = useState("");

  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (
        username.trim().length &&
        confirmPassword.trim().length &&
        fname.trim().length &&
        password.trim().length
      ) {
        const data = {
          userName: username,
          password,
          confirmPassword,
          firstname: fname,
        };
        const reguser = await axios.post("/api/users/register", data);
        console.log(reguser);
        alert("Success, now you can login");
        window.location.reload();
      } else {
        alert("Please fill all the fields");
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Full Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setCpass(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={submit} type="submit">
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
