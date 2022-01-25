let boton = document.getElementById('boton')
boton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click')
    let nombre = document.getElementById('nombre')
    let direccion = document.getElementById('direccion')
    let telefono = document.getElementById('telefono')
    let errorNombre = document.getElementById('errNombre')
    let errorDireccion = document.getElementById('errDireccion')
    let errorTelefono = document.getElementById('errTelefono')
    if(telefono.value != '' && direccion.value != '' && telefono.value != ''){
        $("#formulario").submit();
    }
    if(nombre.value == ''){
        errorNombre.innerText = 'Debe ingresar un nombre'
    }else{
        errorNombre.innerText = ''
    }
    if(direccion.value == ''){
        errorDireccion.innerText = 'Debe ingresar una dirección'
    }else{
        errorDireccion.innerText = ''
    }
    if(telefono.value == ''){
        errorTelefono.innerText = 'Debe ingresar un numero de teléfono'
    }else{
        errorTelefono.innerText = ''
    }
})
let botonEditar = document.getElementById('botonEditar')
botonEditar.addEventListener('click', () => {
    let modalNombre = document.getElementById('modalNombre')
    let modalDireccion = document.getElementById('modalDireccion')
    let modalTelefono = document.getElementById('modalTelefono')
})