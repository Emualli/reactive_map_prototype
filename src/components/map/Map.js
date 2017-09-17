import React from 'react'
import MapGL from 'react-map-gl'
import Marker from './Marker.js'

import MapBoxUtils from '../../utils/api/Mapbox.js'
import _ from 'lodash'

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewport: {
                latitude: 48.864639,
                longitude: 2.348110,
                zoom: 11,
                width: this.props.width,
                height: this.props.height,
                startDragLngLat: null,
                isDragging: null
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.width !== this.state.viewport.width || nextProps.height !== this.state.viewport.height) {
            const newState = this.state
            this.setState(_.merge(newState, {viewport: {width: nextProps.width, height: nextProps.height}}))
        }
    }

    _onViewportChange = vp => {
        const viewport = Object.assign({}, this.state.viewport, vp)
        this.setState({ viewport })
    }

    render () {
        const { viewport } = this.state
        const mapBoxToken = MapBoxUtils.getMapBoxToken()
        const vehicles = [
            {name: 'Véhicule 1', lat: 48.8756, long: 2.31878},
            {name: 'Véhicule 2', lat: 48.8156, long: 2.39878},
            {name: 'Véhicule 3', lat: 48.8356, long: 2.34878}
        ]

        return (
            <MapGL
                width={this.props.width}
                height={this.props.height}
                onViewportChange={this._onViewportChange}
                mapboxApiAccessToken={mapBoxToken}
                {...viewport}
                mapStyle='mapbox://styles/mapbox/dark-v9'>

                {vehicles.map((v, i) => {
                            return (
                                <Marker
                                    lat={v.lat}
                                    long={v.long}
                                    color='rgb(0, 255, 0)'
                                    text={v.name}
                                    key={i}/>
                            )
                        })}
            </MapGL>

        )}
}

export default Map;