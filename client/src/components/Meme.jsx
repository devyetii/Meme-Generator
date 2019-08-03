import React from 'react'

function Meme(props) {
    return (
        <div className="meme">
            <h2>{props.topText}</h2>
            <img src={props.imgUrl} alt="meme"/>
            <h2>{props.bottomText}</h2>
        </div>
    )
}

export default Meme