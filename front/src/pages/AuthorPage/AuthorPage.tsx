import './AuthorPage.css'
import React from "react";
import block from "bem-cn";

const b = block("author-page");
interface Props {}


export const AuthorPage:React.FC<Props>=()=>{
    return(
        <div className={b()}>
            Авторы
        </div>
    )
}