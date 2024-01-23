import * as React from 'react';
import {useState} from 'react';
import {Typography} from "@mui/material";


function StudentTermsSection() {

    const [freshmanEntered, setFreshmanEntered] = useState(false);
    const [bachelorEntered, setBachelorEntered] = useState(false);
    const [transcriptEntered, setTranscriptEntered] = useState(false);

    return (
        <div style={{height: "700px", backgroundColor: "#ffffff"}}>
            <Typography variant="h2" style={{
                fontSize: 32,
                color: "#262566",
                fontFamily: "roboto",
                textAlign: "center",
                paddingTop: "3.5%",
                fontWeight: 700
            }}>Koja su značenja osnovnih studentskih pojmova?</Typography>
            <Typography style={{
                fontSize: 16,
                color: "#6E6E6E",
                width: "68%",
                marginTop: "1%",
                fontFamily: "openSans",
                marginLeft: "16%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center"
            }}> Sigurno ste već mnogo puta čuli razne izraze koji se koriste u svakodnevnom govoru između
                studenata, ali možda niste bili potpuno sigurni šta tačno znače.
                Upravo iz tog razloga, pripremili smo vodič koji će vam pružiti jasna i jednostavna objašnjenja,
                te omogućiti lakše snalaženje.</Typography>
            <div style={{display: "flex", gap: "2%", justifyContent: "center", paddingTop: "3%"}}>
                <div style={{
                    width: "18%",
                    height: "165px",
                    backgroundColor: freshmanEntered ? "rgba(19,157,112,0.75)" : "#effffb",
                    border: "1px solid #12b48b",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                     onMouseEnter={() => setFreshmanEntered(true)}
                     onMouseLeave={() => setFreshmanEntered(false)}
                >
                    <p style={{
                        color: freshmanEntered ? "white" : "#204066",
                        fontFamily: "roboto",
                        fontSize: 20,
                        marginTop: "2%",
                        fontWeight: "bold"
                    }}>Brucoš</p>
                    <Typography style={{
                        fontSize: 14,
                        color: freshmanEntered ? "white" : "#6E6E6E",
                        marginLeft: "4%",
                        marginRight: "4%",
                        marginBottom: "5%",
                        fontFamily: "openSans",
                        textAlign: "center"
                    }}>
                        Termin koji se koristi za označavanje osobe koja je upravo upisala fakultet i
                        započela svoju prvu godinu studija.
                    </Typography>
                </div>
                <div style={{
                    width: "18%",
                    height: "165px",
                    backgroundColor: bachelorEntered ? "rgba(19,157,112,0.75)" : "#effffb",
                    border: "1px solid #12b48b",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                     onMouseEnter={() => setBachelorEntered(true)}
                     onMouseLeave={() => setBachelorEntered(false)}
                >
                    <p style={{
                        color: bachelorEntered ? "white" : "#204066",
                        fontFamily: "roboto",
                        fontSize: 20,
                        marginTop: "2%",
                        fontWeight: "bold",
                        justifyContent: "center"
                    }}>Bachelor – Bačelor</p>
                    <Typography style={{
                        fontSize: 14,
                        color: bachelorEntered ? "white" : "#6E6E6E",
                        marginLeft: "4%",
                        marginRight: "4%",
                        marginBottom: "5%",
                        fontFamily: "openSans",
                        textAlign: "center"
                    }}>
                        Akademski naziv kojim se označava stepen obrazovanja koji se stiče završetkom prvog
                        ciklusa studija.
                    </Typography>
                </div>
                <div style={{
                    width: "18%",
                    height: "165px",
                    backgroundColor: "#effffb",
                    border: "1px solid #12b48b",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >
                    <p style={{
                        color: "#204066",
                        fontFamily: "roboto",
                        fontSize: 20,
                        marginTop: "2%",
                        fontWeight: "bold",
                        justifyContent: "center"
                    }}>Semestar</p>
                    <Typography style={{
                        fontSize: 14,
                        color: "#6E6E6E",
                        marginLeft: "4%",
                        marginRight: "4%",
                        marginBottom: "5%",
                        fontFamily: "openSans",
                        textAlign: "center"
                    }}>
                        Semestar je period u akademskoj godini, podijeljen na zimski i ljetni dio, što je
                        analogno polugodištu u osnovnim i srednjim školama.
                    </Typography>
                </div>
                <div style={{
                    width: "18%",
                    height: "165px",
                    backgroundColor: transcriptEntered ? "rgba(19,157,112,0.75)" : "#effffb",
                    border: "1px solid #12b48b",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                     onMouseEnter={() => setTranscriptEntered(true)}
                     onMouseLeave={() => setTranscriptEntered(false)}
                >
                    <p style={{
                        color: transcriptEntered ? "white" : "#204066",
                        fontFamily: "roboto",
                        fontSize: 20,
                        marginTop: "2%",
                        fontWeight: "bold",
                        justifyContent: "center"
                    }}>Indeks</p>
                    <Typography style={{
                        fontSize: 14,
                        color: transcriptEntered ? "white" : "#6E6E6E",
                        marginLeft: "4%",
                        marginRight: "4%",
                        marginBottom: "5%",
                        fontFamily: "openSans",
                        textAlign: "center"
                    }}>
                        Studentska knjižica koja služi za evidentiranje ocjena koje su dobijene na ispitima.

                    </Typography>
                </div>
            </div>
        </div>
);
}

export default StudentTermsSection;