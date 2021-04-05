import "./Button.css";
import React, { MouseEventHandler } from "react";
import block from "bem-cn";
import { emptyFunc } from "../../utils";

interface Props {
  text: string,
  htmlType?: 'submit' | 'reset' | 'button',
onClick?: MouseEventHandler<HTMLButtonElement>;
}

const b = block("button");

export const Button: React.FC<Props> = ({ htmlType, text, onClick=emptyFunc }) => <button onClick={onClick} type={htmlType} className={b()} > {text} </button>;
