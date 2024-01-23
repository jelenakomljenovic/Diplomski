import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    ListItem,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField,
    Theme,
    Typography,
    useTheme
} from "@mui/material";
import {FaLocationDot} from "react-icons/fa6";
import {paths} from "../constants/urlConstants";
import {useNavigate} from "react-router-dom";
import {CreateFacultyRequest} from "../api/faculty/faculty";
import {getAllCountries, getAllFaculties} from "../api/faculty/facultyApi";
import {CreateProfessionRequest} from "../api/profession/profession";
import {getAllProfessions} from "../api/profession/professionApi";

type CountryElement = {
    country: String;
    isChecked: boolean;
}

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


function Faculty() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const theme = useTheme();
    const [textFilter, setTextFilter] = useState("");
    const [countriesFilter, setCountriesFilter] = useState<Array<CountryElement>>([]);
    const [faculties, setFaculties] = useState<Array<CreateFacultyRequest>>([]);
    const [professions, setProfessions] = useState<Array<CreateProfessionRequest>>([]);
    const [facultyFilter, setFacultyFilter] = useState<Array<CreateFacultyRequest>>([]);
    const [facultyFilterAndSearch, setFacultyFilterAndSearch] = useState<Array<CreateFacultyRequest>>([]);
    const [countries, setCountries] = useState<Array<String>>([]);
    const [citiesFilter, setCitiesFilter] = useState<Array<String>>([]);
    const [filter, setFilter] = useState(false);
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: {value},
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

        console.log(personName.length);
    };


    useEffect(() => {
        let countries: String[] = [];
        countriesFilter.forEach(element => {
            if (element.isChecked) {
                countries = [element.country, ...countries];
            }
        });

        let cities: String[] = [];
        faculties.filter(value => countries.includes(value.country)).forEach(element => {
                if (!cities.includes(element.city)) {
                    cities = [...cities, element.city];
                }
            }
        );

        if (countries.length != 0 && personName.length === 0) {
            console.log("prvi")
            setFacultyFilter(faculties.filter(value => countries.includes(value.country)));
        } else if (countries.length === 0) {
            console.log("drugi")
            setFacultyFilter(faculties);
        } else if (personName.length != 0) {
            console.log("treci")
            setFacultyFilter(faculties.filter(value => personName.includes(value.city)));
        }

        setCitiesFilter(cities);

    }, [countriesFilter, personName])


    useEffect(() => {
        const getProfessions = async () => {
            const professionsRes = await getAllProfessions();
            setProfessions(professionsRes.data);
        }
        getProfessions();
        const getFaculties = async () => {
            const facultiesRes = await getAllFaculties();
            setFaculties(facultiesRes.data);
        }
        getFaculties();
        const getCountries = async () => {
            const countriesRes = await getAllCountries();
            setCountries(countriesRes.data);
        }
        getCountries();
    }, [])


    useEffect(() => {
        let countryArray: CountryElement[] = countries.map(country => {
            return {country: country, isChecked: false};
        })
        setCountriesFilter(countryArray);
    }, [countries])

    useEffect(() => {
        setFacultyFilterAndSearch(getFilteredFaculties);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textFilter, facultyFilter]);


    function getFilteredFaculties(): CreateFacultyRequest[] {
        if (textFilter.trim().length === 0)
            return facultyFilter;
        return facultyFilter.filter(fax => (fax.name.toUpperCase().includes(textFilter.toUpperCase().trim())));

    }


    function handleFilter() {
        setFilter(!filter);
    }

    const handleCountryCheckBox = (countryEl: CountryElement) => {
        let newCountryElement = {...countryEl, isChecked: !countryEl.isChecked};
        setCountriesFilter(countriesFilter.map((element) => element.country === countryEl.country ? newCountryElement : element));
    }

    function handleClick(event: any) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <p style={{
                fontSize: 17,
                color: "rgba(0,0,0,0.57)",
                fontWeight: "bold",
                marginLeft: "5%",
                marginTop: "1.5%",
                fontFamily: "openSans"
            }}>Fakulteti</p>
            <div style={{
                display: "flex",
                flexDirection: "column",
                height: filter ? "148px" : "74px",
                backgroundColor: "white",
                width: "93%",
                marginLeft: "4.9%",
                boxShadow: "5px 5px 20px 3px rgba(0,0,0,.08)"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <TextField
                        id="search-fax-id"
                        style={{marginLeft: "15px", marginTop: "16px", height: "10px", width: "34%"}}
                        // onChange={e => setUserName(e.target.value)}
                        label={"Pretraži po nazivu..."}
                        onChange={e => setTextFilter(e.target.value)}
                        size="small"
                        variant="outlined"
                    />
                    <TextField
                        id="search-fax-id"
                        style={{marginLeft: "15px", marginTop: "16px", height: "10px", width: "20%"}}
                        // onChange={e => setUserName(e.target.value)}
                        label={"Pronađi po oblasti..."}
                        size="small"
                        variant="outlined"
                    />
                    <Button style={{
                        backgroundColor: "rgba(52,77,157,0.76)",
                        color: "white",
                        marginTop: "1.4%",
                        marginLeft: "2%",
                        height: "32px",
                        width: "110px",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: 'initial',
                        // textAlign: "center",
                    }}
                    >Pronađi</Button>
                    <Button style={{
                        backgroundColor: "rgba(116,120,141,0.94)",
                        marginTop: "1.4%",
                        marginLeft: "0.7%",
                        color: "white",
                        height: "32px",
                        width: "110px",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: 'initial',
                        // textAlign: "center",
                    }}
                            onClick={() => handleFilter()}
                    >Filter</Button>
                </div>
                {filter &&
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{
                                fontSize: 15,
                                color: "rgba(0,0,0,0.74)",
                                fontWeight: "bold",
                                marginLeft: "3.5%",
                                paddingTop: "0.3%",
                                fontFamily: "openSans"
                            }}>Države</p>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", marginTop: "-3%", marginLeft: "-1.2%" }}>
                                {countriesFilter.map((countryFilter: any) => (
                                    <ListItem style={{ flexBasis: 'auto', margin: '0 8px', whiteSpace: 'nowrap' }}>
                                        <Checkbox checked={countryFilter.isChecked} edge="start" size="small"
                                                  onChange={() => handleCountryCheckBox(countryFilter)} />
                                        <ListItemText className="list-text-export" primary={countryFilter.country} />
                                    </ListItem>
                                ))}
                            </div>

                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{
                                fontSize: 15,
                                color: "rgba(0,0,0,0.74)",
                                fontWeight: "bold",
                                marginLeft: "55%",
                                paddingTop: "0.3%",
                                fontFamily: "openSans"
                            }}>Gradovi</p>
                            <FormControl sx={{m: 1, width: 260, mt: 0}}>
                                <Select
                                    multiple
                                    displayEmpty
                                    value={personName}
                                    size="small"
                                    onChange={handleChange}
                                    input={<OutlinedInput/>}
                                    renderValue={(selected) => {
                                        if (selected.length === 0 || countries.length === 0) {
                                            return <span>Izaberi gradove</span>;
                                        }

                                        return selected.join(', ');
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{'aria-label': 'Without label'}}
                                >
                                    <MenuItem disabled value="">
                                        <span>Izaberi gradove</span>
                                    </MenuItem>
                                    {citiesFilter.map((name) => (
                                        <MenuItem
                                            // key={name}
                                            value={name.toString()}
                                            // style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                }
            </div>
            {professions.map((profession: any) => {
                return (
                    <div>
                        <p style={{
                            fontSize: 15,
                            color: "rgba(0,0,0,0.47)",
                            fontWeight: "bold",
                            marginLeft: "5%",
                            marginTop: "1.5%",
                            fontFamily: "openSans"
                        }}>{profession.name}</p>
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "2.5%",
                            justifyContent: "flex-start",
                            paddingLeft: "4.8%",
                            backgroundColor: "#f8f8fb"
                        }}>
                            {facultyFilterAndSearch.filter((fax) => fax.profession.id === profession.id).map((faculty: any) => {
                                return (
                                    <div style={{
                                        width: "325px",
                                        height: "265px",
                                        marginBottom: "2.5%",
                                        backgroundColor: "#ffffff",
                                        boxShadow: "5px 5px 20px 3px rgba(0,0,0,.08)"
                                    }}
                                    >
                                        <p style={{
                                            fontSize: 15,
                                            color: "rgba(0,0,0,0.74)",
                                            fontWeight: "bold",
                                            marginLeft: "7%",
                                            marginTop: "29%",
                                            fontFamily: "openSans"
                                        }}>{faculty.name}</p>
                                        <Typography style={{
                                            fontSize: 13,
                                            color: "#6E6E6E",
                                            marginLeft: "7%",
                                            fontFamily: "openSans",
                                        }}>
                                            {faculty.address}
                                            <FaLocationDot
                                                style={{marginLeft: "5%", marginRight: "1.5%"}}/>{faculty.city},
                                            {" " + faculty.postalCode}
                                        </Typography>
                                        <Typography style={{
                                            fontSize: 13,
                                            color: "#6E6E6E",
                                            marginTop: "1%",
                                            marginLeft: "7%",
                                            fontFamily: "openSans",
                                        }}>
                                            Telefon: {faculty.phoneNumber}
                                        </Typography>
                                        <Button>
                                            <Button style={{
                                                backgroundColor: "rgba(138,189,138,0.93)",
                                                color: "white",
                                                height: "32px",
                                                width: "140px",
                                                marginLeft: "7%",
                                                fontSize: "11px",
                                                fontWeight: 700,
                                                textTransform: 'initial',
                                                // textAlign: "center",
                                                marginTop: "13%",
                                            }} onClick={() => navigate(paths.DETAILS)}
                                            >Pogledaj detalje</Button>
                                        </Button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Faculty;