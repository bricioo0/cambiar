const botonCambiar = document.getElementById('cambiar');
const elementoTexto = document.getElementById('Texto');
const elementoTitulo = document.getElementById('Titulo')
const elementoSubtitulo = document.getElementById('Subtitulo')


botonCambiar.addEventListener('click', () => {

    const colorTexto = generarColorAleatorio();
    const colorFondo = generarColorAleatorio();
    const colorBoton = generarColorAleatorio();
    const colorTitulo = generarColorAleatorio();
    const colorSubtitulo = generarColorAleatorio();

    elementoTexto.style.color = colorTexto;
    document.body.style.backgroundColor = colorFondo;
    botonCambiar.style.backgroundColor = colorBoton;
    elementoTitulo.style.color = colorTitulo;
    elementoSubtitulo.style.color = colorSubtitulo
});


function generarColorAleatorio() {
    const letrasHex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letrasHex[Math.floor(Math.random() * 16)];
    }
    return color;
}

