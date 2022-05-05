import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/reducers";
import { LoginStyle, Input, Button, Form, Image } from "./styleLogin";
import Logout from "./logout";
import User from "./user";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(changeUser(name));
    history.push("/search");
  };
  let onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <LoginStyle>
        <Form>
          <Image>
            <img
              width="250px"
              decoding="async"
              alt="Pokemon"
              src="https://observatoriodatv.uol.com.br/wp-content/uploads/2016/08/pokemon.jpg"
            />
          </Image>
          <User />
          <Input
            placeholder="Insira um usuário"
            id="name"
            onChange={onChange}
            type="text"
          />
          <Button type="button" onClick={handleLogin}>
            entrar
          </Button>
          <Logout />
        </Form>
      </LoginStyle>
    </>
  );
};
export default Login;
