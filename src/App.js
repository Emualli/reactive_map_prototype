import React, { Component } from 'react';
import './App.css';
import Map from './components/map/Map.js'
import RidesMenu from './components/menus/RidesMenu.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowDimensions: {
                height: 100,
                width: 100
            }
        }
    }

    componentDidMount () {
        this._updateDimensions()
        window.addEventListener('resize', this._updateDimensions)
    }

    _updateDimensions = () => {
        this.setState({
            windowDimensions: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        })
    }


    render() {
        const rides = [{id: 1, address_pick_up: {name: '12 rue de rivoli', lat: 48.853656, long: 2.356352}}]
        return (
        <div className="mainApp">
            <Map
                width={this.state.windowDimensions.width}
                height={this.state.windowDimensions.height} />
            <RidesMenu
                rides={rides}/>
        </div>
        );
    }
}

export default App;
