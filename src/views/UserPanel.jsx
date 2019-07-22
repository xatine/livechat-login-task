import React, { useContext } from "react";
import { AuthContext } from "context";
import { Redirect } from "react-router-dom";
import { Header, Button } from "components";

const UserPanel = () => {
  const { logout, loading, token } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (!token) return <Redirect to="/" />;
  return (
    <div>
      <Header text="Login Successful" />
      <Button text="Logout" onClick={logout} />
    </div>
  );
};

export default UserPanel;
