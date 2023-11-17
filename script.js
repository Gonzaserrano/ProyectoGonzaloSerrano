const productos={
    plantas: [
        {nombre: "Palo de Agua" ,precio: 7000 ,imagen: './img/Plantas/paloDeAgua.png' },
        {nombre: "Palmito" ,precio: 5500 ,imagen: './img/Plantas/palmito.png' },
        {nombre: "Potus" ,precio: 1500 ,imagen: './img/Plantas/potus.png' },
        {nombre: "Chamaedorea" ,precio: 6000 ,imagen: './img/Plantas/chamaedorea.png' },
        {nombre: "Monstera" ,precio: 8000 ,imagen: './img/Plantas/Monstera.png' },
        {nombre: "Dracaena Marginata" ,precio: 5000 ,imagen: './img/Plantas/marginata.png' },
        {nombre: "Sansevieria" ,precio: 3000 ,imagen: './img/Plantas/sansevieria.png' },
        {nombre: "Croton" ,precio: 4500 ,imagen: './img/Plantas/croton.png' },
        {nombre: "Ave del Paraiso" ,precio: 12000 ,imagen: './img/Plantas/aveDelParaiso.png' },
        {nombre: "Helecho" ,precio: 4000 ,imagen: './img/Plantas/helecho.png' },
        {nombre: "Calathea Stromanthe" ,precio: 3500 ,imagen: './img/Plantas/calathea.png' },
        {nombre: "Monstera Adansonii" ,precio: 2500 ,imagen: './img/Plantas/adansonii.png' }
    ],
    macetas: [
        {nombre: "Maceta de Fibrocemento" ,precio: 4000 ,imagen: './img/Macetas/maceta1.png' },
        {nombre: "Maceta de Plastico" ,precio: 1500 ,imagen: './img/Macetas/maceta4.png' },
        {nombre: "Maceta de Ceramica" ,precio: 2500 ,imagen: './img/Macetas/maceta3.png' },
        {nombre: "Maceta de Madera" ,precio: 3000 ,imagen: './img/Macetas/maceta2.png' },
        {nombre: "Maceta Forma de Llama" ,precio: 2000 ,imagen: './img/Macetas/macetasAnimal.png' }

    ],
    herramientas: [
      {nombre: "Pala de Mano" ,precio: 3000 ,imagen: './img/Herramientas/pala.png' },
      {nombre: "Rastrillo de Mano" ,precio: 2000 ,imagen: './img/Herramientas/Rastrillo.png' },
      {nombre: "Azada de Mano" ,precio: 2500 ,imagen: './img/Herramientas/azada.png' },
      {nombre: "Tijera" ,precio: 6000 ,imagen: './img/Herramientas/tijera.png' },
      {nombre: "Atomizador" ,precio: 2000 ,imagen: './img/Herramientas/atomizador.png' }
    ],
    agroquimicos:[
      {nombre: "Fungicida" ,precio: 5000  ,imagen: './img/Agroquimicos/fungicida.png' },
      {nombre: "Herbicida" ,precio: 4500 ,imagen: './img/Agroquimicos/herbicida.png' },
      {nombre: "Insecticida" ,precio: 6000 ,imagen: './img/Agroquimicos/insecticida.png' },
      {nombre: "Fitorregulador" ,precio: 10000 ,imagen: './img/Agroquimicos/fitorregulador.png' },
      {nombre: "Acaricidas" ,precio: 3000 ,imagen: './img/Agroquimicos/acaricidas.png' },
    ],
    sustratos:[
      {nombre: "Compost" ,precio: 4000  ,imagen: './img/Sustratos/compost.png' },
      {nombre: "Corteza de Pino" ,precio: 2000 ,imagen: './img/Sustratos/corteza.png' },
      {nombre: "Perlita" ,precio: 1500 ,imagen: './img/Sustratos/perlita.png' },
      {nombre: "Fertilizante" ,precio: 6000 ,imagen: './img/Sustratos/fertilizante.png' },
      {nombre: "Tierra" ,precio: 3000 ,imagen: './img/Sustratos/sustrato.png' },
    ],
};


const carrito = [];

//contenerdor de las tarjetas
const container = document.getElementById('container');

