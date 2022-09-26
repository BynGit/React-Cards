import React from "react";
import Card1 from "./card1";


const Cards1 = () => {
const datos = [
    {
        lang: "Paisaje1",
        url: "https://w0.peakpx.com/wallpaper/63/37/HD-wallpaper-nature-scenery-scenery-artist-artwork-digital-art-landscape.jpg",
        fColor: "#b6d88a",
        sColor: "#ffd7d7"

    }
]

    return (
       <>
       {datos.map(({lang, url, fColor, sColor}) => {
        return <Card1 key = {lang} lang = {lang} img = {url}/>
       })}
       </>)


}

export default Cards1