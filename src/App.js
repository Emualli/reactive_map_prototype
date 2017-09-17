import React, { Component } from 'react';
import './App.css';
import Map from './components/map/Map.js'
import RidesMenu from './components/menus/RidesMenu.js'
import _ from 'lodash'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowDimensions: {
                height: 100,
                width: 100
            },
            selectedRide: {}
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

    selectAndTraceRide = (ride) => {
        this.setState({ selectedRide: ride })
    }


    render() {
        const rides = [{id: 1, address_pick_up: {name: '12 rue de rivoli', lat: 48.853656, long: 2.356352}, address_drop_off: {name: '6 place du colonel bourgoin', lat: 48.863656, long: 2.386352}}]
        const { selectedRide } = this.state
        return (
            <div className="mainApp">
                <Map
                    width={this.state.windowDimensions.width}
                    height={this.state.windowDimensions.height}
                    selectedRide={_.isEmpty(selectedRide) ? null : selectedRide}/>
                <RidesMenu
                    rides={rides}
                    selectAndTraceRide={this.selectAndTraceRide} />
            </div>
        );
    }
}

export default App;
