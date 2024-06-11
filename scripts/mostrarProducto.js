document.addEventListener('DOMContentLoaded', () => {
    const insertarInformacion = document.getElementById("mostrar-producto");
    const productoHTML = localStorage.getItem('nodosProducto');

    if (productoHTML) {
        insertarInformacion.innerHTML = productoHTML + insertarInformacion.innerHTML;
    } else {
        console.error('No se encontró el contenido en localStorage');
    }

    let contador = 1;

    document.getElementById('agregar-carrito').addEventListener('click', () => {
        if (contador > 0) {
            const precioElemento = insertarInformacion.querySelector('.precio b') 
                               ? insertarInformacion.querySelector('.precio b').textContent.replace(/[^\d.]/g, '') 
                               : insertarInformacion.querySelector('p b').nextSibling.textContent.replace(/[^\d.]/g, '');
            const producto = {
                html: productoHTML,
                cantidad: contador,
                precio: parseFloat(precioElemento)
            };
            agregarProductoAlCarrito(producto);
        } else {
            alert("Debes elegir al menos 1 unidad");
        }
    });
});

const agregarProductoAlCarrito = (producto) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const indiceProducto = carrito.findIndex(item => item.html === producto.html);

    if (indiceProducto !== -1) {
        alert("Este producto ya está en el carrito.");
    } else {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}
