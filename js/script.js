var x1 = 10;
var x1 = 100;

let x2 = 10;
x2 = 1000;

const x3 = 10;

console.log(x1);
console.log(x2);
console.log(x3);

// iteraciones
const cielo = document.getElementById("cielo");

for(let i = 0; i<5; i++)
{
    cielo.innerHTML += "⭐";
}

const planetas = ["🌍", "🪐", "🌕"];

for(const planeta of planetas){
    cielo.innerHTML += planeta;
}

let m=0
while(m<5)
{
    cielo.innerHTML += "☁️"
    m++;
}

let n=0;
do{
    cielo.innerHTML += "🚀"
    n++;
}while(n<4);

const btnEstrella = document.getElementById("btnEstrella");

btnEstrella.addEventListener("click", ()=> { // Evento de doble click
    cielo.innerHTML += "⭐";
})

// Eventos

const btnPlaneta = document.getElementById("btnPlaneta");

btnPlaneta.addEventListener("dblclick", () => { // Evento de doble click
    cielo.innerHTML += "🪐"
})

const inputEmoji = document.getElementById("inputEmoji");

const btnAgregarEmoji = document.getElementById("btnAgregaEmoji");

btnAgregarEmoji.addEventListener("click", () => {
    var emoji = inputEmoji.value.trim();
    if(emoji) cielo.innerHTML += emoji;
    inputEmoji.value="";
})

inputEmoji.addEventListener("keydown", e => {
    if(e.key==="Escape") cielo.innerHTML="";
})
