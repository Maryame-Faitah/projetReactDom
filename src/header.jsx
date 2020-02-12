import React from 'react';
import './header.css';

let Header=()=>{
    return(
        <header class="mb-5">
        <div class="bg-primary">
            <p class="titre text-white p-2 text-center">Javascript DOM</p>
        </div>

        <div class="container row mt-5">
            <button id="btn1" class="col-3">Exercice 1</button>
            <button id="btn2" class="col-3">Exercice 2</button>
            <button id="btn3" class="col-3">Exercice 3</button>
            <button id="btn4" class="col-3">Exercice 4</button>
            <button id="btn5" class="col-3">Exercice 5</button>
            <button id="btn6" class="col-3">Exercice 6</button>
            <button id="btn7" class="col-3">Exercice 7</button>
        </div>
    </header>
    )
}

export default Header;