import "./Button.css";
import React from "react";
import block from "bem-cn";

interface Props {
  text: string,
  type: any,
 
}

const b = block("button");

export const Button: React.FC<Props> = ({ type, text }) => <button type={type} className={b()} > {text} </button> ;
