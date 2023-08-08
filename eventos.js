 // let fecha = new Date(); //

 const btn = document.getElementById('apretar');

 const div = document.getElementById('div1')
 /* 
 function saludar() {
     const fecha = new Date();
     if (fecha.getHours() >= 8 && fecha.getHours() < 20) {
         alert("Buenos días, bienvenido/a a mi página");
     } else {
         alert("Buenas noches, bienvenido/a a mi página");
     }
 }
 */
 
 function saludar() {
     alert("Hola!")
     event.stopPropagation();
 }
 
 div.addEventListener("click", function () {
     alert("Hola! Soy el div")
 })