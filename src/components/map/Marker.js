import React from 'react'
import { Marker as RMarker } from 'react-map-gl'

export const MarkerSvg = ({ color }) => (
    <svg height="15" width="20">
        <circle cx="10" cy="10" r="5" stroke="black" fill={color} />
    </svg>
)

const Marker = ({ color, text, lat, long}) => (
    <RMarker latitude={lat} longitude={long} offsetLeft={-20} offsetTop={-10}>
        {MarkerSvg({ color })}
        <div style={{ color: 'white', fontSize: 12 }}>{text}</div>
    </RMarker>
)

export default Marker