let fecha = new Date();

const btn = document.getElementById('apretar');

btn.addEventListener("click", function saludar() {
    const fecha = new Date();
    if (fecha.getHours() >= 8 && fecha.getHours() < 20) {
        alert("Buenos días, bienvenido/a a mi página");
    } else {
        alert("Buenas noches, bienvenido/a a mi página");
    }
});