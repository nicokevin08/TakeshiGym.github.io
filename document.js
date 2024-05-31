
let imagenes = [
    "imagen1.jpg",
    "imagen2.jpg",
    "imagen3.jpg",
];



document.imagen.src = imagen[0];


let flechaderecha = document.querySelector(".div_flechaderecha");
let flechaizquierda = document.querySelector(".div_flechaizquierda");
let contador = 0;




flechaderecha.addEventListener("click",derecha)

function derecha(){
contador++;

if(contador > imagenes.length-1){
contador = 0;
}

document.imagen.src = imagenes[contador];

}

flechaizquierda.addEventListener("click",izquierda);


function izquierda(){
contador--;

if(contador < 0){
    contador = imagenes.length-1; }
document.imagen.src = imagenes[contador];


}


