import React from 'react';

function Exo7() {

    let ajoutTache = () => {
        let tache = document.getElementById('tache');
        let output = document.getElementById('output');
        if (tache.value != "") {
            //Ajout tâche
            let par = document.createElement('p');
            par.innerHTML = tache.value;
            output.appendChild(par);
            tache.value = "";
            //Ajout btn supp tâche
            let suppTache = document.createElement('button');
            suppTache.innerHTML = "x";
            suppTache.classList = "btn ml-3 text-primary bg-light rounded";
            par.appendChild(suppTache);
            //Supp tâche
            suppTache.addEventListener("click", () => {
                par.remove();
            });
        }

    }

    return (
        <div id="partie7" className="text-left px-5 mb-5 py-5">
            <h2>To do list</h2>
            <hr />
            <input id="tache" className="w-100" type="text" placeholder="Que dois-je faire?"
                onKeyUp={(event) => {
                    if (event.keyCode === 13) {
                        ajoutTache();
                    }
                }} />
            <div id="divTodo" className="row mt-2">
                <button id="btnAll" className="btn text-white bg-primary rounded mr-2 ml-3">Toutes</button>
                <button id="btnDone" className="btn text-white bg-transparent text-primary rounded mr-2">Completées</button>
                <button id="btnTodo" className="btn text-white bg-transparent text-primary rounded">A faire</button>
            </div>
            <div id="output" className="mt-5">
            </div>
            <hr />
        </div>
    )
}

export default Exo7;