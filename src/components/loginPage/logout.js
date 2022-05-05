import React from "react";
import { Button } from "./styleLogin";

   import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Button onClick={handleLogout}> sair </Button>
    </div>
  );
};
export default Logout;
