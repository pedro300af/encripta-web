let remplazar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};


function encriptar() {
    let texto = document.getElementById("texto").value;
    if (texto == "") {
        alert("Ingresar el texto, por favor");
    } else {
        textoNuevo = texto.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
        let cambiar = document.querySelector(".mostrar-texto");
        cambiar.innerHTML = textoNuevo;
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;

    if (texto == "") {
        alert("Ingresar el texto, por favor");
    } else {
        let textoNuevo = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

        let cambiar = document.querySelector(".mostrar-texto")
        cambiar.innerHTML = textoNuevo;
    }
}

function copiar() {
    let texto = document.querySelector(".mostrar-texto").innerHTML;
    navigator.clipboard.writeText(texto);
}

function ocultar() {

    document.querySelector(".texto-secudnario2").innerHTML = "";
    document.querySelector(".texto-secudario").innerHTML = "";
    document.querySelector("#imagen-secundaria").style.display = 'none';
}

function mostrar() {
    document.querySelector(".boton-copiar").style.display = "inline";
}