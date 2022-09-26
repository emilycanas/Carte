import React, {useState, useEffect} from "react";
import locationService from "../../services/locationService"
import debug from "sabio-debug"
import LocationCard from "./LocationCard";
import "./locationcard.css"

function RenderLocations(){
    const _logger = debug.extend("RenderLocations")
    const [locationState, setLocationState] = useState({arrayofLocations: [], updatedAOL: []})
  
    useEffect(()=>{
        locationService.getOrganizations()
            .then(onGetLocationSuccess)
            .catch(onGetLocationError)
    }, [])

    const onGetLocationSuccess = (data) =>{
        _logger("OnSucces of getLocations",data)
        let arrayofLoc = data.item.pagedItems;
        
        setLocationState((prevState)=>{
            const ls = {...prevState}
            ls.arrayofLocations = ls.arrayOfLoc
            ls.updatedAOL = arrayofLoc.map(aLocationMap)
            return ls;
        })
    };

    const onGetLocationError = (err) =>{
        _logger("onError of getLocations", err)
    }

    const aLocationMap = (aLocation) =>{
        return(
            <LocationCard
                location = {aLocation}
                key = {"ListA" + aLocation.name}
            >     
            </LocationCard>
        )
    }

    return(
        <React.Fragment>
        <div className = "container">
            <div className="row">{locationState.updatedAOL}</div> 
        </div>
        </React.Fragment>
    );
};

export default RenderLocations;