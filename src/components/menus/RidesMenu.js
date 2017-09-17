import React from 'react'
import './RidesMenu.css'

export const RideContainer = ({ rideInfo }) => (
    <div className='singleRide'>This is one single ride</div>
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