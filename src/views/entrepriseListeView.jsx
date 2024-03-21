// src/views/BookmarkDetail.jsx
import React, { useState, useEffect } from 'react';
import {fetchAllEntrepise} from "../services/api/enteprise.js";
import Entreprises from "../components/Entreprises/entreprises.jsx";



function EntrepriseListeView()  {
    const [entrepriseData, setEntrepriseData] = useState([]);


    useEffect(() => {
        fetchAllEntrepise().then(data => {
            setEntrepriseData(data);
        });
    });

    return (
    <section>
        <Entreprises entreprises={entrepriseData}/>
    </section>)
    ;
}
export default EntrepriseListeView;
