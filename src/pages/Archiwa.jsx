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
        { id: 1, name: "Kontrahent 1", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 2, name: "Kontrahent 2", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 3, name: "Kontrahent 3", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 4, name: "Kontrahent 4", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 5, name: "Kontrahent 5", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 6, name: "Kontrahent 6", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 7, name: "Kontrahent 7", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 8, name: "Kontrahent 8", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 9, name: "Kontrahent 9", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 10, name: "Kontrahent 10", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 11, name: "Kontrahent 11", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 12, name: "Kontrahent 12", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 13, name: "Kontrahent 13", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 14, name: "Kontrahent 14", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 15, name: "Kontrahent 15", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 16, name: "Kontrahent 16", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 17, name: "Kontrahent 17", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 18, name: "Kontrahent 18", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 19, name: "Kontrahent 19", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 20, name: "Kontrahent 20", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 21, name: "Kontrahent 21", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 22, name: "Kontrahent 22", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 23, name: "Kontrahent 23", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 24, name: "Kontrahent 24", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 25, name: "Kontrahent 25", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 26, name: "Kontrahent 26", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 27, name: "Kontrahent 27", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 28, name: "Kontrahent 28", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 29, name: "Kontrahent 29", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 30, name: "Kontrahent 30", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 31, name: "Kontrahent 31", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 32, name: "Kontrahent 32", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 33, name: "Kontrahent 33", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 34, name: "Kontrahent 34", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 36, name: "Kontrahent 36", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 37, name: "Kontrahent 37", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" },
        { id: 38, name: "Kontrahent 38", address: "00-001 Warszawa, ul. Warszawska 2", contact: "" }
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

