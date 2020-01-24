import React from 'react'
import CardBody from './CardBody'
import CardPhoto from './CardPhoto';

function Card (props){
    /*
const cardData = {
    photo : {
        src : "somedata",
        noPhoto : "otherData"
    },
    body : {
        titleContent : "some component or text",
        textContent : "some component or text"
    }
}
    */
    return (
        <div className='card'>
            <CardPhoto src={props.data.photo} />
            <CardBody titleContent={props.data.body.titleContent} textContent={props.data.body.textContent} />
        </div>
    );
}

export default Card;