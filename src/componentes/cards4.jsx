import React from "react";
import Card4 from "./card4";
const Cards4 = () => {
    const datos4 = [
        {
            lang: "Paisaje 4",
            url: "https://w0.peakpx.com/wallpaper/92/927/HD-wallpaper-abstract-mountains-landscape-moon-minimal-abstract-nature-backgrounds-abstract-landscapes-mountains-minimalism.jpg"
        }
    ]

    return(<>
    {
        datos4.map(({lang, url}) => {
            return <Card4 key={lang} lang = {lang} img = {url}/>
        })
    }
    </>)
}

export default Cards4