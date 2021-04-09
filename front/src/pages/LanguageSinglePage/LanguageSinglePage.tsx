import block from "bem-cn";
import React, { useCallback, useMemo } from "react";
import { browserHistory } from "../../browserHistory";
import { Button } from "../../components/Button/Button";
import { RefContainer } from "../../components/RefContainer/RefContainer";
import { useLanguageGetById } from "../../hooks/useLanguageGetById";
import { BasePageProps } from "../../types/base";

interface Props extends BasePageProps<{ id: string }> {}

const b = block("lang-single-page");

export const LanguageSinglePage: React.FC<Props> = (props) => {
  const id = useMemo<number>(() => +props.match.params.id, [props.match])
  const { data, loading } = useLanguageGetById(id);

  const button = useCallback(
    () =>
      data ? (
        <Button
          onClick={() => browserHistory.push(`/ref/languages/${data.id}/edit`)}
          htmlType={"button"}
          text={"Редактировать"}
        />
      ) : null,
    [data]
  );

  return (
    <RefContainer title={data ? `${data.name} язык` : ""} element={button}>
      {loading ? "oleg" : <div>{data?.name}</div>}
    </RefContainer>
  );
};
