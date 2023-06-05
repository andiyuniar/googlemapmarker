import React, { useMemo, useState, useEffect } from "react";
import { MarkerF } from "@react-google-maps/api";
import { useCsv } from "../useCsv";

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