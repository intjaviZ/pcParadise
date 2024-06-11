document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito();
});

const mostrarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaCarrito = document.getElementById('lista-carrito');
    const totalPrecio = document.getElementById('total-precio');
    const totalAntesDescuento = document.getElementById('total-antes-descuento');
    const descuentoElemento = document.getElementById('descuento');

    listaCarrito.innerHTML = '';
    let total = 0;
    let descuento = 0;

    carrito.forEach((producto, index) => {
        const productoElemento = document.createElement('div');
        productoElemento.className = 'productos-carrito';
        productoElemento.innerHTML = `
            ${producto.html}
            <div class="cantidad-unidades">
                <button class="eliminar-producto" onclick="eliminarProducto(${index})">X</button>
                <button class="boton-c-u" onclick="actualizarCantidad(${index}, -1)">-</button>
                <p>${producto.cantidad}</p>
                <button class="boton-c-u" onclick="actualizarCantidad(${index}, 1)">+</button>
            </div>
            <p>Subtotal: $${(producto.cantidad * producto.precio).toFixed(2)}</p>
        `;
        listaCarrito.appendChild(productoElemento);
        total += producto.cantidad * producto.precio;
    });

    totalAntesDescuento.textContent = total.toFixed(2);

    const descuentoLocalStorage = localStorage.getItem('descuento') === 'true';
    if (descuentoLocalStorage) {
        descuento = total * 0.05;
        descuentoElemento.textContent = '5%';
    } else {
        descuentoElemento.textContent = '0%';
    }

    const totalConDescuento = total - descuento;
    totalPrecio.textContent = totalConDescuento.toFixed(2);
}

const actualizarCantidad = (index, cantidad) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito[index].cantidad + cantidad > 0 && carrito[index].cantidad + cantidad <= 10) {
        carrito[index].cantidad += cantidad;
    } else if (carrito[index].cantidad + cantidad <= 0) {
        eliminarProducto(index);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

const eliminarProducto = (index) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

const btnFinalizarCompra = document.querySelector(".finalizar-compra");
btnFinalizarCompra.addEventListener("click", () => {
    alert("Gracias por comprar en PC paradise, recibirás tu compra en los próximos días, disfrútalo.");
    localStorage.removeItem('carrito');

    localStorage.setItem('descuento', 'false');
    localStorage.setItem('cupon-usado', 'true'); // Crear el item cupon-usado

    mostrarCarrito();
});
