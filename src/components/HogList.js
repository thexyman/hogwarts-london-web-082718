import React, { Component } from 'react';
import Hog from './Hog';
import IndividualHog from './IndividualHog';

class HogList extends Component {

    displayAllHogs = () => {
        return this.props.hogs.map((hog, idx) => < Hog hog={hog} key={idx} selectHog={this.props.selectHog}/>)
    }

    render(){
        return (
            <div className="ui grid container">
                {this.displayAllHogs()}
            </div>
        )
    }

}

export default HogList;