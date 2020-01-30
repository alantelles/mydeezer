import React from 'react'
import artists from '../../data/artists';
import { useParams } from 'react-router-dom';
import Card from '../general/Card/Card';
import {getName} from '../../helpers/helper'


function Artist() {
    var {id} = useParams();
    console.log('zika');
    const artist = artists.find((e) => parseInt(id) === e.id );
    var hasPhoto = '../../static/images/artists/p'+artist.id.toString()+'.jpg';
    //var noPhoto = '../static/images/artists/no_photo.png';
    try {
        var photo = require('../../static/images/artists/p'+artist.id.toString()+'.jpg');
    }
    catch  {
        var photo = require('../../static/images/artists/no_photo.png');
    }
    const cardData = {
        photo : photo,
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