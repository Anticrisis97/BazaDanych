import React, {useState} from "react";
import '../../styles/kontrahenci.css';

const ContractorsDatabase = () => {

    const contractors = [
        { id: 1, name: "Kontrahent 1", contactpersonoffice: "kontrahent1@biuro.pl", contactpersonconstructionsite: "" },
        { id: 2, name: "Kontrahent 2", contactpersonoffice: ["kontrahent2@biuro.pl", "kontrahent2@biuro.pl"], contactpersonconstructionsite: "" },
        { id: 3, name: "Kontrahent 3", contactpersonoffice: ["kontrahent3@biuro.pl", "kontrahent3@biuro.pl"], contactpersonconstructionsite: "" },
        { id: 4, name: "Kontrahent 4", contactpersonoffice: "kontrahent4@biuro.pl", contactpersonconstructionsite: "" },
        { id: 5, name: "Kontrahent 5", contactpersonoffice: ["kontrahent5@biuro.pl"], contactpersonconstructionsite: ["kontrahent5@biuro.pl"] },
        { id: 6, name: "Kontrahent 6", contactpersonoffice: ["kontrahent6@biuro.pl"], contactpersonconstructionsite: ["kontrahent6@biuro.pl"] },
        { id: 7, name: "Kontrahent 7", contactpersonoffice: ["kontrahent7@biuro.pl"], contactpersonconstructionsite: "" },
        { id: 8, name: "Kontrahent 8", contactpersonoffice: "kontrahent8@biuro.pl", contactpersonconstructionsite: "" },
        { id: 9, name: "Kontrahent 9", contactpersonoffice: ["kontrahent9@biuro.pl"], contactpersonconstructionsite: "" },
        { id: 10, name: "Kontrahent 10", contactpersonoffice: ["kontrahent10@biuro.pl", "kontrahent10@biuro.pl"], contactpersonconstructionsite: "" },
        { id: 11, name: "Kontrahent 11", contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 12, name: "Kontrahent 12", email: ["kontrahent12@biuro.pl"], contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 13, name: "Kontrahent 13", contactpersonoffice: ["kontrahent13@biuro.pl", "kontrahent13@biuro.pl"], contactpersonconstructionsite: ["kontrahent13@biuro.pl"] },
        { id: 14, name: "Kontrahent 14", contactpersonoffice: ["kontrahent14@biuro.pl", "kontrahent14@biuro.pl"], contactpersonconstructionsite: ["kontrahent14@biuro.pl", "kontrahent14@biuro.pl"] },
        { id: 15, name: "Kontrahent 15", email: "", contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 16, name: "Kontrahent 16", email: "", contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 17, name: "Kontrahent 17", email: "", contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 18, name: "Kontrahent 18", email: "", contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 19, name: "Kontrahent 19", email: "", contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 20, name: "Kontrahent 20", email: "", contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 21, name: "Kontrahent 21", email: "", contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 22, name: "Kontrahent 22", email: "", contactpersonoffice: "", contactpersonconstructionsite: "" },
        { id: 23, name: "Kontrahent 23", email: "", contactpersonoffice: "", contactpersonconstructionsite: "" }


    ];


    const [expandedContractor, setExpandedContractor] = useState(null);

    const toggleContractor = (id) => {
        if (expandedContractor === id) {
            setExpandedContractor(null);
        } else {
            setExpandedContractor(id);
        }
    };

    const contractorList = contractors.map((contractor) => (
        <div key={contractor.id}>
            <li
                key={contractor.id}
                className={expandedContractor === contractor.id ? "expanded" : ""}
                onClick={() => toggleContractor(contractor.id)}
                data-name={contractor.name}
            >
                <span className="imie_i_nazwisko">{contractor.name}</span>
                <span className="arrow">
          {expandedContractor === contractor.id ? "▼" : "►"}
        </span>
            </li>
            {expandedContractor === contractor.id && (
                <div>
                    <p className="contactpersonoffice_list">Osoba kontaktowa (biuro):</p>
                    {contractor.contactpersonoffice && Array.isArray(contractor.contactpersonoffice) && (
                        <ul>
                            {contractor.contactpersonoffice.map((email, index) => (
                                <li key={index}>{email}</li>
                            ))}
                        </ul>
                    )}
                    <p className="contactpersonconstructionsite_list">Osoba kontaktowa (budowy):</p>
                    {contractor.contactpersonconstructionsite && Array.isArray(contractor.contactpersonconstructionsite) && (
                        <ul>
                            {contractor.contactpersonconstructionsite.map((email, index) => (
                                <li key={index}>{email}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    ));

    return (
        <div>
            <div>
                <h1>Lista Kontrahentów</h1>
                <p>oraz ich dane</p>
            </div>
            {contractorList}
        </div>
    );
}

function Kontrahenci() {
    return <ContractorsDatabase />;
}

export default Kontrahenci;
