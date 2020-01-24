import React from 'react'
import artists from '../../data/artists';
import { useParams } from 'react-router-dom';
import Card from '../general/Card/Card';
import {handledRequire} from '../../helpers/helper'


function Artist() {
    var {id} = useParams();
    console.log('zika');
    const artist = artists.find((e) => parseInt(id) === e.id );
    var hasPhoto = './static/images/artists/p'+artist.id+'.jpg';
    var noPhoto = '../static/images/artists/no_photo.png';
    const cardData = {
        photo : handledRequire(hasPhoto, noPhoto),
        body : {
            titleContent : artist.name,
            textContent : artist.name+' is from '+artist.country
        }
    };
   return (
       <Card data={cardData} />
   )
}

export default Artist;