import cipher from './cipher.js';
document.getElementById("mensaje").addEventListener(
  "keyup",
  function () {
    this.value = this.value.toUpperCase();
  })


document.getElementById("cifrar").addEventListener("click", function () {
  const texto = document.getElementById("mensaje");
  const desplazamiento = document.getElementById("desplazamiento");
  //        cipher.encode(texto, desplazamiento);
  document.getElementById("mensaje2").value = cipher.encode(texto.value, desplazamiento.value);
},
true
)

document.getElementById("descifrar").addEventListener("click", function () {
  const texto = document.getElementById("mensaje").value;
  const desplazamiento = document.getElementById("desplazamiento").value;
  //        cipher.encode(texto, desplazamiento);
  document.getElementById("mensaje2").value = cipher.decode(texto, desplazamiento);
},
true
)

