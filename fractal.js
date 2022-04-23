const fractal = (n, memo = {}) => {

    if(n === 1) return 1;

    return fractal(n -1) + (n - 1) * 4;

}

const result = fractal(3)

console.log(result)