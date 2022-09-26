import React,{useState, useEffect, useCallback} from "react"
import debug from "sabio-debug"
import locationService from "../../services/locationService"
import UserLocationCard from "./UserLocationCard"
import "./userlocations.css"
import Swal from "sweetalert2"

function RenderUserLocationCards(){
    const _logger = debug.extend("RenderUserLocationCards")
    const [locationState, setLocationState] = useState({arrayofLocations: [], updatedAOL: []})
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    useEffect(()=>{
        locationService.getLocationByUserId()
            .then(onGetUserLocationSuccess)
            .catch(onGetUserLocationError)
    }, [])

    const DeleteRequested = useCallback((aLocation, e) =>{
        _logger("Location Id", aLocation.id, {aLocation, e})

        const handler = onDeleteLocationSucces(aLocation.id)
        
        locationService.deleteLocation(aLocation.id)
            .then(handler)
            .catch(onDeleteLocationError)
    },[])

    const onGetUserLocationSuccess = (data) =>{
        _logger("OnSucces of getLocations", data)
        let arrayofLoc = data.item;

        setLocationState((prevState)=>{
            const ls = {...prevState}
            ls.arrayofLocations = ls.arrayOfLoc
            ls.updatedAOL = arrayofLoc.map(aLocationMap)
            return ls;
        })
    }
    
    const onGetUserLocationError = (err) =>{
        _logger("onError of getLocations", err)
    }
    const onDeleteLocationSucces = (data) =>{
        _logger("Delete Location Success", data)
        
        Toast.fire({
            icon: 'success',
            title: 'Location Deleted Successfully'
          })

        return()=>{
            setLocationState((prevState)=>{
                const ls = {...prevState}
                ls.arrayofLocations = [...ls.arrayofLocations]

                const idxOf = ls.arrayofLocations.findIndex( (location) =>{
                    _logger("location", location)
                    
                    let result = false;

                    if(location.id === data)
                    {
                        result = true;
                    }
                    return result;
                });
                if(idxOf >= 0){
                    ls.arrayofLocations.splice(idxOf, 1)
                    ls.updatedAOL = ls.arrayofLocations.map(aLocationMap);
                }
                return ls;
            })
        }   
    }
    const onDeleteLocationError = (err) =>{
        _logger("Delete Location Error", err)
        Toast.fire({
            icon: 'error',
            title: 'Location Delete Error'
          })
    }

    const aLocationMap = (aLocation) =>{
        return(
            <UserLocationCard
                location = {aLocation}
                key = {"ListA" + aLocation.id}
                onDeleteRequested = {DeleteRequested}
            >
            </UserLocationCard>
        )
    }

    return(
        <div className = "container pt-3 rulccont">
            <div className="row g-2 rulccont">{locationState.updatedAOL}</div> 
        </div>
    );
}

export default RenderUserLocationCards;