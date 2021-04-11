import "./LanguagePage.css";
import React from "react";
import block from "bem-cn";
import { RefContainer } from "../../components/RefContainer/RefContainer";
import { RefList } from "../../components/RefList/RefList";
import { useLanguageGetAll } from "../../hooks/useLanguageGetAll";
import { BasePageProps } from "../../types/base";
import { Button } from "../../components/Button/Button";
import { browserHistory } from "../../browserHistory";

const b = block("language-page");
interface Props extends BasePageProps {}

export const LanguagePage: React.FC<Props> = ({match}) => {
  const { data, loading } = useLanguageGetAll();
  return (
    <div className={b()}>
      <RefContainer element={()=><Button htmlType={'button'} text={'Создать'} onClick={()=>browserHistory.push('/ref/languages/create')} />}>
        {data.length > 0 && !loading ? <RefList data={data} match={match} title={"Языки"} /> : <p>Ничего не найдено</p>}
    
      </RefContainer>
    </div>
  );
};
