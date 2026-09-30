/**
 * ARCHIVO DE SCRIPT Y LÓGICA DE CONTROL
 * UF1306 - CASO PRÁCTICO CE1.3
 */

document.addEventListener("DOMContentLoaded", function () {
    
    /**
     * Función que obtiene la hora actual formateada (HH:MM:SS)
     * @returns {string} Hora formateada
     */
    function obtenerHoraActual() {
        const ahora = new Date();
        const horas = ahora.getHours();
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');
        
        return `${horas}:${minutos}:${segundos}`;
    }

    // =========================================================================
    // APARTADO A: Depuración e impresión de la hora en la consola del navegador
    // =========================================================================
    console.log("[HERRAMIENTA DE DEPURACIÓN] Hora actual del sistema:", obtenerHoraActual());

    // =========================================================================
    // APARTADO B: Mostrar la hora en la página y refrescar cada 10 segundos
    // =========================================================================
    const contenedorReloj = document.getElementById("reloj");
    if (contenedorReloj) {
        contenedorReloj.textContent = obtenerHoraActual();
    }

    // Configuración del refresco automático de la página tras 10.000 ms (10 segundos)
    setTimeout(function () {
        console.log("Refrescando la página web tras transcurrir 10 segundos...");
        window.location.reload();
    }, 10000);

});