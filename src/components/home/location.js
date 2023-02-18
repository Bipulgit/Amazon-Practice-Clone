import { useEffect, useState } from "react";
import React from "react";
import ListingForm from "../listings/ListingForm";
const GeoLocator = (props) => {
  const [location, setLocation] = useState({
    lat: 51.501364,
    lng: -0.14189,
  });

  //   const handleBoundsChanged = () => {
  //     if (refMap.current) {
  //       const mapCenter = {
  //         lat: refMap.current.map.center.lat(),
  //         lng: refMap.current.map.center.lng(),
  //       };
  //       setListing({ ...listing, latLng: mapCenter });
  //     }
  //   };

  const success = (position) => {
    const coordinates = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setLocation(coordinates);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function(result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          }
        });
    }
  }, []);
  return (
    <div>
      <div className="container" style={{ maxWidth: "500px" }}>
        <ListingForm location={location} />
      </div>
    </div>
  );
};
export default GeoLocator;
