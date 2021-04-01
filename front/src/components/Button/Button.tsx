import "./Button.css";
import React, { MouseEventHandler } from "react";
import block from "bem-cn";

interface Props {
  text: string,
  htmlType?: 'submit' | 'reset' | 'button',
onClick?: MouseEventHandler<HTMLButtonElement>;
}

const b = block("button");

export const Button: React.FC<Props> = ({ htmlType, text }) => <button type={htmlType} className={b()} > {text} </button>;
