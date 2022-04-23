
// Complejidad temporal de un algoritmo (de menor a mayor):

/*
    0(1) || 0(cte): constante -> ej: nos posicionamos en una posicion de un arreglo en especifico
    0(log n): logaritmico -> descartamos una parte del arreglo de manera multiplicativa
    0(n): lineal -> Recorrer un arreglo
    0(n ^ 2): cuadrática -> iteraciones anidadas

*/

// Programación dinámica:

// Se busca una solución a un problema en un tiempo de ejecución dado.

const fibonacci = (position, memo={}) => {

    if(position in memo) return memo[position];

    if (position <= 2) return 1;
    
    memo[position] = fibonacci(position - 1, memo) + fibonacci(position - 2, memo);
    
    return memo[position];

}

const stepPermutations = (cant, memo={}) => {

    if(cant in memo) return memo[cant];

    if ( cant === 1 ) return 1;
    if ( cant === 2 ) return 2;
    if ( cant === 3 ) return 3;

    memo[cant] = stepPermutations(cant - 1, memo) + stepPermutations(cant - 2, memo) + stepPermutations(cant - 3, memo);

    return memo[cant];

}   



const results = stepPermutations(5);
//const results = fibonacci(100);

//--- results
console.clear()
console.log(results);
