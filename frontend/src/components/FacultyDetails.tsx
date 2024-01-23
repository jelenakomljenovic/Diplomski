/*global google*/
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Divider} from "@mui/material";
import {FaLocationDot, FaPhone} from "react-icons/fa6";
import {PiLinkBold} from "react-icons/pi";
import university from "../assets/university.png";
import Map from "./Map";

const google = window.google ? window.google : {}

function FacultyDetails() {
    const [age, setAge] = useState('');
    const [center, setCenter] = useState({lat: 44.772182, lng: 17.191000});
    const [zoom, setZoom] = useState(5);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, [])


    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                height: "24vh",
                width: "91%",
                boxShadow: "5px 5px 20px 3px rgba(0,0,0,.08)",
                marginLeft: "4.4%",
                marginTop: "3%"
            }}>
                {/*<FormControl sx={{ marginTop: 2.5, marginLeft: "88%", minWidth: 140 }} size="small">*/}
                {/*    <InputLabel id="demo-select-small-label">Odaberi</InputLabel>*/}
                {/*    <Select*/}
                {/*        labelId="demo-select-small-label"*/}
                {/*        id="demo-select-small"*/}
                {/*        value={age}*/}
                {/*        label="Age"*/}
                {/*        // onChange={handleChange}*/}
                {/*    >*/}
                {/*        <MenuItem>Osnovne informacije</MenuItem>*/}
                {/*        <MenuItem>Smjerovi</MenuItem>*/}
                {/*        <MenuItem>Uporedi</MenuItem>*/}
                {/*    </Select>*/}
                {/*</FormControl>*/}
                <p style={{
                    fontSize: 15,
                    color: "#3696ab",
                    fontWeight: "bold",
                    marginLeft: "1%",
                    marginTop: "1%",
                    fontFamily: "openSans"
                }}>Informacije o fakultetu</p>
                <Divider style={{
                    backgroundColor: "rgba(84,90,109,0.13)",
                    width: "100%",
                    height: "0.1vh"
                }}/>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={university} alt=""
                         style={{height: "75%", width: "8%", marginLeft: "1%", marginTop: "1%"}}/>
                    <div style={{marginLeft: "3%", marginTop: "1%"}}>
                        <p style={{
                            fontSize: 21,
                            color: "rgba(0,0,0,0.44)",
                            fontWeight: "bold",
                            marginTop: "1%",
                            fontFamily: "openSans"
                        }}>Prirodno-matematički fakultet</p>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", marginLeft: "50%", marginTop: "-4%"}}>
                    <div style={{display: "flex", alignItems: "center", marginTop: "-9.4%"}}>
                        <FaLocationDot style={{marginLeft: "5%", marginRight: "0.5%", color: "rgba(0,0,0,0.57)"}}/>
                        <p style={{fontFamily: "openSans", color: "rgba(0,0,0,0.6)"}}>Dr. Mladena Stojanovića, Banja
                            Luka, 78000</p>
                    </div>
                    <div style={{display: "flex", alignItems: "center", marginTop: "-3.4%"}}>
                        <FaPhone style={{marginLeft: "5%", marginRight: "0.9%", color: "rgba(0,0,0,0.57)"}}/>
                        <p style={{fontFamily: "openSans", color: "rgba(0,0,0,0.6)"}}>051 319 452</p>
                    </div>
                    <div style={{display: "flex", alignItems: "center", marginTop: "-3.4%"}}>
                        <PiLinkBold style={{marginLeft: "5%", marginRight: "0.8%", color: "rgba(0,0,0,0.57)"}}/>
                        <p style={{fontFamily: "openSans", color: "rgba(0,0,0,0.6)"}}>Link na
                            website</p>
                    </div>
                </div>
            </div>
            <div>
                <p style={{
                    fontSize: 17,
                    color: "#3696ab",
                    fontWeight: "bold",
                    marginLeft: "4.4%",
                    marginTop: "2%",
                    fontFamily: "openSans"
                }}>Studijski programi</p>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2.5%",
                    justifyContent: "flex-start",
                    paddingTop: "1%",
                    marginLeft: "4.4%",
                    height: "88.2vh",
                    // backgroundColor: "#f8f8fb"
                }}>
                    <div style={{
                        width: "405px",
                        height: "184px",
                        marginBottom: "2.5%",
                        backgroundColor: "#ffffff",
                        boxShadow: "5px 5px 20px 3px rgba(0,0,0,.08)"
                    }}
                    >
                    </div>
                </div>
            </div>
            <div>
                <Map/>
            </div>
        </>
    );
}

export default FacultyDetails;