import React, { Component } from 'react';
import './App.css';
import Map from './components/map/Map.js'

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
        return (
        <div className="mainApp">
            <Map
                width={this.state.windowDimensions.width}
                height={this.state.windowDimensions.height} />
        </div>
        );
    }
}

export default App;
