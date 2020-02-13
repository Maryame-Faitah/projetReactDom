import React,{useState} from 'react';

function Exo3 () {
    const [name, setName] = useState("inconnu")
    let insertInput=()=>{
        let input = document.getElementById('input');
        if (input.value !== "") {
            setName(input.value);
            input.value = "";
        }
    }
    return(
        <div id="partie3" className="text-left px-5 py-5">
            <h2>Welcome <span id="span">{name}</span></h2>
            <p>Ecrivez dans l'input le nom de la personne que vous voulez acceuillir.</p>
            <p>Lorsque vous cliquez sur le boutton "go", le nom que vous avez mis dans 
                l'input apparait dans le span du h2 et l'input sera alors vidé de tout contenu.
            </p>
            <p>Attention, interdiction de toucher à l'html!</p>
            <input onKeyUp={(e)=>{
                if(e.keyCode === 13){
                    insertInput();
                }
            }} type="text" id="input"/><button id="go" onClick={()=>insertInput()}>Go!</button>
        </div>
    )
}

export default Exo3;