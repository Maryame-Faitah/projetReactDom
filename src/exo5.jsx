import React, { useState } from 'react';

function Exo5() {
    const [compt, setCompt] = useState(0);
    //Bouton Ajouter
    let addImg = () => {
        let divImg = document.getElementById('divImg');
        let img = document.createElement('img');
        img.src = "./../logo192.png";
        img.classList = "col-1 m-0 p-0";
        divImg.appendChild(img);
        setCompt(compt+1);
    }
    //Bouton Remove lastChild
    let remove = () => {
        let divImg = document.getElementById('divImg');
        if (divImg.childElementCount > 0) {
            divImg.removeChild(divImg.lastChild);
        }
        if (compt>0) {
            setCompt(compt-1)
        }
    }
    //Bouton remove All
    let removeAll = () => {
        let divImg = document.getElementById('divImg');
        divImg.innerHTML = "";
        setCompt(0);
    }
    //Bouton compteur
    // let compteur = () => {
    //     setCompt(compt + 1);
    // }
    return (
        <div id="partie5" className="text-left px-5 py-5 w-100">
            <h2>Générer des éléments du DOM</h2>
            <p>Cliquer sur le bouton ci-dessous pour générer
                d'autres images.
            </p>
            <button id="btn-img" className="btn text-white bg-secondary rounded mr-3"
                onClick={() => {addImg() }}>
                Ajouter une image
            </button>
            <button id="btn-remove" className="btn text-white bg-secondary rounded mr-3"
                onClick={() => remove()}>
                Remove une image
            </button>
            <button id="btn-removeAll" className="btn text-white bg-secondary rounded mr-3"
                onClick={() => removeAll()}>
                Remove tout
            </button>
            <button id="btn-removeAll" className="btn text-white bg-secondary rounded mr-3">
                Compteur: {compt}
            </button>
            <div id="divImg" className="pt-5 row w-100 m-0">
            </div>
        </div>
    )
}

export default Exo5;