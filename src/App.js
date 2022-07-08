import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress, 
  geoLatLng 
} from "react-places-autocomplete";

export default function App() {
  const [address, setAddress] = React.useState("")
  const handleSelect = async value => {}; 

  return (
    <div>
      <PlacesAutocomplete
        value = {address}
        onChange = {setAddress}
        onSelect = {handleSelect}
      >
        {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (<div>
            <input {...getInputProps({placeholder: "Type Address"})}></input>
            <div>
              {loading ? <div>...loading</div> : null}
              {suggestions.map( () => {
                
              })}
            </div>
          </div>)}
      </PlacesAutocomplete>
    </div>
  )
}

