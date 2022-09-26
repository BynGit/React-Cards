import React from "react";
import './card1.css'
const Card3 = ({lang, img}) => {
    return (
    <div className="card" style={{backgroundColor: "#B28B83"}}>
        <img src={img} alt="un paissaje" />
        <h3>{lang}</h3>

    </div>)
}

export default Card3;