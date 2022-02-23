// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"

// Tu código:
  // el .slice corta los primeros n caracteres.
  String.prototype.capitalize=function(){
    return this.charAt(0).toUpperCase()+this.slice(1);
  }
    return nombre.capitalize();
  }

// Codigo de profe:
  /*  var arr= nombre.split('');
    arr[0]=arr[0].toUpperCase();
    return arr.join(''); */

// Codigo de otro alumno:
  // return nombre.charAt(0).toUpperCase()+nombre.slice();}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto
  // con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  function suma() {
    return n1+n2;
  }
  cb(suma);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var sumareduce=numeros.reduce(function(acumulador, elemento){
    return acumulador+elemento;
  },0); // cero viene a ser el contador;

  cb(sumareduce);
};

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // valor hace referencia al array con el i. Puede llamarse manzana, pera, como sea.
  array.forEach(function(valor){
    return cb(valor);
  })
  
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto 
  // por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray= array.map(function(pipe){
    return cb(pipe);
  })
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  /*var nuevoArray=[];
  for (var i=0; i<array.length;i++){
    if (array[i][0]==='a'){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;*/
  var nuevoArray= array.filter(function(palabra){ //el palabra puede ser cualquier otra palabra
    return palabra[0]==='a';
  })
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
