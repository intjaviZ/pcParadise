document.addEventListener("DOMContentLoaded", function() {
    const productos = document.querySelectorAll('.otros-productos');
    const btnPrev = document.querySelector('.boton-otros:first-of-type');
    const btnNext = document.querySelector('.boton-otros:last-of-type');
    let currentIndex = 0;
    const itemsPerPage = 3; // Mostrando 3 productos por página

    function mostrarProductos() {
        productos.forEach((producto, index) => {
            if (index >= currentIndex && index < currentIndex + itemsPerPage) {
                producto.classList.remove('oculto');
            } else {
                producto.classList.add('oculto');
            }
        });
    }

    btnNext.addEventListener('click', function() {
        if (currentIndex + itemsPerPage < productos.length) {
            currentIndex += itemsPerPage;
        } else {
            currentIndex = 0; // Vuelve al inicio
        }
        mostrarProductos();
    });

    btnPrev.addEventListener('click', function() {
        if (currentIndex - itemsPerPage >= 0) {
            currentIndex -= itemsPerPage;
        } else {
            currentIndex = productos.length - itemsPerPage; // Va al final
        }
        mostrarProductos();
    });

    mostrarProductos();
});