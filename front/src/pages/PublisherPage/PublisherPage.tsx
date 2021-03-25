import './PublisherPage.css'
import React from "react";
import block from "bem-cn";

const b = block("publisher-page");
interface Props {}

export const PublisherPage:React.FC<Props>=()=>{
    return(
        <div className={b()}>
            Издательства
        </div>
    )
}