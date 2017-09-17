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
            {name: 'v1', lat: 48.3232, long: 2.25365},
            {name: 'v2', lat: 48.6565, long: 2.64646}
        ]

        return (
            <MapGL
                width={this.props.width}
                height={this.props.height}
                onViewportChange={this._onViewportChange}
                mapboxApiAccessToken={mapBoxToken}
                {...viewport}
                mapStyle='mapbox://styles/mapbox/dark-v9'>

                {vehicles.forEach((v, i) => {
                            return (
                                <Marker
                                    lat={v.lat}
                                    long={v.long}
                                    color='#00FF00'
                                    key={i}
                                    text={v.name} />
                            )
                        })}
            </MapGL>

        )}
}

export default Map;