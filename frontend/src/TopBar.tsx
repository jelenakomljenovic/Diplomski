import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../src/assets/logo3.png';
import textLogo from '../src/assets/textLogo.png';
import {IoIosArrowDown} from "react-icons/io";
import {
    Box,
    CssBaseline,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Slide,
    Theme,
    useScrollTrigger
} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import {makeStyles} from "@mui/styles";
import {paths} from "./constants/urlConstants";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    nested: {
        paddingLeft: theme.spacing(2),
    },
    nestedSecondLevel: {
        paddingLeft: theme.spacing(5)
    }
}));

const paperProps = {
    elevation: 0,
    sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    },
}

export function TopBar() {
    const trigger = useScrollTrigger();
    const classes = useStyles();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event: any) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }
    const [firstMouseClick, setFirstMouseClick] = useState(false);
    const [secondMouseClick, setSecondMouseClick] = useState(false);
    const [thirdMouseClick, setThirdMouseClick] = useState(false);

    const [freshmanEntered, setFreshmanEntered] = useState(false);
    const [bachelorEntered, setBachelorEntered] = useState(false);
    const [transcriptEntered, setTranscriptEntered] = useState(false);

    const [menuIndex, setMenuIndex] = React.useState<null | number>(null);
    const itemProps = {
        onClick: () => setMenuIndex(null),
    };
    const createHandleLeaveMenu =
        (index: number) => (getIsOnButton: () => boolean) => {
            setTimeout(() => {
                const isOnButton = getIsOnButton();
                if (!isOnButton) {
                    setMenuIndex((latestIndex: null | number) => {
                        if (index === latestIndex) {
                            return null;
                        }
                        return latestIndex;
                    });
                }
            }, 200);
        };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar component="nav"
                        sx={{zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#204066", height: 75}}>
                    <Toolbar>
                        <div style={{marginLeft: "2.3%", display: "flex", alignItems: "centar", width: "100%"}}>
                            <img src={logo} alt="logo" style={{width: "auto", height: "auto"}}/>
                            <img src={textLogo} alt="textLogo"
                                 style={{width: "140px", height: "40px", margin: "auto", marginLeft: -7}}/>
                            <LockIcon
                                style={{height: 25, width: 25, color: "#fff", margin: "auto", marginLeft: "82%"}}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: "#fff",
                    height: 55,
                    marginTop: 8.1,
                    boxShadow: "0 0 20px 3px rgba(0,0,0,.05)"
                }} elevation={0}>
                    <Toolbar>
                        <MenuList style={{marginBottom: "0.6%", marginLeft: "2%", display: "flex"}}>
                            <ListItemButton className={classes.nested}
                                            style={{paddingLeft: 24, backgroundColor: "white"}}
                                            onClick={() => navigate(paths.HOME)}>
                                {/*<ListItemIcon>*/}
                                {/*    <FaHome style={{color: "rgba(32,64,102,0.65)", width: "16px", height: "16px"}}/>*/}
                                {/*</ListItemIcon>*/}
                                <ListItemText disableTypography sx={{
                                    color: "rgba(32,64,102,0.79)",
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    fontFamily: "roboto"
                                }}>Početna
                                    stranica</ListItemText>
                            </ListItemButton>
                            <ListItemButton className={classes.nested}
                                            aria-owns={anchorEl ? "simple-menu" : undefined}
                                            style={{paddingLeft: 24, backgroundColor: "white"}}
                                            onClick={() => navigate(paths.FACULTIES)}
                                            aria-haspopup="true">
                                            {/*// onMouseOver={handleClick}>*/}
                                <ListItemText disableTypography style={{
                                    color: "rgba(32,64,102,0.79)",
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    fontFamily: "roboto"
                                }}>Fakulteti</ListItemText>
                                <IoIosArrowDown style={{
                                    color: "rgba(32,64,102,0.79)",
                                    width: "15px",
                                    height: "15px",
                                    marginLeft: 6,
                                    marginTop: 1.2
                                }}/>
                                <Menu
                                    id="menu-appbar"
                                    sx={{mt: '45px'}}
                                    keepMounted
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    MenuListProps={{ onMouseLeave: handleClose }}
                                    anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                                    transformOrigin={{vertical: 'top', horizontal: 'right',}}
                                >
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>My account</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </Menu>
                            </ListItemButton>
                        </MenuList>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Slide appear={true} direction="down" in={trigger}>
                <AppBar sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: "rgb(250,250,250)",
                    height: 65
                }}>
                    <Toolbar>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Box component="main" sx={{marginTop: 6}}>
                <Toolbar/>
                <div>
                    {/*ovaj dio se premjesta, div gornji ostaje sa starim dijelom*/}
                    {/*<div style={{position: "relative", width: "100%"}}>*/}
                    {/*    <Typography variant="h2" style={{*/}
                    {/*        fontSize: 15,*/}
                    {/*        color: "rgba(32,64,102,0.7)",*/}
                    {/*        marginTop: "50%",*/}
                    {/*        marginLeft: "100%",*/}
                    {/*        fontFamily: "roboto",*/}
                    {/*        fontWeight: 700,*/}
                    {/*        textTransform: "uppercase"*/}
                    {/*    }}>Fakulteti*/}
                    {/*    </Typography>*/}
                    {/*    <div>*/}

                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div style={{position:"relative"}}>*/}
                    {/*    <img style={{height: "93%", width: "100%"}} src={homePageImage} alt={"t"}/>*/}
                    {/*</div>*/}
                    {/*<div style={{position: "absolute", marginTop: "-28.6%", marginLeft: "15%"}}>*/}
                    {/*    <Typography style={{fontSize: 16, fontFamily: "roboto", fontWeight: "bold", color: "#12b48b"}}>Pomoć*/}
                    {/*        pri odabiru fakulteta</Typography>*/}
                    {/*    <Typography style={{fontSize: 34, fontFamily: "roboto", fontWeight: "bold", color: "#262566", marginTop: "1.5%"}}>Pronađite*/}
                    {/*        fakultet koji odgovara<br/>vašim interesovanjima</Typography>*/}
                    {/*    <Typography style={{fontSize: 16, fontFamily: "roboto", color: "#6E6E6E", marginTop: "2%"}}>Odabir fakulteta može biti izazovan kada imate različita interesovanja<br/> i niste sasvim sigurni koji pravac odabrati.</Typography>*/}
                    {/*    <Button style={{*/}
                    {/*        backgroundColor: "#12b48b",*/}
                    {/*        color: "white",*/}
                    {/*        height: "46px",*/}
                    {/*        width: "140px",*/}
                    {/*        fontWeight: "bold",*/}
                    {/*        textAlign: "center",*/}
                    {/*        marginTop: "13%"*/}
                    {/*    }}>Pogledaj više</Button>*/}
                    {/*</div>*/}


                    {/*</div>*/}
                    {/*<div style={{*/}
                    {/*    display: "flex",*/}
                    {/*    height: "500px",*/}
                    {/*    backgroundColor: "white",*/}
                    {/*    marginLeft: "15%",*/}
                    {/*    marginRight: "15%"*/}
                    {/*}}>*/}
                    {/*    <div style={{width: "60%", display: 'flex', flexDirection: 'column'}}>*/}
                    {/*        <Typography variant="h2" style={{*/}
                    {/*            fontSize: 35,*/}
                    {/*            color: "#262566",*/}
                    {/*            marginTop: "10%",*/}
                    {/*            fontFamily: "roboto",*/}
                    {/*            fontWeight: 700*/}
                    {/*        }}>Koji su ciljevi portala?</Typography>*/}
                    {/*        <Typography style={{*/}
                    {/*            fontSize: 16,*/}
                    {/*            color: "#6E6E6E",*/}
                    {/*            marginTop: "3%",*/}
                    {/*            fontFamily: "openSans",*/}
                    {/*            marginBottom: "1%"*/}
                    {/*        }}>Portal*/}
                    {/*            je namijenjen za pružanje podrške u procesu upisa na fakultet i pronalaženju*/}
                    {/*            idealnog studijskog programa.*/}
                    {/*            Pored toga, na portalu se mogu pronaći korisne smjernice vezane za sam proces upisa, kao i*/}
                    {/*            sve ostale informacije koje mogu biti od suštinskog značaja na početku akademskog*/}
                    {/*            obrazovanja.*/}
                    {/*            Neki od resursa koji se mogu pronaći, a koji mogu biti od pomoći,*/}
                    {/*            uključuju:</Typography>*/}
                    {/*        <div>*/}
                    {/*            <List>*/}
                    {/*                <ListItem disableGutters={true}>*/}
                    {/*                    <ListItemIcon>*/}
                    {/*                        <KeyboardDoubleArrowRight style={{color: "#262566"}}/>*/}
                    {/*                    </ListItemIcon>*/}
                    {/*                    <Typography style={{*/}
                    {/*                        color: "#262566",*/}
                    {/*                        fontSize: 16,*/}
                    {/*                        fontFamily: "openSans",*/}
                    {/*                        fontWeight: "bold",*/}
                    {/*                        marginLeft: -20*/}
                    {/*                    }}>Detaljne informacije o fakultetima</Typography>*/}
                    {/*                </ListItem>*/}
                    {/*                <ListItem disableGutters={true}>*/}
                    {/*                    <ListItemIcon>*/}
                    {/*                        <KeyboardDoubleArrowRight style={{color: "#262566"}}/>*/}
                    {/*                    </ListItemIcon>*/}
                    {/*                    <Typography style={{*/}
                    {/*                        color: "#262566",*/}
                    {/*                        fontSize: 16,*/}
                    {/*                        fontFamily: "openSans",*/}
                    {/*                        fontWeight: "bold",*/}
                    {/*                        marginLeft: -20*/}
                    {/*                    }}>Vodič kroz osnovne studentske pojmove</Typography>*/}
                    {/*                </ListItem>*/}
                    {/*                <ListItem disableGutters={true}>*/}
                    {/*                    <ListItemIcon>*/}
                    {/*                        <KeyboardDoubleArrowRight style={{color: "#262566"}}/>*/}
                    {/*                    </ListItemIcon>*/}
                    {/*                    <Typography style={{*/}
                    {/*                        color: "#262566",*/}
                    {/*                        fontSize: 16,*/}
                    {/*                        fontFamily: "openSans",*/}
                    {/*                        fontWeight: "bold",*/}
                    {/*                        marginLeft: -20*/}
                    {/*                    }}>Preporuke fakulteta na osnovu vaših ambicija</Typography>*/}
                    {/*                </ListItem>*/}
                    {/*                <ListItem disableGutters={true}>*/}
                    {/*                    <ListItemIcon>*/}
                    {/*                        <KeyboardDoubleArrowRight style={{color: "#262566"}}/>*/}
                    {/*                    </ListItemIcon>*/}
                    {/*                    <Typography*/}
                    {/*                        style={{*/}
                    {/*                            color: "#262566",*/}
                    {/*                            fontSize: 16,*/}
                    {/*                            fontFamily: "openSans",*/}
                    {/*                            fontWeight: "bold",*/}
                    {/*                            marginLeft: -20*/}
                    {/*                        }}>Prikaz fakulteta koji se nalaze u neposrednoj blizini</Typography>*/}
                    {/*                </ListItem>*/}
                    {/*            </List>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <img style={{height: "58%", width: "48%", marginTop: "10%", marginLeft: "11%"}}*/}
                    {/*         src={homePageGoalsImage}*/}
                    {/*         alt={"t"}/>*/}
                    {/*</div>*/}


                    {/*<div style={{height: "660px", backgroundColor: "#f9fbfe"}}>*/}
                    {/*    <Typography variant="h2" style={{*/}
                    {/*        fontSize: 32,*/}
                    {/*        color: "#262566",*/}
                    {/*        fontFamily: "roboto",*/}
                    {/*        textAlign: "center",*/}
                    {/*        paddingTop: "3.5%",*/}
                    {/*        fontWeight: 700*/}
                    {/*    }}>Šta je potrebno znati prije upisa na fakultet?</Typography>*/}
                    {/*    <Typography style={{*/}
                    {/*        fontSize: 16,*/}
                    {/*        color: "#6E6E6E",*/}
                    {/*        width: "54%",*/}
                    {/*        marginTop: "1%",*/}
                    {/*        fontFamily: "openSans",*/}
                    {/*        marginLeft: "24%",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        textAlign: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}>Upis na fakultet predstavlja važan korak u životu svakog studenta.*/}
                    {/*        Upravo iz tog razloga, informisanost igra ključnu ulogu.*/}
                    {/*        Da biste se adekvatno pripremili za sam proces upisa, korisno je obratiti pažnju na*/}
                    {/*        sljedeće:</Typography>*/}
                    {/*    <div style={{display: "flex", gap: "3%", justifyContent: "center", paddingTop: "3%"}}>*/}
                    {/*        <div style={{*/}
                    {/*            width: "21%",*/}
                    {/*            height: "365px",*/}
                    {/*            backgroundColor: "transparent",*/}
                    {/*            border: "1px solid #12b48b",*/}
                    {/*            display: "flex",*/}
                    {/*            flexDirection: "column",*/}
                    {/*            justifyContent: "center",*/}
                    {/*            alignItems: "center",*/}
                    {/*            marginTop: firstMouseClick ? "-7px" : "0px"*/}
                    {/*        }}*/}
                    {/*             onMouseEnter={() => setFirstMouseClick(true)}*/}
                    {/*             onMouseLeave={() => setFirstMouseClick(false)}>*/}
                    {/*            <div style={{*/}
                    {/*                height: "22%",*/}
                    {/*                width: "26%",*/}
                    {/*                borderRadius: "50%",*/}
                    {/*                backgroundColor: "white",*/}
                    {/*                display: "flex",*/}
                    {/*                flexDirection: "column",*/}
                    {/*                justifyContent: "center",*/}
                    {/*                alignItems: "center",*/}
                    {/*                boxShadow: "0 0 20px 3px rgba(0,0,0,.05)"*/}
                    {/*            }}>*/}
                    {/*                <img style={{height: "61%", width: "70%"}}*/}
                    {/*                     src={faculty}*/}
                    {/*                     alt={"t"}/>*/}
                    {/*            </div>*/}
                    {/*            <p style={{*/}
                    {/*                color: "#204066",*/}
                    {/*                fontFamily: "roboto",*/}
                    {/*                fontSize: 20,*/}
                    {/*                marginTop: "9%",*/}
                    {/*                fontWeight: "bold"*/}
                    {/*            }}>Izbor fakulteta</p>*/}
                    {/*            <Typography style={{*/}
                    {/*                fontSize: 14,*/}
                    {/*                color: "#6E6E6E",*/}
                    {/*                marginLeft: "4%",*/}
                    {/*                marginRight: "4%",*/}
                    {/*                marginBottom: "5%",*/}
                    {/*                fontFamily: "openSans",*/}
                    {/*                textAlign: "center"*/}
                    {/*            }}>*/}
                    {/*                Kako biste donijeli*/}
                    {/*                odluku koja je u skladu sa vašim interesovanjima i poslovnim ambicijama, najvažnije je*/}
                    {/*                se dobro informisati o studijskom planu i programu svakog fakulteta.*/}
                    {/*                Takođe, dobro je uzeti u obzir i alternativnu opciju, ukoliko se desi da ne ispunite*/}
                    {/*                kriterijume*/}
                    {/*                za upis na željeni fakultet.*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*        <div style={{*/}
                    {/*            width: "21%",*/}
                    {/*            height: "365px",*/}
                    {/*            backgroundColor: "transparent",*/}
                    {/*            border: "1px solid #12b48b",*/}
                    {/*            display: "flex",*/}
                    {/*            flexDirection: "column",*/}
                    {/*            justifyContent: "center",*/}
                    {/*            alignItems: "center",*/}
                    {/*            marginTop: secondMouseClick ? "-7px" : "0px"*/}
                    {/*        }}*/}
                    {/*             onMouseEnter={() => setSecondMouseClick(true)}*/}
                    {/*             onMouseLeave={() => setSecondMouseClick(false)}>*/}
                    {/*            <div style={{*/}
                    {/*                height: "22%",*/}
                    {/*                width: "26%",*/}
                    {/*                borderRadius: "50%",*/}
                    {/*                backgroundColor: "white",*/}
                    {/*                display: "flex",*/}
                    {/*                flexDirection: "column",*/}
                    {/*                justifyContent: "center",*/}
                    {/*                alignItems: "center",*/}
                    {/*                boxShadow: "0 0 20px 3px rgba(0,0,0,.05)"*/}
                    {/*            }}>*/}
                    {/*                <img style={{height: "38%", width: "35%"}}*/}
                    {/*                     src={exam}*/}
                    {/*                     alt={"t"}/>*/}
                    {/*            </div>*/}
                    {/*            <p style={{*/}
                    {/*                color: "#204066",*/}
                    {/*                fontFamily: "roboto",*/}
                    {/*                fontSize: 20,*/}
                    {/*                marginTop: "9%",*/}
                    {/*                fontWeight: "bold",*/}
                    {/*                justifyContent: "center"*/}
                    {/*            }}>Prijemni ispit</p>*/}
                    {/*            <Typography style={{*/}
                    {/*                fontSize: 14,*/}
                    {/*                color: "#6E6E6E",*/}
                    {/*                marginLeft: "4%",*/}
                    {/*                marginRight: "4%",*/}
                    {/*                marginBottom: "5%",*/}
                    {/*                fontFamily: "openSans",*/}
                    {/*                textAlign: "center"*/}
                    {/*            }}>*/}
                    {/*                Prijemni ispit igra ključnu ulogu u selekciji studenata i predstavlja mjerilo*/}
                    {/*                sposobnosti kandidata u određenoj oblasti.*/}
                    {/*                Na svakom fakultetu postoji posebna literatura, koja se*/}
                    {/*                koristi za efikasnu pripremu prijemnog ispita,*/}
                    {/*                dok određeni fakulteti drže i pripremnu nastavu kako bi dodatno upoznali studente sa*/}
                    {/*                strukturom ispita.*/}

                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*        <div style={{*/}
                    {/*            width: "21%",*/}
                    {/*            height: "365px",*/}
                    {/*            backgroundColor: "transparent",*/}
                    {/*            border: "1px solid #12b48b",*/}
                    {/*            display: "flex",*/}
                    {/*            flexDirection: "column",*/}
                    {/*            justifyContent: "center",*/}
                    {/*            alignItems: "center",*/}
                    {/*            marginTop: thirdMouseClick ? "-7px" : "0px"*/}
                    {/*        }}*/}
                    {/*             onMouseEnter={() => setThirdMouseClick(true)}*/}
                    {/*             onMouseLeave={() => setThirdMouseClick(false)}>*/}
                    {/*            <div style={{*/}
                    {/*                height: "24%",*/}
                    {/*                width: "24%",*/}
                    {/*                borderRadius: "50%",*/}
                    {/*                backgroundColor: "white",*/}
                    {/*                display: "flex",*/}
                    {/*                flexDirection: "column",*/}
                    {/*                justifyContent: "center",*/}
                    {/*                alignItems: "center",*/}
                    {/*                boxShadow: "0 0 20px 3px rgba(0,0,0,.05)"*/}
                    {/*            }}>*/}
                    {/*                <img style={{height: "66%", width: "75%"}}*/}
                    {/*                     src={faculty}*/}
                    {/*                     alt={"t"}/>*/}
                    {/*            </div>*/}
                    {/*            <p style={{*/}
                    {/*                color: "#204066",*/}
                    {/*                fontFamily: "roboto",*/}
                    {/*                fontSize: 20,*/}
                    {/*                marginTop: "7%",*/}
                    {/*                fontWeight: "bold",*/}
                    {/*                justifyContent: "center"*/}
                    {/*            }}>Školarina</p>*/}
                    {/*            <Typography style={{*/}
                    {/*                fontSize: 14,*/}
                    {/*                color: "#6E6E6E",*/}
                    {/*                marginLeft: "4%",*/}
                    {/*                marginRight: "4%",*/}
                    {/*                marginBottom: "5%",*/}
                    {/*                fontFamily: "openSans",*/}
                    {/*                textAlign: "center"*/}
                    {/*            }}>*/}
                    {/*                Školarina predstavlja dodatni faktor koji bi trebalo uzeti u obzir prilikom odabira*/}
                    {/*                fakulteta.*/}
                    {/*                Pažljivo istražite dostupne opcije finansijske podrške tokom studiranja poput:*/}
                    {/*                stipendija, mogućnosti za rad tokom studija kao i drugih načina podrške koji mogu*/}
                    {/*                značajno uticati na budžet i iskustvo tokom fakultetskog obrazovanja.*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div style={{height: "700px", backgroundColor: "#ffffff"}}>*/}
                    {/*    <Typography variant="h2" style={{*/}
                    {/*        fontSize: 32,*/}
                    {/*        color: "#262566",*/}
                    {/*        fontFamily: "roboto",*/}
                    {/*        textAlign: "center",*/}
                    {/*        paddingTop: "3.5%",*/}
                    {/*        fontWeight: 700*/}
                    {/*    }}>Koja su značenja osnovnih studentskih pojmova?</Typography>*/}
                    {/*    <Typography style={{*/}
                    {/*        fontSize: 16,*/}
                    {/*        color: "#6E6E6E",*/}
                    {/*        width: "68%",*/}
                    {/*        marginTop: "1%",*/}
                    {/*        fontFamily: "openSans",*/}
                    {/*        marginLeft: "16%",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        textAlign: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}> Sigurno ste već mnogo puta čuli razne izraze koji se koriste u svakodnevnom govoru između*/}
                    {/*        studenata, ali možda niste bili potpuno sigurni šta tačno znače.*/}
                    {/*        Upravo iz tog razloga, pripremili smo vodič koji će vam pružiti jasna i jednostavna objašnjenja,*/}
                    {/*        te omogućiti lakše snalaženje.</Typography>*/}

                    {/*<div style={{display: "flex", gap: "2%", justifyContent: "center", paddingTop: "3%"}}>*/}
                    {/*    <div style={{*/}
                    {/*        width: "18%",*/}
                    {/*        height: "165px",*/}
                    {/*        backgroundColor: freshmanEntered ? "rgba(19,157,112,0.75)" : "#effffb",*/}
                    {/*        border: "1px solid #12b48b",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}*/}
                    {/*         onMouseEnter={() => setFreshmanEntered(true)}*/}
                    {/*         onMouseLeave={() => setFreshmanEntered(false)}*/}
                    {/*    >*/}
                    {/*        <p style={{*/}
                    {/*            color: freshmanEntered ? "white" : "#204066",*/}
                    {/*            fontFamily: "roboto",*/}
                    {/*            fontSize: 20,*/}
                    {/*            marginTop: "2%",*/}
                    {/*            fontWeight: "bold"*/}
                    {/*        }}>Brucoš</p>*/}
                    {/*        <Typography style={{*/}
                    {/*            fontSize: 14,*/}
                    {/*            color: freshmanEntered ? "white" : "#6E6E6E",*/}
                    {/*            marginLeft: "4%",*/}
                    {/*            marginRight: "4%",*/}
                    {/*            marginBottom: "5%",*/}
                    {/*            fontFamily: "openSans",*/}
                    {/*            textAlign: "center"*/}
                    {/*        }}>*/}
                    {/*            Termin koji se koristi za označavanje osobe koja je upravo upisala fakultet i*/}
                    {/*            započela svoju prvu godinu studija.*/}
                    {/*        </Typography>*/}
                    {/*    </div>*/}
                    {/*    <div style={{*/}
                    {/*        width: "18%",*/}
                    {/*        height: "165px",*/}
                    {/*        backgroundColor: bachelorEntered ? "rgba(19,157,112,0.75)" : "#effffb",*/}
                    {/*        border: "1px solid #12b48b",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}*/}
                    {/*         onMouseEnter={() => setBachelorEntered(true)}*/}
                    {/*         onMouseLeave={() => setBachelorEntered(false)}*/}
                    {/*    >*/}
                    {/*        <p style={{*/}
                    {/*            color: bachelorEntered ? "white" : "#204066",*/}
                    {/*            fontFamily: "roboto",*/}
                    {/*            fontSize: 20,*/}
                    {/*            marginTop: "2%",*/}
                    {/*            fontWeight: "bold",*/}
                    {/*            justifyContent: "center"*/}
                    {/*        }}>Bachelor – Bačelor</p>*/}
                    {/*        <Typography style={{*/}
                    {/*            fontSize: 14,*/}
                    {/*            color: bachelorEntered ? "white" : "#6E6E6E",*/}
                    {/*            marginLeft: "4%",*/}
                    {/*            marginRight: "4%",*/}
                    {/*            marginBottom: "5%",*/}
                    {/*            fontFamily: "openSans",*/}
                    {/*            textAlign: "center"*/}
                    {/*        }}>*/}
                    {/*            Akademski naziv kojim se označava stepen obrazovanja koji se stiče završetkom prvog*/}
                    {/*            ciklusa studija.*/}
                    {/*        </Typography>*/}
                    {/*    </div>*/}
                    {/*    <div style={{*/}
                    {/*        width: "18%",*/}
                    {/*        height: "165px",*/}
                    {/*        backgroundColor: "#effffb",*/}
                    {/*        border: "1px solid #12b48b",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}*/}
                    {/*    >*/}
                    {/*        <p style={{*/}
                    {/*            color: "#204066",*/}
                    {/*            fontFamily: "roboto",*/}
                    {/*            fontSize: 20,*/}
                    {/*            marginTop: "2%",*/}
                    {/*            fontWeight: "bold",*/}
                    {/*            justifyContent: "center"*/}
                    {/*        }}>Semestar</p>*/}
                    {/*        <Typography style={{*/}
                    {/*            fontSize: 14,*/}
                    {/*            color: "#6E6E6E",*/}
                    {/*            marginLeft: "4%",*/}
                    {/*            marginRight: "4%",*/}
                    {/*            marginBottom: "5%",*/}
                    {/*            fontFamily: "openSans",*/}
                    {/*            textAlign: "center"*/}
                    {/*        }}>*/}
                    {/*            Semestar je period u akademskoj godini, podijeljen na zimski i ljetni dio, što je*/}
                    {/*            analogno polugodištu u osnovnim i srednjim školama.*/}
                    {/*        </Typography>*/}
                    {/*    </div>*/}
                    {/*    <div style={{*/}
                    {/*        width: "18%",*/}
                    {/*        height: "165px",*/}
                    {/*        backgroundColor: transcriptEntered ? "rgba(19,157,112,0.75)" : "#effffb",*/}
                    {/*        border: "1px solid #12b48b",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}*/}
                    {/*         onMouseEnter={() => setTranscriptEntered(true)}*/}
                    {/*         onMouseLeave={() => setTranscriptEntered(false)}*/}
                    {/*    >*/}
                    {/*        <p style={{*/}
                    {/*            color: transcriptEntered ? "white" : "#204066",*/}
                    {/*            fontFamily: "roboto",*/}
                    {/*            fontSize: 20,*/}
                    {/*            marginTop: "2%",*/}
                    {/*            fontWeight: "bold",*/}
                    {/*            justifyContent: "center"*/}
                    {/*        }}>Indeks</p>*/}
                    {/*        <Typography style={{*/}
                    {/*            fontSize: 14,*/}
                    {/*            color: transcriptEntered ? "white" : "#6E6E6E",*/}
                    {/*            marginLeft: "4%",*/}
                    {/*            marginRight: "4%",*/}
                    {/*            marginBottom: "5%",*/}
                    {/*            fontFamily: "openSans",*/}
                    {/*            textAlign: "center"*/}
                    {/*        }}>*/}
                    {/*            Studentska knjižica koja služi za evidentiranje ocjena koje su dobijene na ispitima.*/}

                    {/*        </Typography>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div style={{display: "flex", gap: "2%", justifyContent: "center", paddingTop: "3%"}}>*/}
                    {/*    <div style={{*/}
                    {/*        width: "18%",*/}
                    {/*        height: "165px",*/}
                    {/*        backgroundColor: freshmanEntered ? "rgba(19,157,112,0.75)" : "#effffb",*/}
                    {/*        border: "1px solid #12b48b",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}*/}
                    {/*         onMouseEnter={() => setFreshmanEntered(true)}*/}
                    {/*         onMouseLeave={() => setFreshmanEntered(false)}*/}
                    {/*    >*/}
                    {/*        <p style={{*/}
                    {/*            color: freshmanEntered ? "white" : "#204066",*/}
                    {/*            fontFamily: "roboto",*/}
                    {/*            fontSize: 20,*/}
                    {/*            marginTop: "2%",*/}
                    {/*            fontWeight: "bold"*/}
                    {/*        }}>Kolokvijum</p>*/}
                    {/*        <Typography style={{*/}
                    {/*            fontSize: 14,*/}
                    {/*            color: freshmanEntered ? "white" : "#6E6E6E",*/}
                    {/*            marginLeft: "4%",*/}
                    {/*            marginRight: "4%",*/}
                    {/*            marginBottom: "5%",*/}
                    {/*            fontFamily: "openSans",*/}
                    {/*            textAlign: "center"*/}
                    {/*        }}>*/}
                    {/*            Termin koji se koristi za označavanje osobe koja je upravo upisala fakultet i*/}
                    {/*            započela svoju prvu godinu studija.*/}
                    {/*        </Typography>*/}
                    {/*    </div>*/}
                    {/*    <div style={{*/}
                    {/*        width: "18%",*/}
                    {/*        height: "165px",*/}
                    {/*        backgroundColor: bachelorEntered ? "rgba(19,157,112,0.75)" : "#effffb",*/}
                    {/*        border: "1px solid #12b48b",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}*/}
                    {/*         onMouseEnter={() => setBachelorEntered(true)}*/}
                    {/*         onMouseLeave={() => setBachelorEntered(false)}*/}
                    {/*    >*/}
                    {/*        <p style={{*/}
                    {/*            color: bachelorEntered ? "white" : "#204066",*/}
                    {/*            fontFamily: "roboto",*/}
                    {/*            fontSize: 20,*/}
                    {/*            marginTop: "2%",*/}
                    {/*            fontWeight: "bold",*/}
                    {/*            justifyContent: "center"*/}
                    {/*        }}>Ispitni rok</p>*/}
                    {/*        <Typography style={{*/}
                    {/*            fontSize: 14,*/}
                    {/*            color: bachelorEntered ? "white" : "#6E6E6E",*/}
                    {/*            marginLeft: "4%",*/}
                    {/*            marginRight: "4%",*/}
                    {/*            marginBottom: "5%",*/}
                    {/*            fontFamily: "openSans",*/}
                    {/*            textAlign: "center"*/}
                    {/*        }}>*/}
                    {/*            Vremenski period tokom kojeg se održavaju ispiti. Broj ispitnih rokova u toku godine je*/}
                    {/*            zakonski definisan.*/}
                    {/*        </Typography>*/}
                    {/*    </div>*/}
                    {/*    <div style={{*/}
                    {/*        width: "18%",*/}
                    {/*        height: "165px",*/}
                    {/*        backgroundColor: "#effffb",*/}
                    {/*        border: "1px solid #12b48b",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}*/}
                    {/*    >*/}
                    {/*        <p style={{*/}
                    {/*            color: "#204066",*/}
                    {/*            fontFamily: "roboto",*/}
                    {/*            fontSize: 20,*/}
                    {/*            marginTop: "2%",*/}
                    {/*            fontWeight: "bold",*/}
                    {/*            justifyContent: "center"*/}
                    {/*        }}>Izborni predmet</p>*/}
                    {/*        <Typography style={{*/}
                    {/*            fontSize: 14,*/}
                    {/*            color: "#6E6E6E",*/}
                    {/*            marginLeft: "4%",*/}
                    {/*            marginRight: "4%",*/}
                    {/*            marginBottom: "5%",*/}
                    {/*            fontFamily: "openSans",*/}
                    {/*            textAlign: "center"*/}
                    {/*        }}>*/}
                    {/*            Predmet koji student može odabrati prema svojim interesovanjima kao dio svog nastavnog*/}
                    {/*            plana i programa, ali koji*/}
                    {/*            nije obavezan za završetak osnovnog studijskog programa.*/}
                    {/*        </Typography>*/}
                    {/*    </div>*/}
                    {/*    <div style={{*/}
                    {/*        width: "18%",*/}
                    {/*        height: "165px",*/}
                    {/*        backgroundColor: transcriptEntered ? "rgba(19,157,112,0.75)" : "#effffb",*/}
                    {/*        border: "1px solid #12b48b",*/}
                    {/*        display: "flex",*/}
                    {/*        flexDirection: "column",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}*/}
                    {/*         onMouseEnter={() => setTranscriptEntered(true)}*/}
                    {/*         onMouseLeave={() => setTranscriptEntered(false)}*/}
                    {/*    >*/}
                    {/*        <p style={{*/}
                    {/*            color: transcriptEntered ? "white" : "#204066",*/}
                    {/*            fontFamily: "roboto",*/}
                    {/*            fontSize: 20,*/}
                    {/*            marginTop: "2%",*/}
                    {/*            fontWeight: "bold",*/}
                    {/*            justifyContent: "center"*/}
                    {/*        }}>Predispitne obaveze</p>*/}
                    {/*        <Typography style={{*/}
                    {/*            fontSize: 14,*/}
                    {/*            color: transcriptEntered ? "white" : "#6E6E6E",*/}
                    {/*            marginLeft: "4%",*/}
                    {/*            marginRight: "4%",*/}
                    {/*            marginBottom: "5%",*/}
                    {/*            fontFamily: "openSans",*/}
                    {/*            textAlign: "center"*/}
                    {/*        }}>*/}
                    {/*            Aktivnosti i zadaci koje studenti moraju ispuniti prije nego što pristupe samom ispitu.*/}
                    {/*            To mogu biti kolokvijumi, projekti, seminarski radovi, kao i bodovi stečeni prisustvom.*/}
                    {/*        </Typography>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </Box>
        </Box>
    );
}

export default TopBar;