"use client";

import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react'

export function Map() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {

    const initMap = async () => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
            version: 'weekly'
        });

        const { Map } = await loader.importLibrary('maps');

        // marker
        const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;


        // map position
        const position = {
            lat: -31.422648,
            lng: -64.178547
        }
        //-31.422648, -64.178547

        //map options
        const mapOptions: google.maps.MapOptions = {
            center: position,
            zoom: 15,
            mapTypeId: 'roadmap'
        }

        // setup the map
        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

        // setup marker
        const marker = new Marker({
            position: position,
            map: map
        });

    }

    // init map on load
    initMap();
  }, []);


  return (
    <div className='h-[600px] w-full' ref={mapRef}></div>
  )
}
