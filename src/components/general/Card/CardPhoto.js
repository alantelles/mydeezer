import React from 'react';

function CardPhoto (props) {
    //let image = require(props.src);
    return <img className="card-img-top" src={props.src} alt="" />
}
export default CardPhoto;