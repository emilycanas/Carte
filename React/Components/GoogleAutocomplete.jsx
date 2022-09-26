import React, {useState} from 'react';
import {LoadScript, Autocomplete } from '@react-google-maps/api';
import debug from "sabio-debug"
import './autocompletelocation.css'
import PropTypes from 'prop-types'

const _logger = debug.extend("Autocomplete")
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

function AutocompleteLocation({onChange}) {

const [autoComp, setAutoComp] = useState({});

  const onLoad  = (autocomplete) => {
    _logger('autocomplete: ', autocomplete)

    setAutoComp(autocomplete)
  }

  const onPlaceChanged = () => {
    if (autoComp !== null) {
      const location = autoComp.getPlace()

      const loc = locObject(location.address_components)
      const formData = {}
      formData.locationTypeId = 0
      formData.lineOne = loc.street_number + ' ' + loc.route
      formData.lineTwo = " "
      if(loc.locality){
        formData.city = loc.locality
      }else{
        formData.city = loc.administrative_area_level_2
      } 
      formData.stateId = loc.administrative_area_level_1
      formData.zip = loc.postal_code
      formData.longitude = location.geometry.location.lng()
      formData.latitude = location.geometry.location.lat()

      _logger("formData send to LocationAddUpdate", formData)
      onChange(formData);
  
    } else {
      _logger('Autocomplete is not loaded yet!')
    }  
  }

  const locObject = (addrComp) =>{
    _logger("Address_components");
    let location = {}
    Object.keys(addrComp).forEach((key)=>{
      location[addrComp[key].types[0]] = addrComp[key].short_name
    })
    return location;
  }

    return (
    <React.Fragment>
        <LoadScript googleMapsApiKey = {API_KEY} libraries = {['places']}>
                <div className='autocompletediv-location'>
                    <Autocomplete
                        onLoad={onLoad}
                        onPlaceChanged={onPlaceChanged}
                        fields={['address_components', 'geometry.location']}
                        //types={['geocode']} 
                        restrictions={{ country: 'us' }}>
                        <input
                        className='autocompletesearchtextbox'
                        type="text"
                        placeholder="Search..."
                       />                      
                    </Autocomplete>
                </div> 
        </LoadScript>
    </React.Fragment>
    )
}

AutocompleteLocation.propTypes = {
  onChange: PropTypes.func,
}

export default React.memo(AutocompleteLocation)