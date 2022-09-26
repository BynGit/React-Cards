import React from "react";
import Card5 from "./card5";
const Cards5 = () => {
    const datos4 = [
        {
            lang: "Paisaje 5",
            url: "https://w0.peakpx.com/wallpaper/818/290/HD-wallpaper-abstract-mountains-landscape-sunset-summer-abstract-nature-backgrounds-abstract-summer-landscape-abstract-landscapes.jpg"
        }
    ]

    return (
        <>
            {datos4.map(({ lang, url }) => {
                return <Card5 key={lang} lang={lang} img={url} />
            })}
        </>
    )

}

export default Cards5;