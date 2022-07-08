import {useState} from "react";
import PlacesAutocomplete, {
  geocodeByAddress, 
  geoLatLng 
} from "react-places-autocomplete";

export default function App() {
  const [address, setAddress] = useState("")
  const handleSelect = async value => {}; //recieves of address of selection 

  return (
    <div>
      <PlacesAutocomplete //needs a render prop function 
        value = {address} //current value of whatever user is typing into input
        onChange = {setAddress} //called whenever input changes
        onSelect = {handleSelect} //called when user selects one of the dropdown options 
      > 
       {/*this render prop function needs a couple of props*/}
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({placeholder: "Type Address"})}></input>  {/*renders input to screen*/}

            <div>  {/*div that displays suggestions */}
              {loading ? <div>...loading</div> : null} 
              { suggestions.map( suggestion => { 
                  return (
                    <div>
                      {suggestion.description}
                    </div>
                  )
              })}
            </div>

          </div>
          )}
      </PlacesAutocomplete>
    </div>
  )
}

