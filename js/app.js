function mario(){
    document.querySelector(".card__figure--mario").style.top="-30px";
}

document.getElementById("boton3").addEventListener("focusout", () =>{
    document.querySelector(".card__figure--mario").style.top="195px";
})

function error() {  
Swal.fire({
    icon: 'error',
    title: 'QUE PENA...',
    text: 'Has fallado pero pueder intentarlo nuevamente!',
    footer: '<a href="https://www.elotrolado.net/w/images/4/48/Piranha_plant1_mario_bros3.gif">Aquí tienes una pista</a>'
});
}