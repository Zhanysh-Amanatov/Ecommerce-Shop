import React from "react";
import "./SignInSignUp.scss";
import { FaRegUserCircle } from "react-icons/fa";

const SignInSignUp = () => {
  return (
    <div className="signIn_SignUp">
      <FaRegUserCircle />
      <p>Sign in|Sign up</p>
    </div>
  );
};

export default SignInSignUp;
