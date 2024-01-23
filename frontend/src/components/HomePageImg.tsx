import * as React from 'react';
import {Button, Typography} from "@mui/material";
import homePageImage from '../../src/assets/tes.png';


function HomePageImg() {

    return (
        <div>
            <div style={{position: "relative"}}>
                <img style={{height: "93%", width: "100%"}} src={homePageImage} alt={"t"}/>
            </div>
            <div style={{position: "absolute", marginTop: "-28.6%", marginLeft: "15%"}}>
                <Typography style={{fontSize: 16, fontFamily: "roboto", fontWeight: "bold", color: "#12b48b"}}>Pomoć
                    pri odabiru fakulteta</Typography>
                <Typography
                    style={{
                        fontSize: 34,
                        fontFamily: "roboto",
                        fontWeight: "bold",
                        color: "#262566",
                        marginTop: "1.5%"
                    }}>Pronađite
                    fakultet koji odgovara<br/>vašim interesovanjima</Typography>
                <Typography style={{fontSize: 16, fontFamily: "roboto", color: "#6E6E6E", marginTop: "2%"}}>Odabir
                    fakulteta
                    može biti izazovan kada imate različita interesovanja<br/> i niste sasvim sigurni koji pravac
                    odabrati.</Typography>
                <Button style={{
                    backgroundColor: "#12b48b",
                    color: "white",
                    height: "46px",
                    width: "140px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "13%"
                }}>Pogledaj više</Button>
            </div>
        </div>
    );
}

export default HomePageImg;