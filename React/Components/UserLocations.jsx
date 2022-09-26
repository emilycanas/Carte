import React from "react"
import './userlocations.css'
import {Card, Button, Row} from 'react-bootstrap';
import RenderUserLocationCards from "./RenderUserLocationCards";
import {useNavigate} from "react-router-dom";

function UserLocations(){
    const navigate = useNavigate();

    const onAddRequest = (e) =>{
        e.preventDefault();
        navigate(`/location/add`)
    }


    return(     
        <Card className = "lau-parentcontainer">
            <h1 className="ultitle">My Locations</h1>

            <div className = "uladd">
            <Button type= "button" className = "btn btn-primary pt-1 my-3 uladd" onClick = {onAddRequest}>Add a Location</Button>
            </div>
            <Row>
                <RenderUserLocationCards></RenderUserLocationCards>
            </Row>
        </Card>
    )
}
export default UserLocations ;