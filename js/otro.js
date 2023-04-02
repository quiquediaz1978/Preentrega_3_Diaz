let listaProductos = [
    { id: 1, nombre: "lapiz", precio: 90, descripcion: "Lapiz de grafito", marca: "Steadler"},
    { id: 2, nombre: "lapicera", precio: 100, descripcion: "Boligrafo punta Fina", marca: "BIC"},
    { id: 3, nombre: "Marcador", precio: 140, descripcion: "Marcadores de color negro al agua", marca: "LG" },
    { id: 4, nombre: "Fibras", precio: 250, descripcion: "Punta fina X 12", marca: "Faber"}


]

const listaProductosJSON = JSON.stringify(listaProductos)

localStorage.setItem("listaProductos", listaProductosJSON)
/*
if(obtenerListaJSON){
    listaProductos = JSON.parse(obtenerListaJSON)
}else{
    listaProductos = []
}

console.log(listaProductos)

const form = document.getElementById("formulario")

form.addEventListener("submit", (e) => {

e.preventDefault()

    const id = document.getElementById("id").value
    const nombre = document.getElementById("nombre").value
    const precio = document.getElementById("producto").value
    const descripcion = document.getElementById("descripcion").value
    const marca = document.getElementById("marca").value

listaProductos.push({id:id,nombre:nombre,precio:precio,descripcion:descripcion,marca:marca})

const listaProductosJSON = JSON.stringify(listaProductos)

localStorage.setItem("listaProductos",listaProductosJSON)

form.reset()

console.log(listaProductos)

})
*/
