function coompras(trabalho1, trabalho2) {

    const comprarSorvete = trabalho1 || trabalho2
    const comprartvde50 = trabalho1 && trabalho2
    const comprartvde32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return{comprarSorvete, comprartvde50, comprartvde32 , manterSaudavel}
    
    
}


console.log(coompras (true, true ))
console.log(coompras (true, false ))
console.log(coompras (false, true ))
console.log(coompras (false, false ))