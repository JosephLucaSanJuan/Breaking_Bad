/**********************/
/*    BREAKING BAD    */
/*     JavaScript     */
/* Autor: Joseph Luca */
/*  Fecha: 16/06/2023 */
/**********************/

class Registro{
    constructor(nombre,email,emailVal,num,organizacion){
        this.nombre = nombre;
        this.email = email;
        this.emailVal = emailVal;
        this.num = num;
        this.organizacion = organizacion;
    }
}

function validacion(){
    let nombre = document.getElementById('');
    let email = document.getElementById('');
    let emailVal = document.getElementById('');
    let num = document.getElementById('');
    let organizacion = document.getElementById('');
    let valid = true;

    if (nombre.vale.length==0) {
        valid = false;
        document.getElementById('errorCharacter').style.visibility = "visible";
    }
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        valid = false;
        document.getElementById('errorMail').style.visibility = "visible";
    }
    if (emailVal.equals(email)) {
        valid = false;
        document.getElementById('errorMail').style.visibility = "visible";
    }
    if (isNaN(num) || num<1 || num>5) {
        valid = false;
        num.style.borderColor = "red";
        document.getElementById('errorNumber').style.visibility = "visible";
    }
    if (organizacion == 0) {
        valid = true;
        organizacion.style.borderColor = "red";
        document.getElementById('errorOrganizacion').style.visibility = "visible";
    }

    if (valid) {
        let registro = new Registro();
    }
    return valid
}

function quitarError(nodo, id){
    nodo.style.borderColor = "chartreuse";
    document.getElementById(id).style.visibility = "hidden";
}