import React, { useCallback, useRef, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import {  DirectionsRenderer } from "@react-google-maps/api";




const center = {
  lat: 7.8731,
  lng: 80.7718,
};

function MapR1() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAzWKGxZZskJtVG-nHHScjFV1K7E8MaxHY", // Replace with your API key
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  console.log(map)

  const originRef = useRef();
  const destinationRef = useRef();

  async function calculateRoute() {
    if (!originRef.current.value || !destinationRef.current.value) {
      return;
    }
  
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };
  
    directionsService.route(request, (result, status) => {
      if (status === "OK") {
        console.log(result); // Check the results in the console
        setDirectionsResponse(result);
      } else {
        console.error(`Directions request failed with status: ${status}`);
      }
    });
  }
  

  function clearRoute() {
    setDirectionsResponse(null);
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  const onLoadCallback = useCallback((loadedMap) => {
    if (!map) {
      setMap(loadedMap);
    }
  }, [map]);

  return isLoaded ? (
    <div>
                <input
                  type="text"
                  //name="Origin"
                 
                  placeholder="Origin"
                  ref={originRef}
                />
          
                <input
                  type="text"
                 // name="Destination"
                
                  placeholder="Destination"
                  ref={destinationRef}
                />                                          
            
              <button
                type="submit"
                //name="submit"
              
                onClick={calculateRoute}
              >
                Search
              </button>
           
              <button
                type="submit"
               // name="clear"
         
                onClick={clearRoute}
              >
                Clear
              </button>
        
        
        <GoogleMap
          center={center}
          zoom={5}
          mapContainerStyle={{ width: "100%", height: "100vh" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={onLoadCallback}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default MapR1;
