import React from 'react'
import './RidesMenu.css'

export const RideContainer = ({ id, address_pick_up }) => (
    <div className='singleRide'>{`This is a ride (id: ${id}) from ${address_pick_up.name}`}</div>
)

class RidesMenu extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        const { rides } = this.props
        return (
            <div className='rideList'>
                {rides.map((ride, i) => {
                    return (
                        <RideContainer {...ride} key={i} />
                    )
                })}
            </div>
        )
    }
}

export default RidesMenu