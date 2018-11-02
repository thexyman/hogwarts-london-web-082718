import React from 'react'
import Hog from './Hog';

const Filter = (props) => {
	return (
    <div className="navWrapper">
    <input type="radio" name="filter" value="name" onChange={(e) => props.filterHogs(e)} />
    Sort by Name
    <input type="radio" name="filter" value="weight" onChange={(e) => props.filterHogs(e)} />
        Sort by Weight 
    <input type="radio" name="filter" value="greased" onChange={(e) => props.filterHogs(e)} />
        Greased Status
    <input type="radio" name="filter" value="all" onChange={(e) => props.filterHogs(e)} /> 
        All
    </div>
	)
}

export default Filter;

