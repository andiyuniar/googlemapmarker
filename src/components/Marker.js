import React, { useMemo } from "react";
import { MarkerF } from "@react-google-maps/api";

const Marker = ({position, arrPosition}) => {

    const markerComponent = useMemo(() => {
           return (
            <>
                {
                    arrPosition?.map((pos, idx) => (
                        <MarkerF key={pos.lat} position={{ lat: pos.lat, lng: pos.lng }} />
                    ))
                }
            </>
           )
    }, []);

    return markerComponent;
}

export default Marker;