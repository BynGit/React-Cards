import React from "react";
const Card2 = ({lang, img}) => {
    return (
        <div className="card" style={{backgroundColor: "#cacaf8"}}>
            <img src={img} alt="un paisaje" />
            <h3>{lang}</h3>

        </div>)
}

export default Card2;