import React from "react";
const Card5 = ({ lang, img }) => {
    return (
        <div className="card" style={{backgroundColor: "#ACD3C8"}}>
            <img src={img} alt="un paisaje" />
            <h3>{lang}</h3>
        </div>)
}

export default Card5