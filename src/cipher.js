const cipher = {
  // ...
  encode: function (textto, desplazamiento) {
    if (!textto && !desplazamiento) throw new Error("Maria Luisa Ingresaalgo por favor")

    let resultado = '';
    //es la que me devolvera la funcion y se incluir en addvelistener mensaje 2
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //array, en este caso una cadena,    
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    //considerando que tambien se permita numeros negativos.
    if (textto) {
      //si hemos metido algo dentro de la variable

      for (let i = 0; i < textto.length; i++) {
        if (letras.indexOf(textto[i]) !== i)
        //i la letra que acabamos de capturar, indexoff devuelve
        {
          const posicion = ((letras.indexOf(textto[i]) + desplazamiento) % 26);
          //variable que guardar en que posicion de la cadena esta la letra correspondiente y sirve para calcular el desplazamiento
          resultado += letras[posicion];

        }

        else
          resultado += textto[i];
        //en caso que no sea una letra se mostrara tal cual como numeros y simbolos
      }
    }
    return resultado;
    //aqui a todo tu codigo de cifrar 
  },

  decode: function (textto, desplazamiento) {
    if (!textto && !desplazamiento) throw new Error("Maria Luisa Ingresaalgo por favor")

    let resultado = '';
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 - 26) % 26;

    if (textto) {
      for (let i = 0; i < textto.length; i++) {
        if (letras.indexOf(textto[i]) !== i) {
          const posicion = ((letras.indexOf(textto[i]) - desplazamiento) % 26);
          resultado += letras[posicion];
        }
        else
          resultado += textto[i];
      }
    }
    return resultado;
  }
}
export default cipher;