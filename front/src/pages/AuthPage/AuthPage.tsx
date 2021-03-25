import block from "bem-cn";
import React from "react";
import "./AuthPage.css";

interface Props {}

const b = block("auth-page");

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h3 className={b("title")}>Авторизация</h3>
      <form action="#" className={b("form")}>
        <input required placeholder="login" type="text" className={b("input").mix("login")} />
        <input required placeholder="password" type="password" className={b("input").mix("password")} />
        <input type="submit" className={b("submit")} />
      </form>
    </div>
  );
};
