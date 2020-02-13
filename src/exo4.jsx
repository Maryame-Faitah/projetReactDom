import React, { useState } from 'react';

function Exo4() {
    const [compteur, setCompteur] = useState(0);
    let changePlace = () => {
        let carre1 = document.getElementById('carre1');
        let carre2 = document.getElementById('carre2');
        if (carre2.classList.contains('d-none')) {
            carre1.classList.add('d-none');
            carre2.classList.remove('d-none');

        } else if (carre1.classList.contains('d-none')) {
            carre2.classList.add('d-none');
            carre1.classList.remove('d-none');
        }
    }
    let afficherCompteur = () => {
        setCompteur(compteur + 1);
    }
    let resetCompteur = () => {
        setCompteur(0);
    }
    return (
        <div id="partie4" className="text-left px-5 py-5">
            <h2>Déplacer les éléments</h2>
            <div className="row justify-content-center mb-5">
                <div className="forme1 d-flex justify-content-center align-items-center">
                    <div id="carre1" className=""></div>
                </div>
                <div className="forme2 d-flex justify-content-center align-items-center">
                    <div id="carre2" className="d-none"></div>
                </div>
            </div>

            <div className="container row d-flex">
                <div className="w-100">
                    <button type="button"
                        className="btn btnColoré btn1 text-white bg-secondary rounded"
                        onClick={() => { changePlace(); afficherCompteur() }}>
                        Change place
                    </button>
                </div>
                <div className="w-100 mt-3">
                    <button type="button" onClick={() => resetCompteur()}
                        className="btn btnColoré btn2 text-white bg-secondary rounded">
                        Nombre de clicks: {compteur}
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Exo4;