import React from "react"
import debug from "sabio-debug"
import PropTypes from "prop-types";
import "./locationcard.css"

function LocationCard(props){
    
    const _logger = debug.extend("LocationCard")
    
    const aLocation = props.location;

    _logger(props, "LocationCardProps")

    return(
   
        <div className="card lc-card">
            <div className="row g-2"> 
                <div className="col-md-8" >
                    <div className="lc-card-body" >
                        <h5 className="card-title">Card title/ Feature Dish Name </h5>
                        <h4 className="card-text orgName">{aLocation.name}</h4>
                        <p className="card-text"><medium className="text-muted">{aLocation.primaryLocation.lineOne} {aLocation.primaryLocation.lineTwo} {aLocation.primaryLocation.city} {aLocation.primaryLocation.state.name} {aLocation.primaryLocation.zip}</medium></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg" className="img-fluid lc-image" alt="{cardimg}"/>
                </div>
            </div>
        </div>
      
    )    
};

LocationCard.propTypes = {
    location: PropTypes.shape({
        name: PropTypes.string.isRequired, 
        primaryLocation: PropTypes.shape({
            lineOne: PropTypes.string.isRequired, 
            lineTwo: PropTypes.string,
            city: PropTypes.string.isRequired,
            zip: PropTypes.string.isRequired,
            state: PropTypes.shape({
                name: PropTypes.string.isRequired
            })
        }).isRequired,
    }).isRequired,
    
};

export default LocationCard;