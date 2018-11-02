import React, { Component } from 'react';
import hogs from '../porkers_data';



class Hog extends Component {

    render(){
        // const { name, image } = this.props.hog
        return (
         <div className="pigTile" onClick={() => this.props.selectHog(this.props.hog)}>
            <h3>{this.props.hog.name}</h3>
            <img src={process.env.PUBLIC_URL + '/hog-imgs/' + this.props.hog.name.toLowerCase() + '.jpg'} />
         </div>   
        )
    }

}

export default Hog;
