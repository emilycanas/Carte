import React, {useState, useEffect} from 'react';
import debug from 'sabio-debug';
import LocationAddUpdate from './LocationAddUpdate';
import { useParams} from "react-router-dom"
import { useLocation } from "react-router-dom"
import "./locationaddupdate.css"

function LocationFormContainer() {
    const _logger = debug.extend('LocationFormExample');
    const {state} = useLocation();
    const idParams = useParams();
    const [userLocationId, setUserLocationId] = useState(idParams); 
    const [stateAddress, setStateAddress] = useState({
        locationTypeId : 0,
        lineOne : "",
        lineTwo : "",
        city : "",
        zip: "",
        stateId: 0,
        latitude: 0,
        longitude: 0,
    })  
    _logger(userLocationId);
    _logger(stateAddress)

    useEffect(()=>{   
        setUserLocationId(idParams)
    },[idParams])

    useEffect(()=>{   
        if(state?.type === "LOCATION_UPDATE"){
            _logger("Update of stateAddress", state.payload) 
            setStateAddress((prevState)=>{
                return{...prevState, ...state.payload}
            })    
        }
    },[state])

    return (
        <div className='locationformcontainer'>
            <LocationAddUpdate
            idParams = {idParams} 
            stateAddress = {stateAddress}
            setStateAddress = {setStateAddress}     
            ></LocationAddUpdate>
        </div>
    );
}
export default LocationFormContainer;