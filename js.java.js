/* ==========================================
   DOG FAMILY - MINI SUIZITO
   SISTEMA DE EFECTOS VISUALES
========================================== */


// 1. MENSAJE DE INICIO

console.log("DOG FAMILY - Lanzamiento MINI SUIZITO");


// 2. SELECCIONAR LAS TARJETAS

const tarjetas = document.querySelectorAll(".card");


// 3. CREAR OBSERVADOR DE ANIMACIONES

const observador = new IntersectionObserver(

    function(entradas) {

        entradas.forEach(function(entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


// 4. OBSERVAR TODAS LAS TARJETAS

tarjetas.forEach(function(tarjeta) {

    observador.observe(tarjeta);

});


// 5. OBTENER EL AÑO ACTUAL

const anio = new Date().getFullYear();


// 6. ACTUALIZAR EL PIE DE PAGINA

const pie = document.querySelector("footer p");

if (pie !== null) {

    pie.textContent =
        "Mini Suizito - Nuevo lanzamiento " + anio;

}


// 7. MENSAJE FINAL

console.log("DOG FAMILY esta listo para el lanzamiento.");

console.log("Los cuatro Mini Suizitos estan preparados.");