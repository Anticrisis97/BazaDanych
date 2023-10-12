import React, { useState } from 'react';
import '../../styles/budowy.css'

const companiesconstructionsites = {
    "Budde": {
        "constructionSites": [
            {
                "name": "Belm",
                "address": "Adres budowy A",
                "accomodation": [
                    {
                        "name": "Frau Wissing Gluecksgriff",
                        "address": "49084 Osnabrueck, Meller Strasse 248",
                        "contact": "0172 283 65 79"
                    },
                ]
            },

        ]
    },
    "Sellman": {
        "constructionSites": [
            {
                "name": "Leutkirch",
                "address": "Adres budowy A",
                "accomodation": [
                    {
                        "name": "Alfons Keck",
                        "address": "Kisslegg, Schoenauweg 21-23",
                        "contact": "0049 151 400 549 31"
                    },
                ]
            },
            {
                "name": "Lindenberg",
                "address": "Adres budowy B",
                "accomodation": [
                    {
                        "name": "Hotel XYZ",
                        "address": "Adres hotelu XYZ",
                        "contact": "Kontakt do hotelu XYZ"
                    },
                    {
                        "name": "Apartament ABC",
                        "address": "Adres apartamentu ABC",
                        "contact": "Kontakt do apartamentu ABC"
                    }
                ]
            },
        ]
    },
    "Kliewe": {
        "constructionSites": [
            {
                "name": "Hamburg",
                "address": "Adres budowy A",
                "accomodation": [
                    {
                        "name": "Radics Bau - Andras Radics",
                        "address": "22393 Hamburg, Meiendorfer Muehlenweg 11a",
                        "contact": "0174 301 8930 & 0162 241 7238"
                    },
                    {
                        "name": "DKN Monteurzimmer GmbH",
                        "address": "04315 Leipzig, Wurzner Str. 95",
                        "contact": "+49 341 4999 44 88 & +49 162 710 44 88"
                    },
                    {
                        "name": "Monteurswohnungen am Kiekeberg - Angela un Martin Piotrowski",
                        "address": "21224 Rosengarten, Am Kiekeberg 7",
                        "contact": "040 796 89 402 & 040 796 89 398",
                    }
                ]
            },
        ]
    },
    "Schmitz": {
        "constructionSites": [
            {
                "name": "Dueren",
                "address": "Adres budowy A",
                "accomodation": [
                    {
                        "name": "FeWo Clemens - Marion Clemens",
                        "address": "52399 Merzenich, Klosterstrasse 8",
                        "contact": "0049 152 310 879 05"
                    },
                    {
                        "name": "Familie Jansen - Dirk Jansen",
                        "address": "52355 Dueren, Im Kleffert 1a",
                        "contact": "172 701 37 88"
                    }
                ]
            },
        ]
    },
    "Altemeier": {
        "constructionSites": [
            {
                "name": "Bielefeld",
                "address": "Adres budowy A",
                "accomodation": [
                    {
                        "name": "Klemens Bogdanski",
                        "address": "33729 Bielefeld, Luetkes Holz 15",
                        "contact": "0049 521 270 12 07, bogdanski.bielefeld@freenet.de"
                    },
                ]
            },
        ]
    },
    "ISW": {
        "constructionSites": [
            {
                "name": "Uetersen",
                "address": "Adres budowy A",
                "accomodation": [
                    {
                        "name": "KREME",
                        "address": "25335 Elmshorn, Kirchenstrasse 40",
                        "contact": "0049 176 814 616 67"
                    },
                ]
            },
        ]
    },
    "Montabos": {
        "constructionSites": [
            {
                "name": "Cham",
                "address": "Adres budowy A",
                "accomodation": [
                    {
                        "name": "Serve Elisabeth",
                        "address": "93455 Atzenzell, Buchmarterweg 5",
                        "contact": "0049 681 954 1120"
                    },

                ]
            },
            {
                "name": "Iggensbach",
                "address": "Adres budowy B",
                "accomodation": [
                    {
                        "name": "Pension Falter (Helmut Falter)",
                        "address": "94577 Winzer, Boehmerkaldstrasse 9a",
                        "contact": "0049 151 407 832 53"
                    },
                ]
            },
        ]
    },
    "MBA": {
        "constructionSites": [
            {
                "name": "Neubrandenburg",
                "address": "Adres budowy A",
                "accomodation": [
                    {
                        "name": "Sattelpause Elke - Hornung - Petit",
                        "address": "17348 Woldegk, Wiesengrund 5",
                        "contact": "0049 151 242 345 00"
                    },
                ]
            },
        ]
    },
    "Dirninnger": {
        "constructionSites": [
            {
                "name": "Enns",
                "address": "Adres budowy A",
                "accomodation": [
                    {
                        "name": "Franz Brandstaetter",
                        "address": "4073 Wilhering, Ziegelofenweg 5",
                        "contact": "00 43 676 3355209"
                    },
                ]
            },
        ]
    },

    // Inne firmy i ich budowy...
};

