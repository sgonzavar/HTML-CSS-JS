// console.log("enlazado");

let titleText = document.querySelector(".title").textContent;
// let parfText = document.getElementById("parf").innerHTML;
let parf = document.getElementsByClassName

// document.getElementById("parf").innerHTML = "Algo";
document.querySelector(".title").textContent = "Algo";



for (let index = 0; index < parf.length; index++) {
    const element = parf[index];
    console.log(`Esto son los elementos de los parrafos: ${element.innerHTML}`);
}


// console.log(`cantidad de elementos ${parf.length}`); 
// console.log(titleText);
// console.log(parfText);
// console.log(otherText);