import './LanguagePage.css'
import React from "react";
import block from "bem-cn";

const b = block("language-page");
interface Props {}

export const LanguagePage:React.FC<Props>=()=>{
    return(
        <div className={b()}>
            Языки
        </div>
    )
}