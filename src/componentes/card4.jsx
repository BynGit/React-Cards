import React from "react";
import './card1.css'

const Card4 = ({lang, img}) => {
    return(
        <div className="card" style={{backgroundColor: "#E7BCA6"}}>
            <img src={img} alt="uh paisaje" />
            <h3>{lang}</h3>
        </div>
    )
}

export default Card4;