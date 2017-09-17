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
        return (
            <div className='rideList'>
                <RideContainer />
            </div>
        )
    }
}

export default RidesMenu