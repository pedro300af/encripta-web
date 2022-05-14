let remplazar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};


function encriptar() {
    let texto = document.getElementById("texto").value;

    textoNuevo = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    if (texto == "") {
        alert("Ingresar el texto, por favor");
    } else {
        let textoNuevo = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        let cambiar = document.querySelector(".mostrar-texto");
        cambiar.innerHTML = textoNuevo;
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value;

    if (texto == "") {
        alert("Ingresar el texto, por favor");
    } else {
        let textoNuevo = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u").replace(/mes/gi, "");

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