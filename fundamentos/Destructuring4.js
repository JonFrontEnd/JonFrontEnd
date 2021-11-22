function rand( [min = 0 , max=1000] ) {
    if (min > max ) [max, min] = [min, max]
    const valor = Math.random()* (max - min) + min
    return Math.floor(valor)
   
}


console.log(rand ( [60 , 50]))

console.log(rand ( [ 961] ));