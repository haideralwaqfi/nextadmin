import React from "react";
import styles from "../ui/login/login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
