import "./LanguagePage.css";
import React from "react";
import block from "bem-cn";
import { RefContainer } from "../../components/RefContainer/RefContainer";
import { RefList } from "../../components/RefList/RefList";
import { useLanguageGetAll } from "../../hooks/useLanguageGetAll";
import { BasePageProps } from "../../types/base";

const b = block("language-page");
interface Props extends BasePageProps {}

export const LanguagePage: React.FC<Props> = () => {
  const { data, loading } = useLanguageGetAll();

  return (
    <div className={b()}>
      <RefContainer>
        {data.length > 0 && !loading ? <RefList data={data} title={"Языки"} /> : <p>Ничего не найдено</p>}
    
      </RefContainer>
    </div>
  );
};
