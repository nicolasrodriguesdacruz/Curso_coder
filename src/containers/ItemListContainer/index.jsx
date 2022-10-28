import React from "react";
import './styles.css'

function ItemListContainer({ greeting, greeting2 }) {
    return (
        <div className="item-list-container" style={{
            backgroundSize: 1200,
            backgroundImage: 'url("https://w0.peakpx.com/wallpaper/977/143/HD-wallpaper-basketball-ball-yellow-crossovers-basketball-sneakers-street-basketball.jpg")'
        }}>
            <h2><font color="white">{greeting}</font></h2>
            <h2><font color="white">{greeting2}</font></h2>
        </div>
    )
}

export default ItemListContainer;