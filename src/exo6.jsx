import React,{useState} from 'react';

function Exo6() {
    const [calcul, setCalcul] = useState('');

    let calculette1 = () => {
        let mySelect = document.getElementById('mySelect');
        let input1 = document.getElementById('input1');
        let input2 = document.getElementById('input2');
        let answer = document.getElementById('answer');
        switch (mySelect.value) {
            case "+":
                answer.innerHTML = parseFloat(input1.value) + parseFloat(input2.value);
            break;
            case "-":
                answer.innerHTML = parseFloat(input1.value) - parseFloat(input2.value);
            break;
            case "*":
                answer.innerHTML = parseFloat(input1.value) * parseFloat(input2.value);
            break;
            case "/":
                answer.innerHTML = parseFloat(input1.value) / parseFloat(input2.value);
            break;
            default:
            break;
        }
    }

    let calculette2 = (value) => {
        let inputCalculette2 = document.getElementById('inputCalculette2');
        inputCalculette2.value += value;
    }
    let egalCalculette2 = () => {
        let inputCalculette2 = document.getElementById('inputCalculette2');
        setCalcul(eval(inputCalculette2.value));
    }
    let remiseZero = () => {
        let inputCalculette2 = document.getElementById('inputCalculette2');
        inputCalculette2.value = "";
        setCalcul('');
    }

    return (
        <div id="partie6" className="text-left px-5 py-5">
            <h2>Création calculatrice</h2>
            {/* Niveau1 */}
            <h4>Niveau 1</h4>
            <div className="row justify-content-center mb-5">
                <input id="input1" type="number" />
                <select id="mySelect">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input id="input2" type="number"/>
                <button onClick={()=>calculette1()}>=</button>
                <p><span id="answer"></span></p>
            </div>
            {/* NIVEAU2 */}
            <h4>Niveau 2</h4>
            <div className="row justify-content-center mb-5">
                <div id="contourCalc" className="pb-5">
                    <div className="d-flex justify-content-end pt-4 m-2" id="result">
                        {calcul}
                    </div>
                    <div className="text-center pt-5">
                        <input className="" id="inputCalculette2" />
                    </div>
                    <div className="container">
                        <div className="row mt-4 text-center">
                            <div className="col-3"><button onClick={()=>calculette2(1)}>1</button></div>
                            <div className="col-3"><button onClick={()=>calculette2(2)}>2</button></div>
                            <div className="col-3"><button onClick={()=>calculette2(3)}>3</button></div>
                            <div className="col-3"><button id="btnPlus" onClick={()=>calculette2('+')}>+</button></div>
                        </div>
                        <div className="row mt-4 text-center">
                            <div className="col-3"><button onClick={()=>calculette2(4)}>4</button></div>
                            <div className="col-3"><button onClick={()=>calculette2(5)}>5</button></div>
                            <div className="col-3"><button onClick={()=>calculette2(6)}>6</button></div>
                            <div className="col-3"><button id="btnMoins" onClick={()=>calculette2('-')}>-</button></div>
                        </div>
                        <div className="row mt-4 text-center">
                            <div className="col-3"><button onClick={()=>calculette2(7)}>7</button></div>
                            <div className="col-3"><button onClick={()=>calculette2(8)}>8</button></div>
                            <div className="col-3"><button onClick={()=>calculette2(9)}>9</button></div>
                            <div className="col-3"><button id="btnFois" onClick={()=>calculette2('*')}>*</button></div>
                        </div>
                        <div className="row mt-4 text-center">
                            <div className="col-3"><button id="btnC" onClick={()=>remiseZero()}>c</button></div>
                            <div className="col-3"><button id="btnZero" onClick={()=>calculette2(0)}>0</button></div>
                            <div className="col-3"><button id="btnEgal" onClick={()=>egalCalculette2()}>=</button></div>
                            <div className="col-3"><button id="btnDiv" onClick={()=>calculette2('/')}>/</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exo6;