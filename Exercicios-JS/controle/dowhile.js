function InteiroAleatorio (min , max ) {

    const valor = Math.random() * (max - min ) + min
 
    return Math.floor(valor)
 
 }
 
   
     let opcao = -1
 
     do{
         opcao = InteiroAleatorio(-1, 10)
         console.log(`A opcao escolhida  foi ${opcao}`)
     }while ( opcao != -1 )
 
 console.log("Até a próxima")