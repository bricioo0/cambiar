const botonCambiar = document.getElementById('cambiar');
const elementoTexto = document.getElementById('Texto');

botonCambiar.addEventListener('click', () => {

    const colorTexto = generarColorAleatorio();
    const colorFondo = generarColorAleatorio();

   
    elementoTexto.style.color = colorTexto;
    document.body.style.backgroundColor = colorFondo;
});


function generarColorAleatorio() {
    const letrasHex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letrasHex[Math.floor(Math.random() * 16)];
    }
    return color;
}

