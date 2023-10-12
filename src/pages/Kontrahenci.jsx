import React, {useState} from "react";
import '../../styles/kontrahenci.css';

const ContractorsDatabase = () => {

    const contractors = [
        {id: 1, name: "Belmont", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 2, name: "Kurt Sellman Edelstahl-Rohrleitungsbau", contactpersonoffice: ["kurt@sellmann-edelstahl.de", "kristina@sellmann-edelstahl.de"], contactpersonconstructionsite: ""},
        {id: 3, name: "ISW GmbH", contactpersonoffice: ["K.Schmidt@isw-uetersen.de (Karsten Schmidt)", "rechnungstelle@isw-uetersen.de"], contactpersonconstructionsite: ""},
        {id: 4, name: "HSI", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 5, name: "KLIEWE GmbH", contactpersonoffice: ["beate.nicolaudius@kliewe.de"], contactpersonconstructionsite: ["Thomas.Grunenberg@kliewe.de"]},
        {id: 6, name: "RULAND", contactpersonoffice: ["Ina.Heidemann@rulandec.com"], contactpersonconstructionsite: ["Andres.Sieker@rulandec.com"]},
        {id: 7, name: "East Peter Koch", contactpersonoffice: ["peter.koch@east-edelstahlanlagen.de"], contactpersonconstructionsite: ""},
        {id: 8, name: "GBP - Schweisstechnik GmbH", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 9, name: "Christian Budde Edelstahl - Rohrleitungsbau & Montageservice", contactpersonoffice: ["cb@edelstahl-budde.de (Christian Budde)"], contactpersonconstructionsite: ""},
        {id: 10, name: "Schmitz Metall u. Rohrleitungsbau GmbH", contactpersonoffice: ["posteingang@schmitz-msr.de", "adam.hollstein@schmitz-msr.de"], contactpersonconstructionsite: ""},
        {id: 11, name: "AMB Anlagen", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 12, name: "ALTEMEIER Montage Service", email: ["info@altemeier-montageservice.de"], contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 13, name: "Dirninger Rohrleitungsbau- und Montagegesellschaft m.b.H", contactpersonoffice: ["rechnungen@dirninger.eu", "Halsmayr@dirninger.eu (Erich Halsmayr)"], contactpersonconstructionsite: ["Michtner@dirninger.eu (Harald Michtner)"]},
        {id: 14, name: "Montabos GmbH", contactpersonoffice: ["rechnungen-imp@montabos.de", "info@montabos.de (Viviene Malgaj(?))"], contactpersonconstructionsite: ["Th.springsguth@montabos.de (Thomas Springsguth)", "Kevin.schellak@montabos.de"]},
        {id: 15, name: "MBA Anlagenbau GmbH", email: "", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 16, name: "BeHe GmbH", email: "", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 17, name: "Chriwa", email: "", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 18, name: "Heat 11", email: "", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 19, name: "Klumpp", email: "", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 20, name: "Krawinkel", email: "", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 21, name: "Plan B", email: "", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 22, name: "Pro Weiss", email: "", contactpersonoffice: "", contactpersonconstructionsite: ""},
        {id: 23, name: "Turbotechnik", email: "", contactpersonoffice: "", contactpersonconstructionsite: ""},
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
