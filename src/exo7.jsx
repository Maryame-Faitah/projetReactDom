import React from 'react';


function Exo7() {

    let ajoutTache = () => {
        let tache = document.getElementById('tache');
        let output = document.getElementById('output');

        // let all = document.getElementById('btnAll');
        // let done = document.getElementById('btnDone');
        // let todo = document.getElementById('btnTodo');

        // let array1 = [];
        // let array2 = [];

        if (tache.value !== "") {

            //Ajout tâche
            let par = document.createElement('p');
            par.innerHTML = tache.value;
            output.appendChild(par);
            tache.value = "";
            //Ajout checkbox
            let btnCheck = document.createElement('input');
            btnCheck.type = "checkbox";
            output.appendChild(btnCheck);
            //Ajout div
            let line = document.createElement('div');
            line.classList.add('d-flex');
            // line.classList.add('justify-content-between');
            line.classList.add('todo');
            output.appendChild(line);
            output.appendChild(btnCheck);
            line.appendChild(par);
            //Ajout btn supp tâche
            let suppTache = document.createElement('button');
            suppTache.innerHTML = "Supprimer";
            suppTache.classList = "btn ml-3 text-primary bg-light rounded";
            line.appendChild(suppTache);
            //Supp tâche
            suppTache.addEventListener("click", () => {
                par.parentNode.remove();
                btnCheck.remove();
            });
            //Ajout btn modif tâche
            let modifTache = document.createElement('button');
            modifTache.innerHTML = "Editer";
            modifTache.classList = "btn ml-3 text-primary bg-light rounded";
            line.appendChild(modifTache);
            //Modif tâche
            let modifInput = document.createElement('input');
            modifTache.addEventListener("click", () => {
                modifInput.classList = "ml-3 bg-light"
                line.replaceChild(modifInput, par);
                modifInput.defaultValue = par.innerHTML;
              
                let validInput = document.createElement('button');
                validInput.innerHTML = "Valider";
                validInput.classList = "btn ml-3 text-primary bg-light rounded";
                line.appendChild(validInput);
                validInput.addEventListener("click", () => {
                    if (par.innerHTML = modifInput.value) {
                        line.replaceChild(par, modifInput);
                        validInput.remove();
                    }
                });
            });
            //enter de merde fonctionne pas
            // modifInput.onKeyUp = (event) => {
            //     if (event.keyCode === 13) {
            //         par.innerHTML = modifInput.value;
            //         line.replaceChild(par, modifInput);
            //     }
            // }

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
                <ul>

                </ul>
            </div>
            <hr />
        </div>
    )
}

export default Exo7;

//CORRECTION
// function Exo7() {
//     let addList = () => {
//         let inpToDoList = document.getElementById("inpToDoList");
//         let toDoList = document.getElementById("toDoList");
//         //let arrayToDoList=[];
//         //let arrayPara=[];
//         let toDo = document.getElementById("btnToDo");
//         let done = document.getElementById("btnDone");
//         let all = document.getElementById("btnAll");
//         //creation paragraphe + checkbox
//         if (inpToDoList.value !== "") {
//             let check = document.createElement("input");
//             check.type = "checkbox";
//             let para = document.createElement("p");
//             para.innerHTML = inpToDoList.value;
//             // arrayPara.push(para);
//             inpToDoList.value = "";
//             let ligne = document.createElement("div")
//             //arrayToDoList.push(ligne)
//             ligne.classList.add("d-flex");
//             ligne.classList.add("justify-content-between");
//             ligne.classList.add("toDo");
//             toDoList.appendChild(ligne)
//             arrayToDoList.push(ligne)
//             ligne.appendChild(check);
//             // arrayCheckbox.push(check)
//             ligne.appendChild(para);
//             //checkbox
//             check.onclick = () => {
//                 //if(check.checked === true){ /* rajouté par moi */
//                 if (check.checked) {
//                     ligne.classList.remove("toDo")
//                     ligne.classList.add("done");
//                     ligne.classList.add("bg-success");
//                 } else {
//                     ligne.classList.remove("done");
//                     ligne.classList.add("toDo");
//                     ligne.classList.remove("bg-success");
//                 }
//             }
//             //creation button delete
//             let btnDelet = document.createElement("button");
//             btnDelet.innerHTML = "x";
//             ligne.appendChild(btnDelet)
//             btnDelet.style.backgroundColor = "white";
//             btnDelet.style.color = "rosybrown";
//             btnDelet.style.borderRadius = "8px";
//             btnDelet.onclick = () => {
//                 btnDelet.parentNode.remove()
//             }
//             //creation button modifier
//             let modif = document.createElement("button");
//             modif.innerHTML = "Edit";
//             modif.style.backgroundColor = "white";
//             modif.style.color = "rosybrown";
//             modif.style.borderRadius = "8px";
//             ligne.appendChild(modif);
//             let inp = document.createElement("input");
//             modif.onclick = () => {
//                 ligne.replaceChild(inp, para)
//                 inp.defaultValue = para.innerHTML;
//             }
//             inp.onkeyup = (e) => {
//                 if (e.keyCode === 13) {
//                     para.innerHTML = inp.value;
//                     ligne.replaceChild(para, inp)
//                 }
//             }
//             // .defaultvalue. = qlq.innerHTML
//             toDo.onclick = () => {
//                 for (let i = 0; i < arrayToDoList.length; i++) {
//                     if (arrayToDoList[i].classList.contains("toDo")) {
//                         //if(arrayToDoList[i].checked === false){ /* Rajouté par moi */
//                         arrayToDoList[i].classList.add("d-flex");
//                         arrayToDoList[i].classList.remove("d-none");
//                         //arrayToDoList[i].style.visibility="hidden"
//                     } else {
//                         arrayToDoList[i].classList.remove("d-flex");
//                         arrayToDoList[i].classList.add("d-none");
//                         //arrayToDoList[i].style.display="visible"
//                     }
//                 }
//             }
//             done.onclick = () => {
//                 for (let i = 0; i < arrayToDoList.length; i++) {
//                     if (arrayToDoList[i].classList.contains("done")) {
//                         //if(arrayToDoList[i].checked === true){ /* Rajouté par moi */
//                         arrayToDoList[i].classList.add("d-flex");
//                         arrayToDoList[i].classList.remove("d-none");
//                         //arrayToDoList[i].style.visibility="hidden"
//                     } else {
//                         arrayToDoList[i].classList.remove("d-flex");
//                         arrayToDoList[i].classList.add("d-none");
//                         //arrayToDoList[i].style.display="visible"
//                     }
//                 }
//             }
//             //Ici fonctionne !!
//             all.onclick = () => {
//                 for (let i = 0; i < arrayToDoList.length; i++) {
//                     //arrayToDoList[i].style.visibility="visible"
//                     arrayToDoList[i].classList.remove("d-none");
//                     arrayToDoList[i].classList.add("d-flex");
//                 }
//             }
//         }
//     }
//     let arrayToDoList = []
//     // let arrayCheckbox =[]
//     //utiliser useState pour filtre comme exemple variable Maryame
//     // const [etat, setetat] = useState(false);
//     return (
//         <div className="container exo7 mt-5 pb-5 pt-5">
//             <h1 className="text-center">Hello Exo 7</h1>
//             <h5 className="pt-3">To Do List</h5>
//             <div className="input-group mb-3">
//                 <input onKeyUp={(e) => {
//                     if (e.keyCode === 13) {
//                         addList()
//                     }
//                 }} type="text" className="form-control" id="inpToDoList" placeholder="Que dois-je faire ?" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
//             </div>
//             <div className="d-flex justify-content-center  row mb-5">
//                 <button className="btnToDoList m-2" id="btnAll">All</button>
//                 <button className="btnToDoList m-2" id="btnDone">Done</button>
//                 <button className="btnToDoList m-2" id="btnToDo">To Do</button>
//             </div>
//             <div id="toDo">
//                 {/* <ul className="m-5" id="toDoList">
//                 </ul> */}
//                 <div id="toDoList">
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Exo7

