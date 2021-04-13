import React, { MouseEventHandler, useState } from "react";
import block from "bem-cn";
import { useFormik } from "formik";
import * as Yup from "yup";
import { browserHistory } from "../../../browserHistory";
import { BaseComponentProps } from "../../../types/base";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Genres } from "../../../types/genres";
import { apiGenresCreate, apiGenresUpdate } from "../../../api/genres";
import { ButtonType } from "../../Button/ButtonType";

interface Props extends BaseComponentProps {
  data: Genres.Data | null;
}

const b = block("genre-form");

const schema: Yup.SchemaOf<Genres.Create.Params> = Yup.object().shape({
  name: Yup.string().required("Обязательное"),
});

export const GenreForm: React.FC<Props> = ({ className = "", data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const { errors, values, submitForm, handleChange } = useFormik<Genres.Create.Params>({
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

          await apiGenresUpdate({ ...data, ...fields });
        } else {
          const res = await apiGenresCreate(fields);
          id = res.id;
        }
        browserHistory.push(`/ref/genres/${id}`);
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
        label={"Жанр"}
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
