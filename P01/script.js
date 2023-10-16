//* Declaração de variáveis para a manipulação do display.
let display = document.getElementById('display')
let displayValue = '0'
let resetTela = false

//* Declaração de varáveis para a realização do cálculo.
let numAtual = 0
let operadorAtual = ''
let operadorAnterior = '+'
let container = 0
let isFirstContNum = true
let calc = 0


function addDigit(digit){
    if (displayValue.length === 1 && (displayValue == 0 || resetTela === true)){
        displayValue = digit
    } else {
        displayValue += digit
    }
    display.setAttribute("value", displayValue)
    numAtual = +displayValue

    if (isFirstContNum){
        container = numAtual
    }
}

function clear(resetDisplay){
    switch (resetDisplay){
        case true:  display.setAttribute("value", '0')
                    break;
        default:    
    }
    
    numAtual = 0
    displayValue = '0'
}

function operations(operador){
    alert(operador)
    switch (operadorAnterior){
        case '+':   calc += container
                    break;
        case '-':   calc -= container
                    break;
    }

    operadorAnterior = operador

    clear(false)
}

function addMultiplicacaoDivisao(operador){
    //TODO: Fazer esta função!!!
}

document.getElementById('zero').addEventListener('click', function (event) {
    addDigit('0')
});
document.getElementById('um').addEventListener('click', function (event) {
    addDigit('1')
});
document.getElementById('dois').addEventListener('click', function (event) {
    addDigit('2')
});
document.getElementById('tres').addEventListener('click', function (event) {
    addDigit('3')
});
document.getElementById('quatro').addEventListener('click', function (event) {
    addDigit('4')
});
document.getElementById('cinco').addEventListener('click', function (event) {
    addDigit('5')
});
document.getElementById('seis').addEventListener('click', function (event) {
    addDigit('6')
});
document.getElementById('sete').addEventListener('click', function (event) {
    addDigit('7')
});
document.getElementById('oito').addEventListener('click', function (event) {
    addDigit('8')
});
document.getElementById('nove').addEventListener('click', function (event) {
    addDigit('9')
});

document.getElementById('pontoButton').addEventListener('click', function (event) {
    addDigit('.')
});

//! Não funciona.
document.getElementById('clearButton').addEventListener('click', function (event) {
    clear(false)
});

document.getElementById('botaoMais').addEventListener('click', function (event) {
    operations('+')
});

document.getElementById('botaoMenos').addEventListener('click', function (event) {
    operations('-')
});

document.getElementById('botaoMais').addEventListener('click', function (event) {
    addMultiplicacaoDivisao('*')
});

document.getElementById('botaoMenos').addEventListener('click', function (event) {
    addMultiplicacaoDivisao('/')
});