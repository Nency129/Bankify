import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-start w-screen text-lg">
      <div>
        <img src={logo} alt="logo" width={"250px"} height={"30px"}/>
      </div>
      <div className="flex justify-around w-1/2 mx-5">
        <div>Credit Card</div>
        <div>Loan</div>
        <div>Tax</div>
        <div>Account</div>
      </div>

      <div className="flex justify-end w-full">
        <div className="ms-5">SignIn</div>
        <div className="mx-6">SignUp</div>
      </div>
    </div>
  );
}

export default Navbar;
