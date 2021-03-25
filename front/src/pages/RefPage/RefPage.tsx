import "./RefPage.css";
import React from "react";
import block from "bem-cn";

const b = block("ref-page");
interface Props {}


export const RefPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h3 className={b("title")}>Справочники</h3>
      <ul className={b("ref-list")}>
        <li className={b("ref-item")}>
          <a href='/ref/authors' className={b('ref-link')}> Авторы</a>
        </li>
        <li className={b("ref-item")}>
          <a href='/ref/genres' className={b('ref-link')} >Жанры</a>
        </li>
        <li className={b("ref-item")}>
          <a href='/ref/languages' className={b('ref-link')}>Языки </a>
        </li>
        <li className={b("ref-item")}>
          <a href='/ref/publishers' className={b('ref-link')}>Издательства</a>
        </li>
      </ul>
    </div>
  );
};
