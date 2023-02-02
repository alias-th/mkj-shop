import { FC } from "react";
import React, { useRef, useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import { Box } from "@mui/material";

interface Props {}

const ContactMap: FC<Props> = (props): JSX.Element => {
  const [lng, setLng] = useState(100.3389972);
  const [lat, setLat] = useState(13.6425489);

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiYzg3MDQxZDkiLCJhIjoiY2xkbGV2eHRyMDE0ZzNwbndpdGI3cXB5YSJ9.aAAnq47DHztN0F-EVKI5wg"
      style={{ width: "100%", height: "100%" }}
      initialViewState={{ longitude: lng, latitude: lat, zoom: 15 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <Marker latitude={lat} longitude={lng} />
    </Map>
  );
};

export default ContactMap;
