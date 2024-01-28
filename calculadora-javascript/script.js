let num1, num2

const getNumber = () =>{
    num1 = Number(document.getElementById("numero1").value)
    num2 = Number(document.getElementById("numero2").value)
}

const getResult = (resultado) => {
    document.getElementById("resultado").textContent =  resultado
}

function Somar() {
    getNumber()
    let resultado = num1 + num2

    return getResult(resultado)
}

function Subtrair() {
    getNumber()
    let resultado = num1 - num2

    return getResult(resultado)
}

function Multiplicar() {
    getNumber()
    let resultado = num1 * num2

    return getResult(resultado)
}

function Dividir() {
    getNumber()
    let resultado = num1 / num2

    return getResult(resultado)
}