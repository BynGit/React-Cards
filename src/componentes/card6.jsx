import React from "react";

const Card6 = ({lang, img}) =>{
return(<div className="card" style={{backgroundColor: "#f5d8a3"}}>
    <img src={img} alt="dfg" />
    <h3>{lang}</h3>
</div>)
}

export default Card6;