import { getAuth } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
      const auth = getAuth();
      const navigate = useNavigate();
     function onLogout() {
       auth.signOut();
       navigate("/");
     }
  return (
    <>
      <p
        onClick={onLogout}
        className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out cursor-pointer"
      >
        Sign Out
      </p>
    </>
  );
};

export default MyAccount;
