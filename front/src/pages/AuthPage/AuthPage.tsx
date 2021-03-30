import block from "bem-cn";
import React from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import "./AuthPage.css";

interface Props {}

const b = block("auth-page");

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h3 className={b("title")}>Авторизация</h3>
      <form action="#" className={b("form")}>
        <Input required={true} placeholder={'login'} type={'text'} mixClass={'login'}/>
        <Input required={true} placeholder={'password'} type={'password'} mixClass={'password'}/>
        <Button type={"submit"} text={'Войти'} /> 
      </form>
    </div>
  );
};
