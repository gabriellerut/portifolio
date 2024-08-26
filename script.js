let frente = document.getElementById("frente");

document.addEventListener('mousemove', (event) => {
    requestAnimationFrame(() => {
        let rect = frente.getBoundingClientRect();
        // Coordenadas do cursor relativas ao elemento #frente
        let x = event.clientX - rect.left - rect.width / 2 + "px";
        let y = event.clientY - rect.top - rect.height / 2 + "px";

        // Ajusta o tamanho da máscara e a posição centralizada
        frente.style.webkitMaskImage = `radial-gradient(circle at ${x} ${y}, transparent 80px, black 0%)`;
    });
});