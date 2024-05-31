let txtNombre = document.getElementById("txtNombre"); 
let txtTelefono = document.getElementById("txtTelefono");
let txtCorreo = document.getElementById("txtCorreo"); 
let txtConsulta = document.getElementById("txtConsulta");
let ltaErrores = document.getElementById("ltaErrores");
let ltaMensajes = document.getElementById("ltaMensajes");

function validar() {
ltaErrores.innerHTML = "";
txtNombre.classList.remove("error");
txtTelefono.classList.remove("error");
txtCorreo.classList.remove("error");
txtConsulta.classList.remove("error");
let errores = [];
let regex_tel = /^[1-9]\d{9}$/;
let primerCaracter = txtTelefono.value.charAt(0);
let regex_cor = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
let rpta = "Gracias por contactarnos, a la brevedad nos comunicaremos con usted TAKESHI-GYM.";
let nbre = txtNombre.value.trim();
let crreo = txtCorreo.value.trim();
let cta = txtConsulta.value;

if (nbre.length == 0) {
    errores.push("Ingrese el nombre");
    txtNombre.classList.add("error");
} else if (nbre.length > 50) {
errores.push("Nombre muy largo (50 caracteres)");
txtNombre.classList.add("error");}

if (txtTelefono.value.length == 0 && crreo.length == 0) {
    errores.push("Ingrese el numero de telefono o correo electronico");
    txtTelefono.classList.add("error");
    txtCorreo.classList.add("error");}

    if (txtTelefono.value.length > 10) {       
        errores.push("Teléfono muy largo (10 dígitos)"); 
        txtTelefono.classList.add("error"); 
}
    if (txtTelefono.value.length > 0 && !regex_tel.test(txtTelefono.value)) {
        
        if (primerCaracter == "0"){
        errores.push("Teléfono inválido (No puede empezar con cero)"); 
        txtTelefono.classList.add("error"); 
        } else{
        errores.push("Teléfono inválido (menor a 10 digitos)"); 
        txtTelefono.classList.add("error"); 
        }
    }
    if (!regex_cor.test(txtCorreo.value)) {
        if (!txtCorreo.value.length == 0){
        errores.push("El formato de correo electronico no es valido, formato aceptado: usuario@dominio.com"); 
        txtCorreo.classList.add("error"); 
        }
    }
    for (let err of errores) {
        
        let li = document.createElement("li"); 
    
        li.innerHTML = err; 
        ltaErrores.appendChild(li); 
    }
    if (errores.length == 0) { 
        let li = document.createElement("li"); 
        
        if (txtTelefono.value.length == 0) {

        li.innerHTML = `Hola ${nbre}, te escribiremos al correo: ${txtCorreo.value} <p>
        Su consulta: ${cta} <p>
        ${rpta}`; 
        
        } else if (txtCorreo.value.length == 0) { 
        li.innerHTML = `Hola ${nbre}, nos comunicaremos al telefono: ${txtTelefono.value} <p>
        Su consulta: ${cta} <p>
        ${rpta}` ;
        } else {
        li.innerHTML = `Hola ${nbre}, nos contactaremos al telefono: ${txtTelefono.value} o mail: ${txtCorreo.value} <p>
        Su consulta: ${cta} <p>
            ${rpta}` ;
        }
        
        ltaMensajes.appendChild(li); 
        document.forms[0].reset();
        


        return false;
    } else {
        return false; 
}
}
























