import React from "react";
import Card2 from "./card2";


const Cards2 = () => {
    const datos2 = [
        {
            lang: "Paisaje 2",
            url: "https://www.xtrafondos.com/wallpapers/resoluciones/20/diseno-de-paisaje-del-espacio_2560x1440_5771.jpg",
        }

    ]
    return (
        <>
            {
                datos2.map(({ lang, url }) => {
                    return <Card2 key={lang} lang = {lang} img={url} />
                })
            }
        </>
    )
}

export default Cards2