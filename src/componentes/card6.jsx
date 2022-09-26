import React from "react";
import './card1.css'

const Card6 = ({lang, img}) =>{
return(<div className="card" style={{backgroundColor: "#f5d8a3"}}>
    <img src={img} alt="" />
    <h3>{lang}</h3>
</div>)
}

export default Card6;