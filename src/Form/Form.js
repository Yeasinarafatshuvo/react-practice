import React, { useState } from "react";
import style from "./form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    let userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formgroup}>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            required
            onChange={handleNameChange}
          />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div className={style.formgroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
