import React from 'react';
import CardText from './CardText';
import CardTitle from './CardTitle';


function CardBody (props) {
    return (
        <div className="card-body">
            <CardTitle content={props.titleContent} />
            <CardText content={props.textContent} />
        </div>
    );
}
export default CardBody;