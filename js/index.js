let remplazar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};


function encriptar() {
    let texto = document.getElementById("texto").value;

    console.log(texto.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat"));

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    if (texto === texto) {
        alert("Su texto esta desencriptado ");
    } else {
        console.log(texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u"));
    }
}