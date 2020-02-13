import React from 'react';

let Exo1 = () => {
    let modificationExo1 = ()=> {
        let title = document.getElementById('title');
        title.innerHTML = "  Mon titre modifié";
        title.classList.add("text-primary");
        title.classList.add('bg-info');
    }
    return (
        <div>
            <h2 id="title" onClick={()=>modificationExo1()} className="bg-secondary text-white text-left mx-5 mt-5">
                Mon titre normal
            </h2>
            <div className="mx-5">
                <p>Liste des propriétés et méthodes à retrouver dans la documentation:</p>
                <ul>
                    <li className="text-decoration-none">Inner Text</li>
                    <li className="text-decoration-none">Inner HTML</li>
                    <li className="text-decoration-none">querySelector()</li>
                    <li className="text-decoration-none">querySelectorAll()</li>
                    <li className="text-decoration-none">style</li>
                    <li className="text-decoration-none">classList</li>
                </ul>
                <p>Changer le contenu du h2 par "le titre modifié" </p>
                <p>Changer la couleur du h2 (par ce que vous voulez)</p>
                <p>Ajouter une class background bootstrap au h2</p>
            </div>

        </div>
    )

}

export default Exo1;

