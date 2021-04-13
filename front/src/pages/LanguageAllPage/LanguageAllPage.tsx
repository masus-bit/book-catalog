import "./LanguageAllPage.css";
import React from "react";
import block from "bem-cn";
import { RefContainer } from "../../components/RefContainer/RefContainer";
import { RefList } from "../../components/RefList/RefList";
import { useLanguageGetAll } from "../../hooks/useLanguageGetAll";
import { BasePageProps } from "../../types/base";
import { Button } from "../../components/Button/Button";
import { browserHistory } from "../../browserHistory";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { ButtonType } from "../../components/Button/ButtonType";

const b = block("language-page");
interface Props extends BasePageProps {}

export const LanguageAllPage: React.FC<Props> = ({match}) => {
  const { data, loading } = useLanguageGetAll();
  return (
    <div className={b({}).mix('all-page')}>
      <RefContainer element={()=><Button type={ButtonType.Monochrome} htmlType={'button'} text={'Создать'} onClick={()=>browserHistory.push('/ref/languages/create')} />}>
      {loading && <LoadingIndicator size={'40px'} mLeft={'45%'} mTop={'100px'} />}
        {data.length > 0 && !loading ? <RefList data={data} match={match} title={"Языки"} /> : <p>Ничего не найдено</p>}
    
      </RefContainer>
    </div>
  );
};
