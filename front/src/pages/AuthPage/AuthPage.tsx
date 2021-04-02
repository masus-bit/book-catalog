import block from "bem-cn";
import React from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import "./AuthPage.css";
import {AuthForm} from '../../components/AuthForm/AuthForm'
interface Props {}

const b = block("auth-page");

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <AuthForm />
    </div>
  );
};
