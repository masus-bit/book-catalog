import './GenrePage.css'
import React from "react";
import block from "bem-cn";

const b = block("genre-page");
interface Props {}


export const GenrePage:React.FC<Props>=()=>{
    return(
        <div className={b()}>
            Жанры
        </div>
    )
}