import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
// import { AnimalContext } from "../animal/AnimalProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
import "./Location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = (props) => {
    const { addLocation } = useContext(LocationContext)
    const { locations, getLocations } = useContext(LocationContext)
    //const { customers, getCustomers } = useContext(CustomerContext)

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const address = useRef(null)
    // const customer = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getLocations()
    }, [])

    const constructNewLocation = () => {
        /*
            The `location` and `customer` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        // const locationId = parseInt(location.current.value)
        // const customerId = parseInt(customer.current.value)

        if (!address) {
            window.alert("Please select a location")
        } else {
            addLocation({
                name: name.current.value,
                address: address.current.value,
                
            })
            .then(() => history.push("/locations"))
        }
    }

    const history = useHistory();

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Establishment name: </label>
                    <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationAddress">Address: </label>
                    <input type="text" id="locationAddress" ref={address} required autoFocus className="form-control" placeholder="Address" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewLocation()
                }}
                className="btn btn-primary">
                Save Location
            </button>
        </form>
    )
}