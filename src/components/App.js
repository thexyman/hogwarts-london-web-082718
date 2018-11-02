import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList';
import IndividualHog from './IndividualHog';
import Filter from './Filter';

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: [],
      selectedHog: null
    }
  }

  componentDidMount(){
    this.setState({ hogs })
  }

  selectHog = hog => {
    this.setState({selectedHog: hog})
  }

  deselectHog = () => {
    this.setState({selectedHog: null})
  }

  filterHogs = (e) => {
    const filter = e.target.value;
    const copyHogs = [...this.state.hogs]
    if (filter === 'name'){
      const sortedHogs = copyHogs.sort(function(a, b){
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    this.setState({hogs: sortedHogs})
    } else if (filter === 'weight'){
      const sortedHogs = copyHogs.sort(function(a, b){
        let nameA = a.weight;
        let nameB = b.weight; 
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
        return 0;
    })
    this.setState({hogs: sortedHogs})
    } else if (filter === 'greased'){
      const sortedHogs = copyHogs.filter(hog => hog.greased === true)
      this.setState({hogs: sortedHogs})
    } else if (filter === 'all'){
      this.setState({ hogs })
    }
  }

  
  render() {
    return (
      <div className="App">
          < Nav />
          < Filter filterHogs={this.filterHogs} />
          {
          this.state.selectedHog ?
          < IndividualHog hog={this.state.selectedHog} selectHog={this.selectHog} deselectHog={this.deselectHog} />
            :
          < HogList hogs={this.state.hogs} selectHog={this.selectHog}/>
          }
      </div>
    )
  }
}

export default App;
