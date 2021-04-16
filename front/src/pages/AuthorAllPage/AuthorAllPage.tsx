import "./AuthorAllPage.css";
import React, { ChangeEventHandler, useCallback } from "react";
import block from "bem-cn";
import { RefContainer } from "../../components/RefContainer/RefContainer";
import { RefList } from "../../components/RefList/RefList";
import { BasePageProps } from "../../types/base";
import { useAuthorGetAll } from "../../hooks/useAuthorGetAll";
import { debounce } from "lodash";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { browserHistory } from "../../browserHistory";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { ButtonType } from "../../components/Button/ButtonType";
import { apiAuthorsDelete } from "../../api/authors";

const b = block("author-page");
interface Props extends BasePageProps {}

export const AuthorAllPage: React.FC<Props> = ({ match }) => {
  const { data, loading, setSearch } = useAuthorGetAll();
  const handlerChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  const debounceHandlerChange = useCallback(debounce(handlerChange, 300), [handlerChange]);
  return (
    <div className={b({}).mix("all-page")}>
      <RefContainer
        element={() => (
          <Button
            type={ButtonType.Monochrome}
            htmlType={"button"}
            text={"Создать"}
            onClick={() => browserHistory.push("/ref/authors/create")}
          />
        )}
        leftElement={() => <Input htmlType={"text"} onChange={debounceHandlerChange} label={"Поиск по имени"} />}
      >
        {loading && <LoadingIndicator size={"40px"} mLeft={"45%"} mTop={"100px"} />}
        {!!data && <RefList deleteRequest={apiAuthorsDelete} data={data} match={match} title={"Авторы"} />}
      </RefContainer>
    </div>
  );
};
