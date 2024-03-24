import React from "react";
import GoogleMapReact from "google-map-react";

const location = {
  address: "Bv Pte. Umberto Arturo Illia 555, X5000ASS Córdoba",
  lat: -31.422559,
  lng: -64.1789253,
};

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
  

// AIzaSyDBE6cA4pEwygFENwIeWA5nuVEfcJ7Uju0;

export default Map = () => {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDBE6cA4pEwygFENwIeWA5nuVEfcJ7Uju0" }}
          defaultCenter={location}
          defaultZoom={17}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};
