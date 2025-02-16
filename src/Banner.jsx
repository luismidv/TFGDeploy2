import "./static/css/rootStyle.css"
import { Link } from "react-router-dom"

export function Banner({image,title}) {
    return (
        <div className = "bannerclass p-4 bg-gray-200">
            <img src = {image}></img>
            <p> {title} </p>
            <Link className="details" to ="/inforoom">
                More details
            </Link>
        </div>
    )
}