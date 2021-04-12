import React, { MouseEventHandler, useState } from "react";
import block from "bem-cn";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apiLanguagesCreate, apiLanguagesUpdate } from "../../../api/languages";
import { browserHistory } from "../../../browserHistory";
import { BaseComponentProps } from "../../../types/base";
import { Languages } from "../../../types/languages";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { ButtonType } from "../../Button/ButtonType";

interface Props extends BaseComponentProps {
  data: Languages.Data | null;
}

const b = block("language-form");

const schema: Yup.SchemaOf<Languages.Create.Params> = Yup.object().shape({
  name: Yup.string().required("Обязательное"),
});

export const LanguageForm: React.FC<Props> = ({ className = "", data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const { errors, values, submitForm, handleChange } = useFormik<Languages.Create.Params>({
    initialValues: {
      name: data?.name ?? "",
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      try {
        let id: number;
        setLoading(true);
        if (data) {
          id = data.id;

          await apiLanguagesUpdate({ ...data, ...fields });
        } else {
          const res = await apiLanguagesCreate(fields);
          id = res.id;
        }
        browserHistory.push(`/ref/languages/${id}`);
      } catch (err) {
        setErrorText(err.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    submitForm().catch();
  };

  return (
    <form className={b({}).mix(className)}>
      <Input
        htmlType={"text"}
        className={b("field")}
        label={"Язык"}
        name={"name"}
        value={data?.name}
        onChange={handleChange}
        error={errors?.name}
        disabled={loading}
      />
      {!errorText && <p className={b("error")}>{errorText}</p>}
      <div className={b("buttons")}>
        <Button type={ButtonType.Monochrome} text={!!data ? "Сохранить" : "Создать"} onClick={handlerSubmit} loading={loading} />
      </div>
    </form>
  );
};
