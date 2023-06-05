
import { GoogleMap, useLoadScript, MarkerF, Marker } from "@react-google-maps/api";
import React, { useMemo, useEffect, useState } from "react";
import './App.css';
import { useCsv } from "./useCsv";

function App() {
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_GOOGLE_API_KEY
  });
  const { parsingCsv } = useCsv();
  const [isReady, setIsReady] = useState(false);

  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  const center = useMemo(() => ({ lat: -7.969, lng: -14.394 }), []);

  useEffect(() => {
    console.log('useEffect');
    fetch('./gadb_country_declatlon.csv')
      .then(resp => resp.text())
      .then(restext => {
        setIsReady(true);
        parsingCsv(restext, getData);
    })
  }, []);

  //const MarkerTest = useMemo(() => GenerateMarker(), []);

  const [testData, setTestData] = useState([]);
  const getData = (result) => {
    setTestData(result.data);
  }
  

  const GenerateMarker = (result) => {
    console.log('GEMERATE MARKER');
    const data = testData;
    console.log('DATA:', data);
    console.log('isready:', isReady);



    return data !== undefined && (
      <>
          {
              data?.map((pos, idx) => {
                console.log('pos:', pos[1], pos[2]);
                 return (<MarkerF position={{ lat: pos[1], lng: pos[2] }} />)
              })
          }
      </>
     )
  }

  return (
    <div className="App">
      { !isLoaded ? (<h2>Loading..</h2>) :
          (
            <GoogleMap mapContainerClassName="map-container" zoom={1} center={center}>
              <GenerateMarker />
            </GoogleMap>
          ) 
      }
      
    </div>
  );
}

export default App;
