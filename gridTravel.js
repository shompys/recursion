
//notación de punto x,y en una matriz
//2 ^ x + y
//quiero saber todas las posibilidades que tengo para recorrer una grilla
const grid = (x, y, memo= {}) => {

    const keyString = `${x},${y}`;
    if(keyString in memo) return memo[keyString];

    if(x === 0 || y === 0) return 0; // No tiene sentido que exista una grilla con 0 filas o columnas
    if( x === 1 || y === 1) return 1;
    
    const result = { 
        ...memo,
        [keyString]: grid(x - 1, y, memo) + grid(x, y - 1, memo)
    }
    return result[keyString];
} 
const results = grid(5, 5);
console.log(results)