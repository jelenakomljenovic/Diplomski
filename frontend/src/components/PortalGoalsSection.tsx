import * as React from 'react';
import {List, ListItem, ListItemIcon, Typography} from "@mui/material";
import homePageGoalsImage from '../../src/assets/GoalsImage.png';
import {KeyboardDoubleArrowRight} from "@mui/icons-material";

function PortalGoalsSection() {


    return (
        <div style={{backgroundColor: "white", marginTop: -6}}>
            <div style={{
                display: "flex",
                height: "500px",
                backgroundColor: "white",
                marginLeft: "15%",
                marginRight: "15%"
            }}>
                <div style={{width: "60%", display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h2" style={{
                        fontSize: 35,
                        color: "#262566",
                        marginTop: "10%",
                        fontFamily: "roboto",
                        fontWeight: 700
                    }}>Koji su ciljevi portala?</Typography>
                    <Typography style={{
                        fontSize: 16,
                        color: "#6E6E6E",
                        marginTop: "3%",
                        fontFamily: "openSans",
                        marginBottom: "1%"
                    }}>Portal
                        je namijenjen za pružanje podrške u procesu upisa na fakultet i pronalaženju
                        idealnog studijskog programa.
                        Pored toga, na portalu se mogu pronaći korisne smjernice vezane za sam proces upisa, kao i
                        sve ostale informacije koje mogu biti od suštinskog značaja na početku akademskog
                        obrazovanja.
                        Neki od resursa koji se mogu pronaći, a koji mogu biti od pomoći,
                        uključuju:</Typography>
                    <div>
                        <List>
                            <ListItem disableGutters={true}>
                                <ListItemIcon>
                                    <KeyboardDoubleArrowRight style={{color: "#262566"}}/>
                                </ListItemIcon>
                                <Typography style={{
                                    color: "#262566",
                                    fontSize: 16,
                                    fontFamily: "openSans",
                                    fontWeight: "bold",
                                    marginLeft: -20
                                }}>Detaljne informacije o fakultetima</Typography>
                            </ListItem>
                            <ListItem disableGutters={true}>
                                <ListItemIcon>
                                    <KeyboardDoubleArrowRight style={{color: "#262566"}}/>
                                </ListItemIcon>
                                <Typography style={{
                                    color: "#262566",
                                    fontSize: 16,
                                    fontFamily: "openSans",
                                    fontWeight: "bold",
                                    marginLeft: -20
                                }}>Vodič kroz osnovne studentske pojmove</Typography>
                            </ListItem>
                            <ListItem disableGutters={true}>
                                <ListItemIcon>
                                    <KeyboardDoubleArrowRight style={{color: "#262566"}}/>
                                </ListItemIcon>
                                <Typography style={{
                                    color: "#262566",
                                    fontSize: 16,
                                    fontFamily: "openSans",
                                    fontWeight: "bold",
                                    marginLeft: -20
                                }}>Preporuke fakulteta na osnovu vaših ambicija</Typography>
                            </ListItem>
                            <ListItem disableGutters={true}>
                                <ListItemIcon>
                                    <KeyboardDoubleArrowRight style={{color: "#262566"}}/>
                                </ListItemIcon>
                                <Typography
                                    style={{
                                        color: "#262566",
                                        fontSize: 16,
                                        fontFamily: "openSans",
                                        fontWeight: "bold",
                                        marginLeft: -20
                                    }}>Prikaz fakulteta koji se nalaze u neposrednoj blizini</Typography>
                            </ListItem>
                        </List>
                    </div>
                </div>
                <img style={{height: "58%", width: "48%", marginTop: "10%", marginLeft: "11%"}}
                     src={homePageGoalsImage}
                     alt={"t"}/>
            </div>
        </div>
    );
}

export default PortalGoalsSection;