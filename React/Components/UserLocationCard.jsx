import React from "react"
import "./userlocations.css"
import debug from "sabio-debug"
import PropTypes from "prop-types"
import {useNavigate} from "react-router-dom";



function UserLocationCard(props){
    const _logger = debug.extend("UserLocationCard")
    _logger("This is the User Location Card debugger")
    _logger(props, "This is the UserLocationProps")

    const aLocation = props.location
    const navigate = useNavigate();

    const onDeleteRequest = (e) =>{
        e.preventDefault();
        _logger("location props",props.location)
        props.onDeleteRequested(props.location, e) 
        _logger("props.onDeleteRed",props.onDeleteRequested)
    }

    const onEditRequest = (e) =>{
        e.preventDefault();
        const stateForTransport = {type: "LOCATION_UPDATE", payload: aLocation} 
        navigate(`/location/edit/${aLocation.id}`, {state: stateForTransport})
    }

    return(
        <div className="card border-secondary mb-3 ulccontainer">
            <div className="card-header ulheader">{aLocation.locationType.name} </div>
                <div className="card-body text-secondary">
                    <div className = "ultext">
                    <h3>Direction</h3>
                        <h5 className="card-title">{aLocation.lineOne} {aLocation.lineTwo}</h5>
                        <h5 className="card-title">{aLocation.city}, {aLocation.state.code} {aLocation.zip}</h5>
                    </div>
                    <div className = "ulbuttons">
                        <button type="button" className="btn btn-primary uledit" onClick = {onEditRequest}>Edit</button>
                        <button type="button" className="btn btn-danger uldelete" onClick = {onDeleteRequest}>Delete</button>
                    </div>
                </div>
        </div>
    )
}

UserLocationCard.propTypes = {
    location: PropTypes.shape({
        locationType : PropTypes.shape({
            name: PropTypes.string.isRequired
        }),
        lineOne: PropTypes.string.isRequired,
        lineTwo: PropTypes.string,
        city: PropTypes.string.isRequired,
        state: PropTypes.shape({
            code: PropTypes.string.isRequired
        }),
        zip: PropTypes.string,
        id: PropTypes.number.isRequired
    }), 
    onDeleteRequested: PropTypes.shape({
        city: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        latitude: PropTypes.number.isRequired,
        lineOne: PropTypes.string.isRequired,
        lineTwo: PropTypes.string,
        locationType : PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }),
        longituide: PropTypes.number.isRequired,
        state: PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            code: PropTypes.string.isRequired
        }),
        zip: PropTypes.string
    })

}

export default UserLocationCard;
