import block from "bem-cn";
import React, { MouseEventHandler } from "react";
import { AppState } from "../../store/app/types";
import * as Yup from "yup";
import { User } from "../../types/user";
import { useFormik } from "formik";
import { Input } from "../Input/Input";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { RootState } from "../../store/types";
import { appActions } from "../../store/app/actions";
import { Button } from "../Button/Button";
interface StateProps {
  loading: boolean;
  errorText: string;
  successRegText: string;
}
interface DispatchProps extends AppState.ActionThunk {}
interface OwnProps {}

type Props = OwnProps & StateProps & DispatchProps;

const b = block("create-form");

const schema: Yup.SchemaOf<User.Create.Params> = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required(),
  email: Yup.string().required(),
  passwordConfirm: Yup.string().required(),
});

const RegistrationFormPresenter: React.FC<Props> = ({ loading, errorText, appCreate, successRegText }) => {
  const { errors, values, submitForm, handleChange } = useFormik<User.Create.Params>({
    initialValues: {
      login: "",
      password: "",
      email: "",
      passwordConfirm: "",
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appCreate(fields);
    },
  });
  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    submitForm().catch();
  };
  return (
    <form className={b()}>
      <h2 className={b("title")}>Регистрация</h2>
      <Input
        label={"Login"}
        htmlType={"text"}
        className={"field"}
        name={"login"}
        value={values.login}
        onChange={handleChange}
        required={true}
        placeholder={"login"}
        error={errors?.login}
        disabled={loading}
      />
      <Input
        label={"Email"}
        htmlType={"email"}
        className={"field"}
        name={"email"}
        value={values.email}
        onChange={handleChange}
        required={true}
        placeholder={"e-mail"}
        error={errors?.email}
        disabled={loading}
      />
      <Input
        label={"Password"}
        htmlType={"password"}
        className={"field"}
        name={"password"}
        value={values.password}
        onChange={handleChange}
        required={true}
        placeholder={"password"}
        error={errors?.password}
        disabled={loading}
      />
      <Input
        label={"Confirm password"}
        htmlType={"password"}
        className={"field"}
        name={"passwordConfirm"}
        value={values.passwordConfirm}
        onChange={handleChange}
        required={true}
        placeholder={"password confirm"}
        error={errors?.passwordConfirm}
        disabled={loading}
      />
      {!!errorText && <p className={'error'}>{errorText}</p>}
      {!!successRegText && <p className={'success'}>{successRegText}</p>}
      <Button text={"Зарегистрироваться"} htmlType={"submit"} onClick={handlerSubmit} />
    </form>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText,
  successRegText: app.successRegText
});
const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions };

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(RegistrationFormPresenter);
