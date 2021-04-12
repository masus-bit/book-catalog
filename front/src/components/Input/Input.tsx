import "./Input.css";
import block from "bem-cn";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { BaseComponentProps } from "../../types/base";
import { emptyFunc } from "../../utils";

interface Props extends BaseComponentProps {
  required?: Boolean;
  placeholder?: string;
  htmlType: string;
  label?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
}

const b = block("input");

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      value = "",
      name,
      required = false,
      placeholder = "",
      htmlType = "",
      className = "",
      defaultValue = "OLEG",
      onChange = emptyFunc,
      error = "",
      disabled = false,
      label = "",
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState<string>(defaultValue);
    const handlerChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      event.preventDefault();
      setCurrentValue(event.target.value);
      onChange(event);
    };
    useEffect(() => {
      setCurrentValue(value);
    }, [value]);
    return (
      <div className={b({}).mix(className)}>
        <div className={b("container")}>
          {!!label && <label className={b("label")}>{label}</label>}
          <input
            ref={ref}
            value={currentValue}
            name={name}
            onChange={handlerChange}
            disabled={disabled}
            required
            placeholder={placeholder}
            type={htmlType}
            className={b("input")}
          />
        </div>
        {!!error && <p className={b("error")}>{error}</p>}
      </div>
    );
  }
);
