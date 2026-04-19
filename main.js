const siguienteCollatz = n => (n % 2 === 0) ? n / 2 : (3 * n) + 1; // Definición de la función //
function obtenerTrayectoria(n) {
    let trayectoria = [n];
    while (n > 1) {
        n = siguienteCollatz(n);
        trayectoria.push(n);
    }
    return trayectoria;
}

function visualizarTrayectoria() {
    const num = parseInt(document.getElementById('inputNumero').value);
    const resDiv = document.getElementById('resultados');
    
    if (isNaN(num) || num < 1) {
        alert("Por favor, introduce un número entero positivo.");
        return;
    }

    const secuencia = obtenerTrayectoria(num);
    resDiv.innerHTML = `
        <strong>Número inicial:</strong> ${num} <br>
        <strong>Total de pasos:</strong> ${secuencia.length - 1} <br><br>
        <strong>Trayectoria:</strong> <br>
        <span class="trayectoria-visual">${secuencia.join(" → ")}</span>
    `;
}

