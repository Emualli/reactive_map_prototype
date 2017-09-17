import React from 'react'
import './RidesMenu.css'

import Marker from '../map/Marker.js'

export const RideContainer = ({ selectAndTraceRide, id, address_pick_up, address_drop_off }) => (
    <div onClick={selectAndTraceRide} className='singleRide'>{`This is a ride (id: ${id}) from ${address_pick_up.name}`}</div>
)

class RidesMenu extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        const { rides, selectAndTraceRide } = this.props
        return (
            <div className='rideList'>
                {rides.map((ride, i) => {
                    return (
                        <RideContainer selectAndTraceRide={selectAndTraceRide.bind(this, ride)} {...ride} key={i} />
                    )
                })}
            </div>
        )
    }
}

export default RidesMenu