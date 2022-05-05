import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reducers";
import {UserText} from "./styleLogin"

const User = () => {
  const { name } = useSelector(selectUser);

  return (
    <div>
      <UserText> {name && (`Usuário : ${name && name}`)}</UserText>
    </div>
  );
};
export default User;
