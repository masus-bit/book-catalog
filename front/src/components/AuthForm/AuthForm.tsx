import React, { MouseEventHandler } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AuthForm.css";
import { AppState } from "../../store/app/types";
import block from "bem-cn";
import { Auth } from "../../types/auth";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { RootState } from "../../store/types";
import { appActions } from "../../store/app/actions";

interface StateProps {
  loading: boolean;
  errorText: string;
}
interface DispatchProps extends AppState.ActionThunk {}
interface OwnProps {}

type Props = OwnProps & StateProps & DispatchProps;
const b = block("auth-form");

const schema: Yup.SchemaOf<Auth.Login.Params> = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

const AuthFormPresenter: React.FC<Props> = ({ loading, errorText, appLogin }) => {
  const { errors, values, submitForm, handleChange } = useFormik<Auth.Login.Params>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appLogin(fields);
    },
  });

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    submitForm().catch();
  };
  return (
    <form className={b()} action="">
      <h2 className={b("title")}>Авторизация</h2>
      <Input
        label={"Login"}
        value={values.login}
        onChange={handleChange}
        required={true}
        className={b("field")}
        placeholder={"login"}
        htmlType={"text"}
        disabled={loading}
        error={errors?.login}
        name={"login"}
      />
      <Input
        label={"Password"}
        value={values.password}
        onChange={handleChange}
        required={true}
        className={b("field")}
        placeholder={"password"}
        htmlType={"password"}
        disabled={loading}
        error={errors?.password}
        name={"password"}
      />
      {!!errorText && <p className={"error"}>{errorText}</p>}

      <Button htmlType={"submit"} text={"Войти"} onClick={handlerSubmit} />
      <a href="/registration" className={b("reg-link")}>
        Регистрация
      </a>
    </form>
  );
};
const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions };

export const AuthForm = connect(mapStateToProps, mapDispatchToProps)(AuthFormPresenter);
