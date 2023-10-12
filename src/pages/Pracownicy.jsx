import React, { useState } from "react";

import "../../styles/styles.css";


 // Zmienić całośc na angielski

const BazaPracownikow = () => {
    const employees = [
        { id: 1, name: "Abrham Kowalski", dateofbirth: "1974.03.02", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "TAK", sccvca: "brak", certificates: ["141 FM5 1.50-3.00 i >=12", "141 FM4", "141 FM5 2.00-4.00>=25"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 2, name: "Aleksy Nowak", dateofbirth: "1996.08.22", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "", hydraulicramp: "", comments: "", contractorscomments: "" },
        { id: 3, name: "Anatol Kowalski", dateofbirth: "1995.04.16", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "-", certificates: ["141 FM5 1.50-3.00>=25.00", "141 FM5 3.00-7.20>=30.15", "141 FM3 3.00-10.00>=31.75"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 4, name: "Ambroży Bąk", dateofbirth: "1962.06.14", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "-", knowsgerman: "TAK", sccvca: "-", certificates:"VCA (01.01.2024)", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 5, name: "Bogusław Nowak", dateofbirth: "1974.09.01", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates: ["141/11 FM3", "141 FM3 3>=3.00 >= 25.00"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 6, name: "Błażej Bąk", dateofbirth: "1972.01.25", age: "", position: ["Monter",", ", "Ślusarz"], address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "TAK", sccvca: "25.11.2023", certificates:"", driverslicense: "B", forklift: "", hydraulicramp: "", comments: "", contractorscomments: "" },
        { id: 7, name: "Bartosz Małysz", dateofbirth: "1980.05.21", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "+31 123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM5", "141 FM3"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 8, name: "Bogumir Skorupka", dateofbirth: "1999.04.07", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "16.11.2030", certificates:["141 FM5"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 9, name: "Czesław Duda", dateofbirth: "2002.09.25", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 10, name: "Cezary Szyc", dateofbirth: "1966.06.17", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "TAK", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 11, name: "Daniel Rusin", dateofbirth: "1965.11.26", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE",sccvca: "24.11.2024", certificates:["141 FM5"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 12, name: "Dariusz Niemen", dateofbirth: "1990.11.21", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "TAK", sccvca: "brak", certificates:["141 FM4 D48"], driverslicense: "B", forklift: "TAK", hydraulicramp: "TAK", comments: "", contractorscomments: "" },
        { id: 13, name: "Dorian Chrobry", dateofbirth: "1981.05.26", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM3 D48"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 14, name: "Edwin Małysz", dateofbirth: "1974.06.10", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "TAK", sccvca: "brak", certificates:["141 FM3"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 15, name: "Edward Ącki", dateofbirth: "1990.11.20", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 16, name: "Florian Krupa", dateofbirth: "1974.01.18", age: "", position: ["Monter", ", ", "Spawacz"], address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM5, D12, D48", "141 FM5 D60", "141 FM3 D48.3"], driverslicense: "-", forklift: "-", hydraulicramp: "TAK", comments: "", contractorscomments: "" },
        { id: 17, name: "Filip Kubica", dateofbirth: "1996.08.22", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "-", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 18, name: "Gabriel Mucha", dateofbirth: "1975.07.11", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778 ", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM1 D48.3"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 19, name: "Gustaw Kowalski", dateofbirth: "1984.11.08" ,age: "", position: "Spawacz (Działalność)", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "-", knowsgerman: "NIE", sccvca: "", certificates:"", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 20, name: "Geralt Wiedźmin", dateofbirth: "1999.04.07" ,age: "", position: "Spawacz (Działalność)", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "-", knowsgerman: "NIE", sccvca: "", certificates:"", driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 21, name: "Gracjan Roztocki", dateofbirth: "1974.12.17", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:["141 FM3 D64", "141 FM5 D60"], driverslicense: "-", forklift: "-", hydraulicramp: "-", uwagi: "", contractorscomments: "" },
        { id: 22, name: "Horacy Tyszkiewicz", dateofbirth: "1961.10.12", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 23, name: "Hubert Wilk", dateofbirth: "1983.04.08", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:"Flanche", driverslicense: "B", forklift: "-", hydraulicramp: "TAK", comments: "", contractorscomments: "" },
        { id: 24, name: "Helmut Cytrus", dateofbirth: "1999.10.19", age: "", position: ["Spawacz", ", ", "Monter"], address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates:["135 FM2"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 25, name: "Honorat Skarbek", dateofbirth: "1971.10.19", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "-", knowsgerman: "NIE", sccvca: "brak", certificates:"", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: "" },
        { id: 26, name: "Hilary Okulary", dateofbirth: "1987.05.11", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM4 D21.3", "141/111 FM3 D88.9"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 27, name: "Irwin Skrzynecki", dateofbirth: "1979.10.22", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM5 D12"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 28, name: "Igor Kącik", dateofbirth: "1985.11.11", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "-", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM3 Ss7.1 D38", "141 FM5 Ss1.5 D38"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 29, name: "Ireneusz Bąk", dateofbirth: "1993.09.06", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "-", knowsgerman: "NIE", sccvca: "brak", certificates: "", driverslicense: "", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 30, name: "Jacek Kowalski", dateofbirth: "1998.03.12", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates: "", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 31, name: "Julian Nowak", dateofbirth: "1997.08.21", age: "", position: "Spawacz (Działalność)", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "-", knowsgerman: "NIE", sccvca: "", certificates: "", driverslicense: "", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 32, name: "Jonatan Dąbrowski", dateofbirth: "1988.09.24", age: "", position: "Monter", address: "00-001 Warszawa, ul. Warszawska 1", phone: "", GVATIN: "33 445 566 778", knowsgerman: "TAK", sccvca: "11.10.2027", certificates: "", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 33, name: "Jakub Nowak", dateofbirth: "1980.08.11", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM4 D60, 141 FM5 D48"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 34, name: "Józef Bem", dateofbirth: "1977.17.09", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "31.08.2025", certificates: ["141 FM6 D50"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 35, name: "Krystian Mucha", dateofbirth: "1990.01.21", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates: "141 FM3 >=3.00 >=25.00", driverslicense: "B", forklift: "", hydraulicramp: "", comments: "", contractorscomments: ""},
        { id: 36, name: "Kamil Stoch", dateofbirth: "1991.09.11", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "brak", certificates: ["141 FM5 D60", "141 FM3 D64", "141 FM3 D21", "141 FM5 D48"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 37, name: "Klaudiusz Cytrus", dateofbirth: "1969.11.26", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "23.09.2030", certificates: "Flange", driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 38, name: "Korneliusz Okulary", dateofbirth: "1987.04.26", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "NIE", sccvca: "11.02.2031", certificates: ["141 FM5 D27 D12"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 39, name: "Kazimierz Krupa", dateofbirth: "1977.01.10", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "TAK", sccvca: "11.02.2031", certificates: ["141 FM4", "141 FM5 D12"], driverslicense: "B", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
        { id: 40, name: "Szymon Roztocki", dateofbirth: "1989.09.31", age: "", position: "Spawacz", address: "00-001 Warszawa, ul. Warszawska 1", phone: "123 456 789", GVATIN: "33 445 566 778", knowsgerman: "TAK", sccvca: "23.07.2030", certificates: ["141 FM4 D48", "141 FM4 D84"], driverslicense: "-", forklift: "-", hydraulicramp: "-", comments: "", contractorscomments: ""},
    ];

    const employees1 = JSON.parse(localStorage.getItem('employees'));

    const today = new Date();

    for (const employee of employees) {
        const birthdate = new Date(employee.dateofbirth);
        employee.age = today.getFullYear() - birthdate.getFullYear();
    }

    localStorage.setItem('employees', JSON.stringify(employees));

    const [showWelders, setShowWelders] = useState(true);
    const [showEngineers, setShowEngineers] = useState(true); // tutaj //
    const [showLocksmiths, setShowLocksmiths] = useState(true); // tutaj //

    const [showOther, setShowOther] = useState(false);
    const [showCertyfikatySpawalnicze, setShowCertyfikatySpawalnicze] = useState(false); // tutaj //
    const [showInneCertyfikaty, setShowInneCertyfikaty] = useState(false) // tutaj //

    const [showOnlyDriversLicenseHolders, setShowOnlyDriversLicenseHolders] = useState(false);
    const [showOnlyHydraulicRampUsers, setShowHydraulicRampUsers] = useState (false);
    const [showOnlyForkliftUsers, setShowOnlyForkliftUsers] = useState (false);
    const [showOnlyHasGVATIN, setShowOnlyHasGVATIN] = useState (false);
    const [showOnlyKnowsGerman, setShowOnlyKnowsGerman] = useState(false);

    const [showOnlyHas141, setShowOnlyHas141] = useState(false);
    const [showOnlyHas135, setShowOnlyHas135] = useState(false);
    const [showOnlyHas111, setShowOnlyHas111] = useState(false);
    const [showOnlyFoodGradeWelding, setShowOnlyFoodGradeWelding] = useState(false);
    const [showOnlyIndustrialGradeWelding, setShowOnlyIndustrialGradeWelding] = useState(false);


    const [expandedEmployee, setExpandedEmployee] = useState(null);
    const [search, setSearch] = useState("")


    const visibleEmployees = employees.filter((employee) => {
        const filterByPosition =
            (showWelders && employee.position.includes("Spawacz")) ||
            (showEngineers && employee.position.includes("Monter")) ||
            (showLocksmiths && employee.position.includes("Ślusarz"));

        if (showOnlyHydraulicRampUsers && employee.hydraulicramp === "TAK") {
            return true;
        }

        if (showOnlyDriversLicenseHolders && employee.driverslicense === "B") {
            return true;
        }

        if (showOnlyForkliftUsers && employee.forklift === "TAK") {
            return true;
        }

        if (showOnlyHasGVATIN) {
            const hasGVATIN = /[0-9]/.test(employee.GVATIN);
            return hasGVATIN;
        }


        if (showOnlyKnowsGerman && employee.knowsgerman === "TAK") {
            return true;
        }

        if (Array.isArray(employee.certificates) && showOnlyHas141) {
            const has141Certificate = employee.certificates.some(cert => cert.includes("141"));
            if (has141Certificate) {
                return true;
            }
        }

        if (Array.isArray(employee.certificates) && showOnlyHas135) {
            const has135Certificate = employee.certificates.some(cert => cert.includes("135"));
            if (has135Certificate) {
                return true;
            }
        }

        if (Array.isArray(employee.certificates) && showOnlyHas111) {
            const has111Certificate = employee.certificates.some(cert => cert.includes("111"));
            if (has111Certificate) {
                return true;
            }
        }

        const searchFoodGradeStrings = ["FM1", "FM2", "FM3", "FM4"];

        if (Array.isArray(employee.certificates) && showOnlyFoodGradeWelding) {
            return searchFoodGradeStrings.some((searchString) =>
            employee.certificates.some((cert) => cert.includes(searchString))
            );
        }

        const searchIndustrialGradeStrings = ["FM5", "FM6"];

        if (Array.isArray(employee.certificates) && showOnlyIndustrialGradeWelding) {
            return searchIndustrialGradeStrings.some((searchString) =>
            employee.certificates.some((cert) => cert.includes(searchString))
            );
        }

        return filterByPosition;
    });

    const filteredEmployees = visibleEmployees.filter((el) =>
        !el ? el : el.name.includes(search)
    );

    const toggleExpand = (employeeId) => {
        if (expandedEmployee === employeeId) {
            setExpandedEmployee(null);
        } else {
            setExpandedEmployee(employeeId);
        }
    };

    return (
        <div>
            <h1>Lista Pracowników</h1>
            <div className="filter-buttons">
                <div>
                    <label className="search_bar" htmlFor="filtr">Filtruj pracowników:</label>
                    <input
                        type="text"
                        id="filtr"
                        placeholder="Pole tekstowe..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // Aktualizacja stanu po wpisaniu tekstu
                    />
                </div>
                <button onClick={() => {
                    setShowWelders(true);
                    setShowEngineers(true);
                    setShowLocksmiths(true);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                }}>Pokaż Wszystkich</button>
                <button onClick={() => {
                    setShowWelders(true);
                    setShowEngineers(false);
                    setShowLocksmiths(false);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                }}>Pokaż Spawaczy</button>
                <button onClick={() => {
                    setShowWelders(false);
                    setShowEngineers(true);
                    setShowLocksmiths(false);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                }}>Pokaż Monterów</button>
                <button onClick={() => {
                    setShowLocksmiths(true);
                    setShowEngineers(false);
                    setShowWelders(false);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                }}>Pokaż Ślusarzy</button>
                <button onClick={() => {
                    setShowWelders(true);
                    setShowEngineers(true);
                    setShowLocksmiths(true);
                    setShowOther(true);
                    setShowCertyfikatySpawalnicze(false);
                    setShowInneCertyfikaty(false);
                    setShowOnlyDriversLicenseHolders(false);
                    setShowHydraulicRampUsers(false);
                    setShowOnlyForkliftUsers(false);
                    setShowOnlyHasGVATIN(false);
                    setShowOnlyKnowsGerman(false);
                    setShowOnlyHas141(false);
                    setShowOnlyHas135(false);
                    setShowOnlyHas111(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyFoodGradeWelding(false);
                    setShowOnlyIndustrialGradeWelding(false);
                }}>Inne</button>
                <div>
                    {showOther && (
                        <>
                            <button onClick={() => {
                                setShowCertyfikatySpawalnicze(true);
                                setShowInneCertyfikaty(false);
                            }}>Certyfikaty Spawalnicze</button>
                            <button onClick={() => {
                                setShowCertyfikatySpawalnicze(false);
                                setShowInneCertyfikaty(true);
                            }}>Więcej</button>
                        </>
                    )}
                </div>
                <div>
                    {showCertyfikatySpawalnicze && (
                        <>
                        <button onClick={() => {
                            setShowOnlyHas141(true);
                            setShowOnlyDriversLicenseHolders(false);
                            setShowHydraulicRampUsers(false);
                            setShowLocksmiths(false);
                            setShowWelders(false);
                            setShowEngineers(false);
                            setShowOnlyForkliftUsers(false);
                            setShowOnlyHasGVATIN(false);
                            setShowOnlyKnowsGerman(false);
                            setShowOnlyHas135(false);
                            setShowOnlyHas111(false);
                            setShowOnlyFoodGradeWelding(false);
                            setShowOnlyIndustrialGradeWelding(false);
                        }}>141</button>
                            <button onClick={() =>{
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowLocksmiths(false);
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(true);
                                setShowOnlyHas111(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                            }}>135</button>
                            <button onClick={() =>{
                                setShowOnlyHas111(true);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowLocksmiths(false);
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);

                            }}>111</button>
                            <button onClick={() => {
                                setShowOnlyHas111(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowLocksmiths(false);
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(true);
                                setShowOnlyIndustrialGradeWelding(false);
                            }}>Rury Białe</button>
                            <button onClick={() => {
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(true);
                            }}>Rury Czarne</button>
                        </>
                    )}
                </div>

                <div>
                    {showInneCertyfikaty && (
                        <>
                            <button onClick={() =>{
                                setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(true);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                            }}>Zagraniczny NIP</button>
                        <button onClick={() => {
                            setShowHydraulicRampUsers(false);
                            setShowOnlyDriversLicenseHolders(false);
                            setShowEngineers(false);
                            setShowLocksmiths(false);
                            setShowWelders(false);
                            setShowOnlyForkliftUsers(true);
                            setShowOnlyHasGVATIN(false);
                            setShowOnlyKnowsGerman(false);
                            setShowOnlyHas141(false);
                            setShowOnlyHas135(false);
                            setShowOnlyFoodGradeWelding(false);
                            setShowOnlyIndustrialGradeWelding(false);
                        }}>Wózek Widłowy</button>
                            <button onClick={() => {
                                setShowHydraulicRampUsers(true);
                                setShowOnlyDriversLicenseHolders(false);
                                setShowEngineers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                            }}>Zwyżka</button>
                            <button onClick={() => {setShowOnlyDriversLicenseHolders(false);
                                setShowHydraulicRampUsers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(true);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                            }}>Znajomośc Języka Niemieckiego</button>

                            <button onClick={() => {
                                setShowOnlyDriversLicenseHolders(true);
                                setShowHydraulicRampUsers(false);
                                setShowLocksmiths(false);
                                setShowWelders(false);
                                setShowEngineers(false);
                                setShowOnlyForkliftUsers(false);
                                setShowOnlyHasGVATIN(false);
                                setShowOnlyKnowsGerman(false);
                                setShowOnlyHas141(false);
                                setShowOnlyHas135(false);
                                setShowOnlyFoodGradeWelding(false);
                                setShowOnlyIndustrialGradeWelding(false);
                            }}>Prawo Jazdy</button>
                                </>

                    )}
                </div>
            </div>
            <div className="employee-list-container">
                <ul className="employee-list">
                    {visibleEmployees.filter(el => !el ? el : el.name.includes(search)).map((employee) => (
                        <li key={employee.id} className={expandedEmployee === employee.id ? "expanded" : ""} onClick={() => toggleExpand(employee.id)}>
                            <span className="imie_i_nazwisko">{employee.name}</span>
                            <span className="arrow">{expandedEmployee === employee.id ? "▼" : "►"}</span>
                            {expandedEmployee === employee.id && (
                                <div>
                                    <p className="employee_data_list">Wiek: {employee.age}</p>
                                    <p className="employee_data_list">Stanowisko: {employee.position}</p>
                                    <p className="employee_data_list">Adres zamieszkania: {employee.address}</p>
                                    <p className="employee_data_list">Telefon: {employee.phone}</p>
                                    <p className="employee_data_list">Zagraniczny Numer Podatkowy: {employee.GVATIN}</p>
                                    <p className="employee_data_list">SCC/VCA: {employee.sccvca}</p>
                                    <p className="employee_data_list">Znajomość Niemieckiego: {employee.knowsgerman}</p>
                                    <p className="employee_data_list">Certyfikaty:</p>
                                    {employee.certificates && Array.isArray(employee.certificates) && (
                                        <ul>
                                            {employee.certificates.map((certificate, index) => (
                                                <li key={index}>{certificate}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <p className="employee_data_list">Prawo Jazdy: {employee.driverslicense}</p>
                                    <p className="employee_data_list">Wózek widłowy: {employee.forklift}</p>
                                    <p className="employee_data_list">Podnośnik: {employee.hydraulicramp}</p>
                                    <p className="employee_data_list">Uwagi: {employee.comments}</p>
                                    <p className="employee_data_list">Uwagi Kontrahenta: {employee.contractorscomments}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function Pracownicy() {
    return <BazaPracownikow />;
}