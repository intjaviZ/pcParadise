document.addEventListener('DOMContentLoaded', () => {
    vistaCompletaPromocion();
    vistaCompletaComponentes();
    vistaCompletaLaptops();
    vistaCompletaAlmacenamiento();
    vistaCompletaOtrosProductos();
});

const vistaCompletaPromocion = () => {
    const productoAMostrar = document.querySelectorAll(".promociones");

    productoAMostrar.forEach(productoPromocion => {
        productoPromocion.addEventListener("click", () => {
            const productoHTML = productoPromocion.innerHTML; // Convertimos los nodos a HTML
            localStorage.setItem('nodosProducto', productoHTML);
            window.location.href = "mostrarProducto.html";
        });
    });
}

const vistaCompletaComponentes = () => {
    const productoAMostrar = document.querySelectorAll(".componentes");

    productoAMostrar.forEach(productoComponente => {
        productoComponente.addEventListener("click", () => {
            const productoHTML = productoComponente.innerHTML; // Convertimos los nodos a HTML
            localStorage.setItem('nodosProducto', productoHTML);
            window.location.href = "mostrarProducto.html";
        })
    });
}

const vistaCompletaLaptops = () => {
    const productoAMostrar = document.querySelectorAll(".laptops");

    productoAMostrar.forEach(productoLaptop => {
        productoLaptop.addEventListener("click", () => {
            const productoHTML = productoLaptop.innerHTML; // Convertimos los nodos a HTML
            localStorage.setItem('nodosProducto', productoHTML);
            window.location.href = "mostrarProducto.html";
        })
    });
}

const vistaCompletaAlmacenamiento = () => {
    const productoAMostrar = document.querySelectorAll(".almacenamiento");

    productoAMostrar.forEach(productoAlmacenamiento => {
        productoAlmacenamiento.addEventListener("click", () => {
            const productoHTML = productoAlmacenamiento.innerHTML; // Convertimos los nodos a HTML
            localStorage.setItem('nodosProducto', productoHTML);
            window.location.href = "mostrarProducto.html";
        })
    });
}

const vistaCompletaOtrosProductos = () => {
    const productoAMostrar = document.querySelectorAll(".otros-productos");

    productoAMostrar.forEach(producto => {
        producto.addEventListener("click", () => {
            const productoHTML = producto.innerHTML; // Convertimos los nodos a HTML
            localStorage.setItem('nodosProducto', productoHTML);
            window.location.href = "mostrarProducto.html";
        })
    });
}