export default function Budowy() {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedConstructionSite, setSelectedConstructionSite] = useState(null);
    const [openConstructionSites, setOpenConstructionSites] = useState({});

    // Pobierz dane z local storage i ustaw je w state
    // W rzeczywistości dane zwykle nie są przechowywane w kodzie, ale zaimportowane z local storage
    const dataFromLocalStorage = companiesconstructionsites; // Tutaj zaimportuj dane z local storage

    const handleCompanyClick = (companyName) => {
        if (selectedCompany === companyName) {
            // Jeśli firma jest już wybrana, schowaj listę budów
            setSelectedCompany(null);
        } else {
            setSelectedCompany(companyName);
            setSelectedConstructionSite(null); // Zresetuj wybraną budowę
        }
    };

    const handleConstructionSiteClick = (constructionSite) => {
        setSelectedConstructionSite(constructionSite);
    };

    const toggleConstructionSiteList = (constructionSiteName) => {
        setOpenConstructionSites((prevState) => ({
            ...prevState,
            [constructionSiteName]: !prevState[constructionSiteName]
        }));
    };

    // Renderowanie listy firm
    const renderCompanyList = () => {
        return Object.keys(dataFromLocalStorage).map((companyName) => (
            <div className='abc' key={companyName}>
                <div onClick={() => handleCompanyClick(companyName)}>
                    {companyName} {selectedCompany === companyName ? '▼' : '▶'}
                </div>
                {selectedCompany === companyName && (
                    <div className='constructionsites_list_container'>
                        <hr></hr>
                        <h2>Lista Budów dla {selectedCompany}</h2>
                        {renderConstructionSiteList(dataFromLocalStorage[companyName].constructionSites)}
                        <hr></hr>
                    </div>
                )}
            </div>
        ));
    };

    // Renderowanie listy budów dla wybranej firmy
    const renderConstructionSiteList = (constructionSites) => {
        return constructionSites.map((constructionSite) => (
            <div key={constructionSite.name}>
                <div onClick={() => toggleConstructionSiteList(constructionSite.name)}>
                    {constructionSite.name} {openConstructionSites[constructionSite.name] ? '▼' : '▶'}
                </div>
                {openConstructionSites[constructionSite.name] && (
                    <div>
                        <p>Adres: {constructionSite.address}</p>
                        {constructionSite.accomodation && constructionSite.accomodation.length > 0 && (
                            <div>
                                <p className='noclegi'>Noclegi:</p>
                                {renderNoclegiList(constructionSite.accomodation)}
                            </div>
                        )}
                    </div>
                )}
            </div>
        ));
    };

    const renderNoclegiList = (noclegi) => {
        return noclegi.map((nocleg) => (
            <div key={nocleg.name}>
                <div onClick={() => toggleConstructionSiteList(nocleg.name)}>
                    {nocleg.name} {openConstructionSites[nocleg.name] ? '▼' : '▶'}
                </div>
                {openConstructionSites[nocleg.name] && (
                    <div>
                        <p>Adres: {nocleg.address}</p>
                        <p>Kontakt: {nocleg.contact}</p>
                    </div>
                )}
            </div>
        ));
    };


    // Renderowanie informacji o wybranej budowie
    const renderConstructionSiteInfo = () => {
        if (!selectedConstructionSite) {
            return null;
        }

        return (
            <div>
                <h3>Informacje o Budowie</h3>
                <p>Adres: {selectedConstructionSite.address}</p>
            </div>
        );
    };

    return (
        <div>
            <h1>Lista budów wg kontrahenta</h1>
            {renderCompanyList()}
            {selectedConstructionSite && renderConstructionSiteInfo()}
        </div>
    );
}
