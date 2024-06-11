const carruselComponente = () => {
    const siguiente = document.getElementById("siguiente-componentes");
    const anterior = document.getElementById("anterior-componentes");
    const productos = document.querySelectorAll(".componentes");
    const productosComponente = [ productos[0], productos[1], productos[2], productos[3], productos[4] ];

    siguiente.addEventListener("click",() => siguienteProducto());
    anterior.addEventListener("click", () => anteriorProducto());
    let productoMostrado = 0;

    const siguienteProducto = () => {
        productosComponente[productoMostrado].style.display = "none";
            
        productoMostrado++;
            
        if (productoMostrado === productosComponente.length) {
            productoMostrado = 0;
        }

        productosComponente[productoMostrado].style.display = "block";
    }
    const anteriorProducto = () => {
        productosComponente[productoMostrado].style.display= "none";

        productoMostrado--;

        if (productoMostrado < 0) {
            productoMostrado = productosComponente.length - 1;
        }

    productosComponente[productoMostrado].style.display = "block";
    }
}

const carruselLaptops = () => {
    const siguiente = document.getElementById("siguiente-laptops");
    const anterior = document.getElementById("anterior-laptops");
    const productos = document.querySelectorAll(".laptops");
    const productosLaptop = [ productos[0], productos[1], productos[2], productos[3], productos[4] ];

    siguiente.addEventListener("click",() => siguienteProducto());
    anterior.addEventListener("click", () => anteriorProducto());
    let productoMostrado = 0;

    const siguienteProducto = () => {
        productosLaptop[productoMostrado].style.display = "none";
            
        productoMostrado++;
            
        if (productoMostrado === productosLaptop.length) {
            productoMostrado = 0;
        }

        productosLaptop[productoMostrado].style.display = "block";
    }
    const anteriorProducto = () => {
        productosLaptop[productoMostrado].style.display= "none";

        productoMostrado--;

        if (productoMostrado < 0) {
            productoMostrado = productosLaptop.length - 1;
        }

    productosLaptop[productoMostrado].style.display = "block";
    }
}

const carruselAlmacenamiento = () => {
    const siguiente = document.getElementById("siguiente-almacenamiento");
    const anterior = document.getElementById("anterior-almacenamiento");
    const productos = document.querySelectorAll(".almacenamiento");
    const productosAlmacenamiento = [ productos[0], productos[1], productos[2], productos[3], productos[4] ];

    siguiente.addEventListener("click",() => siguienteProducto());
    anterior.addEventListener("click", () => anteriorProducto());
    let productoMostrado = 0;

    const siguienteProducto = () => {
        productosAlmacenamiento[productoMostrado].style.display = "none";
            
        productoMostrado++;
            
        if (productoMostrado === productosAlmacenamiento.length) {
            productoMostrado = 0;
        }

        productosAlmacenamiento[productoMostrado].style.display = "block";
    }
    const anteriorProducto = () => {
        productosAlmacenamiento[productoMostrado].style.display= "none";

        productoMostrado--;

        if (productoMostrado < 0) {
            productoMostrado = productosAlmacenamiento.length - 1;
        }

    productosAlmacenamiento[productoMostrado].style.display = "block";
    }
}

carruselComponente();
carruselLaptops();
carruselAlmacenamiento();