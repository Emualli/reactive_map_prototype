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
            selectedRides: []
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
        const currentState = this.state
        const isRideAlreadySelected = _.find(currentState.selectedRides, r => r.id === ride.id)
        if (!!isRideAlreadySelected) {
            this.setState({selectedRides: _.filter(currentState.selectedRides, r => r.id !== ride.id)})
        } else {
            this.setState({selectedRides: currentState.selectedRides.concat(ride)})
        }
    }


    render() {
        const rides = [{id: 1, address_pick_up: {name: '12 rue de rivoli', lat: 48.853656, long: 2.356352}, address_drop_off: {name: '6 place du colonel bourgoin', lat: 48.823656, long: 2.286352}},
                       {id: 2, address_pick_up: {name: '12 rue de dunkerque', lat: 48.823656, long: 2.316352}, address_drop_off: {name: '6 place du colonel bourgoin', lat: 48.834656, long: 2.2786352}},
                       {id: 3, address_pick_up: {name: '12 rue amélie', lat: 48.873656, long: 2.326352}, address_drop_off: {name: '6 place du colonel bourgoin', lat: 48.814656, long: 2.226352}}]
        const { selectedRides } = this.state
        return (
            <div className="mainApp">
                <Map
                    width={this.state.windowDimensions.width}
                    height={this.state.windowDimensions.height}
                    selectedRides={_.isEmpty(selectedRides) ? null : selectedRides}/>
                <RidesMenu
                    rides={rides}
                    selectAndTraceRide={this.selectAndTraceRide} />
            </div>
        );
    }
}

export default App;
