const inputNombreUsuario = document.getElementById("nombre-usuario");
const inputUsuario = document.getElementById("usuario");
const inputEmail = document.getElementById("email");
const botonGuardar = document.getElementById("guardar");
let descuento;

const validarDatos = (nombreUsuario, nombre, email) => {
    if (nombreUsuario !== '' && nombre !== '' && email !== '' && nombreUsuario !== ' ' && nombre !== ' ' && email !== ' ' && nombreUsuario !== null && nombre !== null && email !== null) {
        alert('¡FELICIDADES!!!\nAhora tienes un 5% de descuento adicional en tu primera compra, disfrútalo');
        descuento = true;

        localStorage.setItem('usuario', nombreUsuario);
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('email', email);

        mostrarDatos();
    } else {
        descuento = false;
    }
    localStorage.setItem('descuento', descuento.toString());
    return descuento;
}

const primerRegistro = () => {
    alert('Bienvenido a PC paradise \n "potencia sin limites" \n Cree una cuenta y reciba un descuento adicional');
    let nombreUsuario = prompt("Nombre de usuario: ");
    let nombre = prompt("Nombre:");
    let email = prompt("Correo electrónico: ");
    
    validarDatos(nombreUsuario, nombre, email);
}

const mostrarDatos = () => {
    const nombreUsuario = localStorage.getItem('usuario');
    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');

    inputNombreUsuario.value = nombre;
    inputUsuario.value = nombreUsuario;
    inputEmail.value = email;
}

const crearOIniciarSesion = () => {
    const cuponUsado = localStorage.getItem('cupon-usado');
    if (cuponUsado === 'true') {
        mostrarDatos();
    } else {
        primerRegistro();
    }
}

botonGuardar.addEventListener("click", () => {
    const nuevoNombre = inputNombreUsuario.value;
    const nuevoUsuario = inputUsuario.value;
    const nuevoEmail = inputEmail.value;

    localStorage.setItem('usuario', nuevoUsuario);
    localStorage.setItem('nombre', nuevoNombre);
    localStorage.setItem('email', nuevoEmail);
    
    alert("Datos cambiados con exito");
    mostrarDatos();
})

crearOIniciarSesion();
