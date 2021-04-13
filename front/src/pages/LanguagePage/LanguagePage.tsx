import block from "bem-cn";
import React, { useCallback, useMemo } from "react";
import { browserHistory } from "../../browserHistory";
import { Button } from "../../components/Button/Button";
import { ButtonType } from "../../components/Button/ButtonType";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { RefContainer } from "../../components/RefContainer/RefContainer";
import { SingleItem } from "../../components/SingleItem/SingleItem";
import { useLanguageGetById } from "../../hooks/useLanguageGetById";
import { BasePageProps } from "../../types/base";

interface Props extends BasePageProps<{ id: string }> {}

const b = block("language-page");

export const LanguagePage: React.FC<Props> = (props) => {
  const id = useMemo<number>(() => +props.match.params.id, [props.match]);
  const { data, loading } = useLanguageGetById(id);

  const button = useCallback(
    () =>
      data ? (
        <Button
          type={ButtonType.Monochrome}
          onClick={() => browserHistory.push(`/ref/languages/${data.id}/edit`)}
          htmlType={"button"}
          text={"Редактировать"}
        />
      ) : null,
    [data]
  );

  return (
    <div className={b({}).mix("single-page")}>
      <RefContainer title={data ? `${data.name} язык` : ""} element={button}>
        {loading && <LoadingIndicator size={"40px"} mLeft={"45%"} />}
        {<SingleItem name={data ? data?.name : "Пусто"} />}
      </RefContainer>
    </div>
  );
};
