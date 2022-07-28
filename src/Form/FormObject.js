import React, { useState } from "react";
import style from "./form.module.css";

const FormObject = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(user);
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className={style.formgroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default FormObject;
