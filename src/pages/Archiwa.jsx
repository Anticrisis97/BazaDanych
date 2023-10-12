import React, { useState } from "react";
import '../../styles/archiwa.css';

function Archiwa() {
    const [expandedArchivedContractor, setArchivedExpandedContractor] = useState(null);

    const toggleArchivedContractor = (id) => {
        if (expandedArchivedContractor === id) {
            setArchivedExpandedContractor(null);
        } else {
            setArchivedExpandedContractor(id);
        }
    };

    const [searchTerm, setSearchTerm] = useState("");



    const ArchivedContractors = [
        {id: 1, name: "JetSolutions SA", address: "Szwajcaria, Route de Montena 89, 1728 Rossens", contact: ""},
        {id: 2, name: "Industriemontagen Hofmann", address: "Niemcy, Hinter der Schenke 5, 99958 Burgtonna", contact: ""},
        {id: 3, name: "Barlage GmbH", address: "Niemcy, Am Gleis 5, 49740 Haselünne", contact: ""},
        {id: 4, name: "Industriemontage WPS", address: "Niemcy, Lucian-Reich-Weg 2, 78073 Bad Dürrheim", contact: ""},
        {id: 5, name: "Stikkers Industriemontage B.V.", address: "Holandia, Ramgatseweg 30, 4941 VS Raamsdonksveer", contact: ""},
        {id: 6, name: "DEK Deutsche Extrakt Kaffee GmbH", address: "Niemcy, Cafeasstraße 1, 12347 Berlin", contact: ""},
        {id: 7, name: "Steen GmbH & Co. KG", address: "Niemcy, Carl-Zeiss-Straße 4, 25335 Elmshorn", contact: ""},
        {id: 8, name: "Franz Mayr Edelstahl & Metallverarbeitung", address: "Niemcy, Schönberger Straße 15, 82389 Böbing", contact: ""},
        {id: 9, name: "Weda Holland B.V.", address: "Holandia, Mountbattenweg 15 15, 5466 AX Veghel", contact: ""},
        {id: 10, name: "Emirhar Rohrleitungsbau GmbH", address: "Niemcy, Saalmannstraße 7 - 9, Gewerbehof Gebäaude Nr. 9, 13403 Berlin", contact: ""},
        {id: 11, name: "GUßER Metallverarbeitungs GmbH", address: "Niemcy, Rudolf-Diesel-Straße 3, 78048 Villingen-Schwenningen", contact: ""},
        {id: 12, name: "Empyro S.A.", address: "Hiszpania, C/ Cabanyes, n 36, 08203 Sabadell", contact: ""},
        {id: 13, name: "TURBO-TECHNIK GmbH & Co. KG", address: "Niemcy, Hannoversche Straße 11, 26384 Wilhelmshaven", contact: ""},
        {id: 14, name: "Christian Budde Edelstahl-Rohrleitungsbau & Montageservice", address: "Niemcy, Waldweg 13, 32602 Vlotho", contact: ""},
        {id: 15, name: "Schmitz Metall u. Rohrleitungsbau GmbH", address: "Niemcy, Niederzierer Straße 70, 52382 Niederzierer", contact: ""},
        {id: 16, name: "KLIEWE GmbH", address: "Niemcy, Flagentwiet 42, 22457 Hamburg", contact: ""},
        {id: 17, name: "EAST-Edelstahl-Anlagen GmbH", address: "Niemcy, Steinbrinksweg 2c, 31840 Hess. Oldendorf", contact: ""},
        {id: 18, name: "AMB Anlagen und Metallbau GmbH", address: "Niemcy, Schulstraße 44, 24966 Sörup", contact: ""},
        {id: 19, name: "BÖHLING Rohrleitungs - und Apparatebau", address: "Niemcy, Großmannstraße 118, 20539 Hamburg", contact: ""},
        {id: 20, name: "Lysiak Inudstrieservice GmbH", address: "Niemcy, Im Heetwinkel 13, 46514 Schermbeck", contact: ""},
        {id: 21, name: "RULAND Engineering & Consulting GmbH", address: "Niemcy, Im Altenschemel 55, 67435 Neustadt an der Weinstraße"},
        {id: 22, name: "DL-Pipelinebau", address: "Niemcy, Aldenraderstraße 9, 47169 Duisburg"},
        {id: 23, name: "ABE-TEC Bremen GmbH", address: "Niemcy, Kohlenstraße 1, 28217 Bremen"},
        {id: 24, name: "A&L Tierfrischmehl Produktions GmbH", address: "Niemcy, Im Moore 1, 49356 Diepholz"},
        {id: 25, name: "Ullmann & Co. GmbH", address: "Niemcy, Dieselstraße 24, 87437 Kempten"},
        {id: 26, name: "GBP-Schweisstechnik GmbH", address: "Niemcy, Essener Straße 99c, 46047 Oberhausen"},
        {id: 27, name: "Chriwa Wasseraufbereitungstechnik GmbH", address: "Niemcy, Bruchweg 30, 29313 Hambühren"},
        {id: 28, name: "GEA TDS GmbH", address: "Niemcy, Voss-Straße 11/33, 31157 Sarstedt"},
        {id: 29, name: "Allerhand Industriemontage GmbH", address: "Niemcy, Teichstraße 21, 54614 Schönecken"},
        {id: 30, name: "Nautical Elements GmbH Anlagen & Systeme für die Nahrungsmittelindustrie KG", address: "Niemcy, Mönichhusen 77, 32549 Bad Oeyhausen"},
        {id: 31, name: "Nijhuis Water Technology B.V.", address: "Holandia, Innovatieweg 4, 7007 CD Doetinchem"},
        {id: 32, name: "H.S. Industrieservice", address: "Niemcy, Industriestraße 1, 33813 Oerlinghausen"},
        {id: 33, name: "Tanis Confectionery B.V.", address: "Holandia, Distributieweg 10, 4906 AD Oosterhout"},
        {id: 34, name: "GA-tec Gebäude- und Anlagentechnik GmbH", address: "Niemcy, Mathias-Brüggen-Straße 170, 50829 Köln"},
        {id: 36, name: "SP Metallbau GmbH", address: "Niemcy, Junkersweg 16, 32425 Minden"},
        {id: 37, name: "IFA Technology GmbH", address: "Niemcy, Jurastraße 10, 86641 Rain am Lech"},
        {id: 38, name: "Gerhard Krawinkel", address: "Niemcy, Altdorferstraße 39, 32791 Lage"},
        {id: 39, name: "Heat 11 GmbH & Co. KG", address: "Niemcy, Otto-Brenner-Straße 203, 33604 Bielefeld"},
        {id: 40, name: "MONTABOS GmbH", address: "Niemcy, Hohenzollernstraße 14, 66117 Saarbrücken"},
        {id: 41, name: "BeHe GmbH", address: "Niemcy, Mutertweg 3, 49078 Osnabrück"},
        {id: 42, name: "ALTEMEIER Montage Service GmbH", address: "Niemcy,Espenstraße 10, 32257 Bünde"},
        {id: 43, name: "Dirninger Rohrleitungsbau- und Montagegesellschaft m.b.H.", address: "Niemcy, Weißenbach an der Enns 36, 8932 Weißenbach and der Enns"},
        {id: 44, name: "Belmont Industriemontage PL Sp. z o.o.", address: "Polska, Ul. Beethovena 1, 58-300 Wałbrzych"},
        {id: 45, name: "ISW GmbH", address: "Niemcy, Heinrich-Schroder-Straße 6, 25436 Uetersen"},
        {id: 46, name: "KURT SELLMAN Edelstahl - Rohrleitsungsbau", address: "Niemcy, Schlingsheide 4, 32584 Löhne"}
    ];



    const filteredArchivedContractors = ArchivedContractors.filter((ArchivedContractor) =>
        ArchivedContractor.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const archivedContractorsList = filteredArchivedContractors.map((ArchivedContractor) => (
        <div key={ArchivedContractor.id}>
            <li
                key={ArchivedContractor.id}
                className={expandedArchivedContractor === ArchivedContractor.id ? "expanded" : ""}
                onClick={() => toggleArchivedContractor(ArchivedContractor.id)}
                data-name={ArchivedContractor.id}
            >
                <span className="archived_contractos_name">{ArchivedContractor.name}</span>
                <span>
                {expandedArchivedContractor === ArchivedContractor.id ? "▼" : "►"}
            </span>
            </li>
            {expandedArchivedContractor === ArchivedContractor.id && (
                <div>
                    <p>Adres: {ArchivedContractor.address}</p>
                </div>
            )}
        </div>
    ));

    return (
        <div>

            <div>
                <h1>Archiwa Kontrahentów</h1>
            </div>
            <div>
                <input className="search_bar_archives "
                    type="text"
                    placeholder="Wyszukaj po nazwie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {archivedContractorsList}
        </div>
    );
}

export default Archiwa;

