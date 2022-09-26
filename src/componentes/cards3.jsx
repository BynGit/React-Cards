import React from "react";
import Card3 from "./card3";

const Cards3 = () => {
const datos3 = [
    {
        lang: "Paisaje 3",
        url: "https://besthqwallpapers.com/Uploads/23-11-2019/112949/thumb2-4k-abstract-landscapes-nightscapes-moon-creative.jpg"
    }
]

return(<>
{datos3.map(({lang, url}) => {
    return <Card3 key={lang} lang = {lang} img = {url}/>
})}
</>)


}

export default Cards3;