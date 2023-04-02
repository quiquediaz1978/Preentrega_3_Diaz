


let nombreyapellido = false
let nombreApellidoBuscado = ""

for (let i = 0; i < 100 && nombreyapellido == false; i++) {

    nombreApellidoBuscado = prompt("Ingrese su nombre y apellido")
    if (nombreApellidoBuscado == "Enrique Diaz") {
        nombreyapellido = true
        alert("Nombre y apellido encontrado en base de datos")
    } else {
        alert("Nombre y apellido no encontrado, vuelva a intentar")
    }
}

let numeroDeDni = 26818901
let dni = Number(prompt("Ingresa tu numero de DNI"))

if (dni === numeroDeDni) {
    alert("Ingresaste al sistema, Bienvenido!!!")
} else {
    alert("Usuario no encontrado, intente nuevamente")
}



class ProductoController {
    constructor() {
        this.listaProductos = []
    }

    levantarProductos() {

        let resultadoJSON = localStorage.getItem("listaProductos")

        if (resultadoJSON) {
            this.listaProductos = JSON.parse(resultadoJSON)
        } else {
            this.listaProductos = []
        }
    }

    filtrarPorPrecio(precio) {
        this.listaProductos = this.listaProductos.filter(producto => producto.precio <= precio);
    }

    filtrarPorNombre(nombre) {
        this.listaProductos = this.listaProductos.filter(producto => producto.nombre.includes(nombre))
    }


    mostrarEnDOM(index_productos) {
        this.listaProductos.forEach(producto => {
            index_productos.innerHTML += `<div class ="bordes">
            <h3>${producto.nombre}<h3>
            <p>$${producto.precio}</p>
            <p>${producto.descripcion}</p>
            <p>${producto.marca}</p>
            </div>
            `
        });
    }

    limpiarDOM(index_productos) {
        index_productos.innerHTML = ""

    }
}


const contenedor_padre = document.getElementById("contenedor_productos")
const precio = document.getElementById("precio")
const nombre = document.getElementById("nombre")


const controladorProductos = new ProductoController()
controladorProductos.levantarProductos()
controladorProductos.mostrarEnDOM(contenedor_padre)

precio.addEventListener("change", () => {
    if (precio.value > 0) {
        controladorProductos.levantarProductos()
        controladorProductos.filtrarPorPrecio(precio.value)
        controladorProductos.limpiarDOM(contenedor_padre)
        controladorProductos.mostrarEnDOM(contenedor_padre)
    } else {
        controladorProductos.levantarProductos()
        controladorProductos.limpiarDOM(contenedor_padre)
        controladorProductos.mostrarEnDOM(contenedor_padre)
    }
})

nombre.addEventListener("change", () => {
    controladorProductos.levantarProductos()
    controladorProductos.filtrarPorNombre(nombre.value)
    controladorProductos.limpiarDOM(contenedor_padre)
    controladorProductos.mostrarEnDOM(contenedor_padre)

})