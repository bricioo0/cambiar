const botonCambiar = document.getElementById('cambiar');
const elementoTexto = document.getElementById('Texto');

botonCambiar.addEventListener('click', () => {
    // Genera colores aleatorios para el texto y el fondo
    const colorTexto = generarColorAleatorio();
    const colorFondo = generarColorAleatorio();

    // Cambia el texto y el fondo con los colores aleatorios
    elementoTexto.style.color = colorTexto;
    document.body.style.backgroundColor = colorFondo;
});

// Función para generar un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
    const letrasHex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letrasHex[Math.floor(Math.random() * 16)];
    }
    return color;
}

