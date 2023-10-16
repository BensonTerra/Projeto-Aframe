//* Declaração de variáveis para a manipulação do display.
let displayInput1Box = document.getElementById("boxInput1");
let displayInput1 = document.getElementById('input1')

let displayOperatorBox = document.getElementById('boxOperator')
let displayOperatorSymbol= document.getElementById("displayOperator");

let displayInput2Box = document.getElementById("boxInput2");
let displayInput2 = document.getElementById('input2')

let displayOutputBox = document.getElementById("boxOutput");
let displayOutput = document.getElementById('display')
displayOutput.setAttribute("value", "0")

let displayValue = '0'
let totalValue = 0

displayOperatorBox.setAttribute("color", "yellow")

let existeMoeda = false

//* Declaração de varáveis para a realização do cálculo.
let inputX = 0
let operator = ""
inputActive()

function inputActive(){
    if (inputX == 1)
    {
        displayInput1Box.setAttribute("color", "red")
        displayInput2Box.setAttribute("color", "white")
    }
    else if (inputX == 2)
    {
        displayInput1Box.setAttribute("color", "white")
        displayInput2Box.setAttribute("color", "red")
    }
    somDigitar()
} 

function addDigit(digit){
  
    if (inputX == 1)
    {   
        if (displayValue.length === 1 && displayValue == 0)
        {
            displayInput1Box.setAttribute("color", "green")
            displayValue = digit
        } 
        else 
        {
            displayValue += digit
        }
        displayInput1.setAttribute("value", displayValue)
    }
    else if (inputX == 2)
    {
        if (displayValue.length === 1 && displayValue == 0)
        {
            displayInput2Box.setAttribute("color", "green")
            displayValue = digit
        } 
        else 
        {
            displayValue += digit
        }
        displayInput2.setAttribute("value", displayValue)
    }
    numAtual = +displayValue
    somDigitar()
}

function clear()
{
    displayInput1.setAttribute("value", "0")
    displayInput1Box.setAttribute("color", "white")

    displayOperatorSymbol.setAttribute("value", "")
    displayOperatorBox.setAttribute("color", "yellow")

    displayInput2.setAttribute("value", "0")
    displayInput2Box.setAttribute("color", "white")

    displayOutput.setAttribute("value", "0")
    displayOutputBox.setAttribute("color", "white")

    displayValue = "0"
    operator = ""

    inputX = 0
    inputActive()
}

function operations(input)
{
    if (input == "+")
    {
        operator = "+"
        displayOperatorSymbol.setAttribute("value", "+");
        
    }
    else if (input == "-")
    {
        operator = "-"
        displayOperatorSymbol.setAttribute("value", "-");
    }
    else if (input == "*")
    {
        operator = "*"
        displayOperatorSymbol.setAttribute("value", "*");
    }
    else if (input == "/")
    {
        operator = "/"
        displayOperatorSymbol.setAttribute("value", "/");
    }
    displayOperatorBox.setAttribute("color", "green") 
    console.log(operator)
    somDigitar()
}

function calculate()
{
    console.log("Calculating")
    let valueDisplay1 = displayInput1.getAttribute("value")
    console.log(valueDisplay1)
    let valueDisplay2 = displayInput2.getAttribute("value")
    console.log(valueDisplay2)
    console.log(operator)
    if (operator == "+")
    {
        totalValue = +valueDisplay1 + +valueDisplay2
        console.log(totalValue)
    }
    else if (operator == "-")
    {
        totalValue = +valueDisplay1 - +valueDisplay2
        console.log(totalValue)
    }
    else if (operator == "*")
    {
        totalValue = +valueDisplay1 * +valueDisplay2
        console.log(totalValue)
    }
    else if (operator == "/")
    {
        totalValue = +valueDisplay1 / +valueDisplay2
        console.log(totalValue)
    }
    displayOutput.setAttribute("value", totalValue)
    operator = ""
    
    resultEvent(totalValue)
}

