//Componentes
const input = document.querySelector("#input-texto");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");
const message = document.querySelector("#mensaje");

//Desaparece el div que muestra respuestas
document.getElementById("div-aparece").style.display="none";

//Funcion del botón encriptar
function encrypt(){
    const text = this.code(input.value.toLowerCase());
    message.value = text;
    input.value = "";
    appear();
}

//Funcion del botón desencriptar
function decrypt(){
    const text = this.decode(input.value.toLowerCase());
    message.value = text;
    input.value = "";
    appear();
}

//Funcion del botón copiar
function copy(){
    navigator.clipboard.writeText(message.value);
    message.value = "";
    alert("Texto copiado!");
}

//Matriz de código
const codeMatrix = [
    ["e","enter"], ["i","imes"],
    ["a",   "ai"], ["o","ober"],
    ["u", "ufat"],
];

//Encripta
function code(toEncrypt){

    toEncrypt = toEncrypt.toLowerCase()
    for (let i = 0; i < codeMatrix.length; i++) {
        if (toEncrypt.includes(codeMatrix[i][0])) {
            toEncrypt = toEncrypt.replaceAll( codeMatrix[i][0], codeMatrix[i][1] )
        }
    }
    return toEncrypt;

}

//Desencripta
function decode(decrypted){

    for (let i = 0; i < codeMatrix.length; i++) {
        if (decrypted.includes( codeMatrix[i][1] )) {
            decrypted = decrypted.replaceAll( codeMatrix[i][1], codeMatrix[i][0] )
        }
    }
    return decrypted;

}

//Muestra resultado
function appear() {
    document.getElementById("div-desaparece").style.display="none";
    document.getElementById("div-aparece").style.display = 'block';
}

//Muestra default
function disappear() {
    document.getElementById("div-aparece").style.display = 'none';
    document.getElementById("div-desaparece").style.display = 'block';
}