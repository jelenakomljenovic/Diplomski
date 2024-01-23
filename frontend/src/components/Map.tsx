import * as React from 'react';
import {useEffect, useState} from 'react';
import {CreateFacultyRequest} from "../api/faculty/faculty";
import {getAllFaculties} from "../api/faculty/facultyApi";
import useStyles from './../styles';
import {GoogleMap, Marker, MarkerF, useJsApiLoader} from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
};

const center = {
    lat: 43.653225,
    lng: -79.383186,
}

function Map() {
    const [faculties, setFaculties] = useState<Array<CreateFacultyRequest>>([]);
    const classes = useStyles();
    const [position, setPosition] = useState({lat: 44.772182, lng: 17.191000});
    const [markers, setMarkers] = useState([]);

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDRF-uBMJSs0aA6MkaVqeOvoZl76q6Spho",
        libraries: ["places"],
    });

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    useEffect(() => {
        console.log("da")
        faculties.map((marker) => console.log(Number.parseFloat(marker.coordinates.split(',')[0])));
    }, [faculties])

    // if (loadError) return "Error loading maps";
    // if (!isLoaded) return "Loading maps";

    useEffect(() => {
        console.log(position)
        const getFaculties = async () => {
            const facultiesRes = await getAllFaculties();
            setFaculties(facultiesRes.data);
        }
        getFaculties();
    }, [])

    return (
        <div style={{width: "100%", height: "85vh"}}>
            {isLoaded ? <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={position}
                >
                {
                    faculties.map((marker) => <MarkerF key={marker.id} position={{lat: Number.parseFloat(marker.coordinates.split(',')[0]) , lng: Number.parseFloat(marker.coordinates.split(',')[1])}}/>)
                }
            {/*<MarkerF key={52} position={{lat: 44.779150614923346, lng: 17.198506568451887}}/>*/}
            {/*        <MarkerF key={52} position={{lat: 44.765193372900434, lng: 17.198316853108267}}/>*/}

                </GoogleMap>
                : null
            }
            {/*<GoogleMapReact bootstrapURLKeys={{key: "AIzaSyDRF-uBMJSs0aA6MkaVqeOvoZl76q6Spho"}}*/}
            {/*                defaultCenter={{lat: 0, lng: 0}}*/}
            {/*                center={coordinates}*/}
            {/*                onChange={(e) => {*/}
            {/*                    setCoordinates({lat: e.center.lat, lng: e.center.lng});*/}
            {/*                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});*/}
            {/*                }}*/}
            {/*                defaultZoom={14}*/}
            {/*                margin={[50, 50, 50, 50]}*/}
            {/*>*/}

            {/*{faculties.map((faculty) => (*/}
            {/*    <Marker*/}
            {/*        key={faculty.id}*/}
            {/*        position={{lat: faculty.}}*/}
            {/*        onLoad={marker => markerLoadHandler(marker, place)}*/}
            {/*        onClick={event => markerClickHandler(event, place)}*/}
            {/*        // Not required, but if you want a custom icon:*/}
            {/*        icon={{*/}
            {/*            path:*/}
            {/*                "M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z",*/}
            {/*            fillColor: "#0000ff",*/}
            {/*            fillOpacity: 1.0,*/}
            {/*            strokeWeight: 0,*/}
            {/*            scale: 1.25*/}
            {/*        }}*/}
            {/*    />*/}
            {/*))}*/}

            {/*{faculties?.map((faculty, i) => (*/}
            {/*    <Marker position={{lat: 44.76688431955418, lng:  17.1869570396156}} icon={<LocationOnOutlinedIcon/>}></Marker>*/}
            {/*))}*/}
            {/*</GoogleMapReact>*/}
        </div>
    );

}

export default Map;