document.getElementById('boxInput1').addEventListener('click', function (event) {
    inputX = 1
    inputActive()
    displayValue = "0"
    console.log(inputX)
});
document.getElementById('boxInput2').addEventListener('click', function (event) {
    inputX = 2
    inputActive()
    displayValue = "0"
    console.log(inputX)
});

function somDigitar()
{
    let audio = new Audio('teste/som/notification-sound-7062.mp3')
    audio.play();
}
//somDigitar()

function somFalha()
{
    let audio = new Audio('teste/som/negative_beeps-6008.mp3')
    audio.play();
}
//somIgual()

function somResultado()
{
    let audio = new Audio('teste/som/goodresult-82807.mp3')
    audio.play();
}
//somResultado()

function resultEvent(result)
{
    let pilar = document.getElementById("pilar")
    let luzPilar = document.getElementById("luzPilar")
    let moeda = document.getElementById("moedaMario")
    let ovos = document.getElementById("omelete")
    let tarte = document.getElementById("tarte")

    if (result == 62746)
    {
        luzPilar.setAttribute("intensity", "0.75")
        pilar.setAttribute("visible", "true")
        moeda.setAttribute("visible", "true")
        moeda.setAttribute('animation','property: rotation; to: 0 1080 0; loop: true; dur: 5000')
        setTimeout(() =>
        {
            luzPilar.setAttribute("intensity", "0")
            pilar.setAttribute("visible", "false")
            moeda.setAttribute("visible", "false")
            moeda.removeAttribute('animation')
            
        },10000)
        somResultado()
    }
    else if (result == 12)
    {
        luzPilar.setAttribute("intensity", "0.75")
        pilar.setAttribute("visible", "true")
        ovos.setAttribute("visible", "true")
        ovos.setAttribute('animation','property: rotation; to: 0 1080 0; loop: true; dur: 5000')
        setTimeout(() =>
        {
            luzPilar.setAttribute("intensity", "0")

            pilar.setAttribute("visible", "false")
            ovos.setAttribute("visible", "false")
            ovos.removeAttribute('animation')
        },10000)
        somResultado()
    }
    else if (result == 3.14)
    {
        luzPilar.setAttribute("intensity", "0.75")
        pilar.setAttribute("visible", "true")
        tarte.setAttribute("visible", "true")
        tarte.setAttribute('animation','property: rotation; to: 0 1080 0; loop: true; dur: 5000')
        setTimeout(() =>
        {
            luzPilar.setAttribute("intensity", "0")

            pilar.setAttribute("visible", "false")
            tarte.setAttribute("visible", "false")
            tarte.removeAttribute('animation')
        },10000)
        somResultado()
    }
    else
    {
        somFalha()
    }
    setTimeout(() =>
    {
        clear()
    },2000)
    
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

document.getElementById('botaoMais').addEventListener('click', function (event) {
    operations('+')
});
document.getElementById('botaoMenos').addEventListener('click', function (event) {
    operations('-')
});
document.getElementById('botaoMulti').addEventListener('click', function (event) {
    operations('*')
})
document.getElementById("botaoDivi").addEventListener('click', function (event) {
    operations('/')
});

document.getElementById("clearButton").addEventListener('click', function (event) {
    clear()
})
document.getElementById("pontoButton").addEventListener('click', function (event) {
    addDigit('.')
})
document.getElementById('teclaIgual').addEventListener('click', function (event) {
    calculate()
})


let cursor = document.querySelector("a-gui-cursor")
console.log(cursor)

document.querySelector('a-scene').addEventListener('enter-vr', function () 
{
    console.log(cursor)
    cursor.setAttribute("fuse", "true");
});
document.querySelector('a-scene').addEventListener('exit-vr', function () 
{
    console.log(cursor);
    cursor.setAttribute("fuse", "false");
 });
 

