import React from "react";
import PropTypes from "prop-types";
import './card1.css'

const Card1 = ({ lang, img, fColor, sColor }) => {
    return (
        <div className="card" style={{backgroundColor: "#f5d8a3"}}>
            <img src={img} alt="un paisaje" />
            <h3>{lang}</h3>
        </div>
    )
}

Card1.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fColor: PropTypes.string,
    sColor: PropTypes.string
};

export default Card1;