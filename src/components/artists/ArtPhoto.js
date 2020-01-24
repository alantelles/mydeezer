import React from 'react';

class ArtPhoto extends React.Component {
    constructor (props) {
        super(props)
        try {
            this.photo = require('./photos/p'+this.props.id+'.jpg');
        }
        catch {
            this.photo = require('./photos/no_photo.png');
        }
    }
    render() {
        return <img className="card-img-top" src={this.photo} alt="" />
    }
}
export default ArtPhoto;