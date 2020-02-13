import React from 'react';

function Exo2() {
    let dnone = ()=>{
        let partie1 = document.getElementById('partie1');
        let partie2 = document.getElementById('partie2');
        let partie3 = document.getElementById('partie3');
        let partie4 = document.getElementById('partie4');
        let partie5 = document.getElementById('partie5');
        let partie6 = document.getElementById('partie6');
        let partie7 = document.getElementById('partie7');

        partie1.classList.remove('d-none');
        partie2.classList.add('d-none');
        partie3.classList.add('d-none');
        partie4.classList.add('d-none');
        partie5.classList.add('d-none');
        partie6.classList.add('d-none');
        partie7.classList.add('d-none');
    }
    return (
        <div id="partie2" className="text-left px-5 my-5 py-5">
            <p>Mettre un écouteur d'événements sur le bouton nav
                et changer le panel en conséquence.
            </p>
        </div>
    )
}

export default Exo2;