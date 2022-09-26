import React from "react";
import Card6 from "./card6";
const Cards6 = () => {
const datos6 = [{
    lang: "Paisaje 6",
    url: "https://w0.peakpx.com/wallpaper/516/156/HD-wallpaper-abstract-summer-landscape-coast-sea-abstract-nature-backgrounds-abstract-coast-landscape-abstract-landscapes.jpg"
}
]

return(
    <>
    {datos6.map(({lang, url})=> {
        return <Card6 key={lang} lang = {lang} img = {url}/>
    })}
    </>
)
}

export default Cards6;