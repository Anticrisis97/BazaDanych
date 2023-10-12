import React, { useState } from 'react';
import '../../styles/budowy.css'

const companiesconstructionsites = {
    "Kontrahent 1": {
        "constructionSites": [
            {
                "name": "Berlin",
                "address": "Adres budowy w Berlinie",
                "accomodation": [
                    {
                        "name": "B&B HOTEL Berlin-Alexanderplatz",
                        "address": "Voltairestraße 3a, 10179 Berlin, Niemcy",
                        "contact": "+49 30 234567590"
                    },
                ]
            },

        ]
    },
    "Kontrahent 2": {
        "constructionSites": [
            {
                "name": "Londyn",
                "address": "Adres budowy w Londynie",
                "accomodation": [
                    {
                        "name": "H10 London Waterloo",
                        "address": "284-302 Waterloo Rd, London SE1 8RQ, Wielka Brytania",
                        "contact": "+44 20 7928 4062"
                    },
                ]
            },
            {
                "name": "Moskwa",
                "address": "Adres budowy w Moskwie",
                "accomodation": [
                    {
                        "name": "Hotel Metropol",
                        "address": "Teatral'nyy Proyezd, 2, Moscow, Rosja, 109012",
                        "contact": "+7 499 501-78-00"
                    },
                    {
                        "name": "Hotel Kosmos",
                        "address": "Prospekt Mira, 150, Moscow, Rosja, 129366",
                        "contact": "+7 495 234-12-06"
                    }
                ]
            },
        ]
    },
    "Kontrahent 3": {
        "constructionSites": [
            {
                "name": "Tokio",
                "address": "Adres budowy w Tokio",
                "accomodation": [
                    {
                        "name": "MUJI HOTEL GINZA",
                        "address": "104-0061 Tokyo-to, 3-3-5 6F Ginza, Chuo-ku, Japan",
                        "contact": "0174 301 8930"
                    },
                    {
                        "name": "The Gate Hotel Ryogoku by Hulic",
                        "address": "130-0015 Tokyo-to, Sumida-Ku Yokoami 1-2-13, Japan",
                        "contact": "+49 341 4999 44"
                    },
                    {
                        "name": "Mitsui Garden Hotel Toyosu Premier - Tokyo",
                        "address": "135-0061 Tokyo-to, Koto-ku, Toyosu 2-2-1, Japan",
                        "contact": "040 796 89 402",
                    }
                ]
            },
        ]
    },
    "Kontrahent 5": {
        "constructionSites": [
            {
                "name": "Liverpool",
                "address": "Adres budowy w Liverpoolu",
                "accomodation": [
                    {
                        "name": "The Resident Liverpool",
                        "address": "29 Seel St, Liverpool L1 4AU, Wielka Brytania",
                        "contact": "+44 151 705 2626"
                    },
                    {
                        "name": "Travelodge Liverpool Central The Strand",
                        "address": "The Strand, Liverpool L2 0PP, Wielka Brytania",
                        "contact": "172 701 37 88"
                    }
                ]
            },
        ]
    },
    "Kontrahent 8": {
        "constructionSites": [
            {
                "name": "Pekin",
                "address": "Adres budowy w Pekinie",
                "accomodation": [
                    {
                        "name": "The Great Wall Sheraton Hotel Beijing",
                        "address": "Chiny, Beijing, Chaoyang, 东三环北路10号 邮政编码: 100125",
                        "contact": "+86 10 6590 5566"
                    },
                ]
            },
        ]
    },
    "Kontrahent 11": {
        "constructionSites": [
            {
                "name": "Ateny",
                "address": "Adres budowy w Atenach",
                "accomodation": [
                    {
                        "name": "Marina-Athens Hotel",
                        "address": "Voulgari 13, Athina 104 37, Grecja",
                        "contact": "+30 21 0520 0660"
                    },
                ]
            },
        ]
    },
    "Kontrahent 16": {
        "constructionSites": [
            {
                "name": "Dunkierka",
                "address": "Adres budowy w Dunkierce",
                "accomodation": [
                    {
                        "name": "Radisson Blu Grand Hotel & Spa, Malo-les-Bains",
                        "address": "4-8 rue Marcel Sailly, Malo-les-Bains, Dunkierka, 59140, Francja",
                        "contact": "+33 3 66 32 53 70"
                    },

                ]
            },
            {
                "name": "Madryt",
                "address": "Adres budowy w Madrycie",
                "accomodation": [
                    {
                        "name": "JW Marriott Hotel Madrid",
                        "address": "C. de Sevilla, 2, 28014 Madrid, Hiszpania",
                        "contact": "+34 914 18 97 70"
                    },
                ]
            },
        ]
    },
    "Kontrahent 20": {
        "constructionSites": [
            {
                "name": "Bratysława",
                "address": "Adres budowy w Bratysławie",
                "accomodation": [
                    {
                        "name": "DREAM Hostel Bratislava",
                        "address": "9A, Leškova 4932, 811 04 Bratislava, Słowacja",
                        "contact": "+421 2/330 002 37"
                    },
                ]
            },
        ]
    },
    "Kontrahent 30": {
        "constructionSites": [
            {
                "name": "Dżakarta",
                "address": "Adres budowy w Dżakarcie",
                "accomodation": [
                    {
                        "name": "Hotel Indonesia Kempinski Jakarta",
                        "address": "Jl. M.H. Thamrin No.1, RT.1/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310, Indonezja",
                        "contact": "+62 21 23583800"
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
