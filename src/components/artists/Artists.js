import React from 'react';
import artists from '../../data/artists';
import {compareName} from '../../helpers/helper';

class Artists extends React.Component {
    listArtists = () => {
        return artists.sort(compareName).map((e) => {
            let link = "/artist/"+e.id
            return <a href={link} className="list-group-item">{e.name}</a>
        })
    }
    render() {
        return (
            <div className="list-group">
                {this.listArtists()}
            </div>
        )
    }
}

export default Artists;