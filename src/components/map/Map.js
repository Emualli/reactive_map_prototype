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
        this._generateFakeVehicles = _.throttle(this._generateFakeVehicles, 3000, {leading: true})
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

    _generateFakeVehicles () {
        const vehicles = []
        const latBounds =  [48.8, 48.9]
        const longBounds = [2.22, 2.42]
        const vehicleTypes = ['Berline', 'Van', 'Luxe', 'Moto']
        for (let i = 0; i < 200; i++) {
            const vehicleTypeRandomizer = Math.floor(Math.random() * 4)
            const latRandomizer = parseFloat(Math.random().toFixed(6))
            const longRandomizer = parseFloat(Math.random().toFixed(6))
            vehicles.push({ name: vehicleTypes[vehicleTypeRandomizer],
                            lat:  latRandomizer * (latBounds[1] - latBounds[0]) + latBounds[0],
                            long: longRandomizer * (longBounds[1] - longBounds[0]) + longBounds[0]
                          })
        }
        return vehicles
    }

    render () {
        const { selectedRides } = this.props
        const { viewport } = this.state
        const mapBoxToken = MapBoxUtils.getMapBoxToken()
        const vehicles = this._generateFakeVehicles()

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
                {selectedRides && ( selectedRides.map((sr, i) => {
                        return(
                            [sr.address_pick_up, sr.address_drop_off].map((a, i) => {
                                return (
                                    <Marker
                                        lat={a.lat}
                                        long={a.long}
                                        color='red'
                                        text={sr.id}
                                        key={i} />
                                )

                            })
                        )
                    })
                )}
            </MapGL>

        )}
}

export default Map;