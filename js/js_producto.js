const productos = [
    {nombre:"almohada", precio: 20, img:"https://i.pinimg.com/736x/c2/68/dd/c268dd34b977a8c706bbc4e965732042.jpg"},
    {nombre:"figura", precio: 30, img:"https://i.pinimg.com/736x/9b/6f/68/9b6f68995ddefe740c2c230c6186bf2a.jpg"},
    {nombre: "tanque", precio: 90, img:"https://i.pinimg.com/1200x/72/2b/18/722b18a13fd8cf5e98c569fbd1318941.jpg"}

];

const contenedor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML=`
        <img src="${prod.img}" alt="${prod.nombre}"/>
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
    `

    contenedor.appendChild(card);
})