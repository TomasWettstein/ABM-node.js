let modal = document.getElementById('modalA')
let botonesnMostrarModal = document.getElementsByClassName('botonInfo')

for (const boton of botonesnMostrarModal) {
    boton.addEventListener('click', (e) => {
        let formEditar = document.getElementById("formEditar")
    formEditar.setAttribute('action', `/modificar/${boton.dataset.id}`)
    modal.setAttribute('style', 'display: block;')
    let inNombre = document.getElementById('modalNombre')
    let inDireccion = document.getElementById('modalDireccion')
    let inTelefono = document.getElementById('modalTelefono')
    console.log(inNombre,inDireccion, inTelefono)
    inNombre.value = boton.dataset.nombre
    inDireccion.value = boton.dataset.direccion
    inTelefono.value = boton.dataset.telefono
    let botonCerrar = document.getElementById('cerrarModal')
    botonCerrar.addEventListener('click', (e)=>{
        modal.setAttribute('style', 'display: none;')
    })
    let botonCerrar2 = document.getElementById('cerrarModal2')
    botonCerrar2.addEventListener('click', (e)=>{
        modal.setAttribute('style', 'display: none;')
    })
    })
}

