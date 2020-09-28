
function messageColor() {
    const color = document.getElementById("colorMensaje").value;
    let mensajes = document.getElementsByClassName("message");

    for (let index = 0; index < mensajes.length; index++) {
        mensajes[index].style.color = color;
    }

    codeMaker();
}

function backColor() {
    const color = document.getElementById("colorFondo").value;
    document.getElementById("chat").style.background = color;

    codeMaker();
}

function chatSize() {
    const tamano = document.getElementById("tamanoFuente").value;
    document.getElementById("tablechat").style.fontSize = tamano + "px";

    codeMaker();
}

function codeMaker() {
    let code = document.getElementById("code");
    const checkTamano = document.getElementById("tamanoFuenteCheckbox").checked;
    const checkColorM = document.getElementById("colorMensajeCheckbox").checked;
    const checkColorF = document.getElementById("colorFondoCheckbox").checked;


    code.innerHTML = "body { margin: 0px auto; overflow: hidden; ";

    if (checkColorF) {
        const colorFondo = document.getElementById("colorFondo").value;
        code.innerHTML += "background-color: " + colorFondo + "; "
    } else {
        code.innerHTML += "background-color: rgba(0, 0, 0, 0); "
    }

    if (checkTamano) {
        const tamanoFuente = document.getElementById("tamanoFuente").value;
        code.innerHTML += "font-size: " + tamanoFuente + "px; "
    }

    code.innerHTML += "}"

    if (checkColorM) {
        const colorMensaje = document.getElementById("colorMensaje").value;
        code.innerHTML += "<br><br>.message { color: " + colorMensaje + "; }"
    }
}