function crearTarjeta(producto) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;
  card.appendChild(imagen);
  
  const nombre = document.createElement('h2');
  nombre.textContent = producto.nombre;
  card.appendChild(nombre);
  
  const precio = document.createElement('p');
  precio.textContent = `Precio: $${producto.precio}`;
  card.appendChild(precio);

  const botonAgregar = document.createElement('button');
  botonAgregar.textContent = 'Agregar al carrito';
  botonAgregar.addEventListener('click', () => {
    agregarAlCarrito(producto); 
  });
  card.appendChild(botonAgregar);
  
  return card;
}

function mostrarCarritoDesplegable() {
  const listaCarritoDesplegable = document.getElementById('listaCarritoDesplegable');
  listaCarritoDesplegable.innerHTML = '';
  carrito.forEach((producto, index) => {
    const li = document.createElement('li');
    li.classList.add('producto-carrito');

    const imagenProducto = document.createElement('img');
    imagenProducto.src = producto.imagen;
    imagenProducto.alt = producto.nombre;
    li.appendChild(imagenProducto);

    const textoProducto = document.createElement('span');
    textoProducto.textContent = `${producto.nombre} - Precio: $${producto.precio}`;

    // Agregar ícono de eliminación
    const iconoEliminar = document.createElement('span');
    iconoEliminar.innerHTML = '<i class="fas fa-times-circle"></i>';
    iconoEliminar.classList.add('eliminar-producto');
    iconoEliminar.addEventListener('click', () => {
      eliminarProducto(index);
    });

    li.appendChild(imagenProducto);
    li.appendChild(textoProducto);
    li.appendChild(iconoEliminar);

    listaCarritoDesplegable.appendChild(li);

    
  });

  // precio total
  const precioTotalCarrito = document.createElement('li');
  precioTotalCarrito.textContent = `Total: $${calcularPrecioTotal()}`;
  listaCarritoDesplegable.appendChild(precioTotalCarrito);
}


// elimina producto del carrito
function eliminarProducto(index) {
  carrito.splice(index, 1); 
  mostrarCarritoDesplegable(); 
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  mostrarCarritoDesplegable();
}

function calcularPrecioTotal() {
  let precioTotal = 0;
  carrito.forEach((producto) => {
    precioTotal += producto.precio;
  });
  return precioTotal;
}

function agregarTarjetas() {

  const inputBusqueda = document.querySelector('input[type="text"]');
  const filtro = inputBusqueda.value.toLowerCase().trim();

  container.innerHTML = '';

  productos.plantas.concat(productos.macetas).concat(productos.herramientas).concat(productos.sustratos).concat(productos.agroquimicos).forEach((producto) => {
    if (producto.nombre.toLowerCase().includes(filtro)) {
      const card = crearTarjeta(producto);
      container.appendChild(card);
    }
  });

}



const menuPlantas = document.querySelector('.menu-vertical li:nth-child(1) a');
const menuMacetas = document.querySelector('.menu-vertical li:nth-child(2) a');
const menuSustratos = document.querySelector('.menu-vertical li:nth-child(3) a');
const menuAgroquimicos = document.querySelector('.menu-vertical li:nth-child(4) a');
const menuHerramientas = document.querySelector('.menu-vertical li:nth-child(5) a');




function cargarProductos(categoria) {
  return function (event) {
    event.preventDefault();
  
    const filtro = categoria.toLowerCase();

    container.innerHTML = '';

    productos[filtro].forEach((producto) => {
      const card = crearTarjeta(producto);
      container.appendChild(card);
    });
  };
}

//seleccionar por categoria
menuPlantas.addEventListener('click', cargarProductos('plantas'));
menuMacetas.addEventListener('click', cargarProductos('macetas'));
menuSustratos.addEventListener('click', cargarProductos('sustratos'));
menuHerramientas.addEventListener('click', cargarProductos('herramientas'));
menuAgroquimicos.addEventListener('click', cargarProductos('agroquimicos'));


agregarTarjetas();

document.querySelector('button').addEventListener('click', agregarTarjetas);

document.querySelector('input[type="text"]').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    agregarTarjetas();
  }
});

