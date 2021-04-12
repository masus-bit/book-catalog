import block from "bem-cn";
import React from "react";
import "./RefList.css";
import { BaseComponentProps } from "../../types/base";
import { match } from "react-router";
import { Link } from "react-router-dom";

interface Props extends BaseComponentProps {
  data: Array<any>;
  title: string;
  match: match<{}>;
}

const b = block("ref-list");

export const RefList: React.FC<Props> = ({ data, title, match }) => {
  return (
    <div className={b()}>
      <h2 className={b("title")}>{title}</h2>
      <ul className={b("list")}>
        <li className={b("ref-item-title")}>
          <span className={b("name-name").mix("name")}>Название</span>
        </li>
        {data.map((it) => {
          return (
            <li className={b("ref-item")} key={it.id}>
              <Link to={`${match !== undefined ? match.url : null}/${it.id}`} className={b("name")}>
                {it.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
