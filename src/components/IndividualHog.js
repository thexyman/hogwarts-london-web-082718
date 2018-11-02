import React, { Component } from 'react';
import hogs from '../porkers_data';



class IndividualHog extends Component {

    render(){
        // const { name, image } = this.props.hog
        return (
         <div className="pigTile" onClick={() => this.props.deselectHog()}>
            <h3>{this.props.hog.name}</h3>
            <img src={process.env.PUBLIC_URL + '/hog-imgs/' + this.props.hog.name.toLowerCase() + '.jpg'} />
            <p>Specialty: {this.props.hog.specialty}</p>
            <p>{this.props.hog.greased ? 'Greased' : 'Not-Greased'}</p>
            <p>Weight: {this.props.hog.weight}</p>
            <p>Highest Medal Achieved: {this.props.hog.highestMedalAchieved}</p>
         </div>   
        )
    }

}

export default IndividualHog;
