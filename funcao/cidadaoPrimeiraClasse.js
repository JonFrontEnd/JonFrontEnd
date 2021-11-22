
    
// criar de forma literal

function func2 () {}

//criar armazendo em uma váriavel 

const  func1 = function () {
    
}

// armanezar no array 


const array= [function (a , b  ) 
    {return a + b

}]

console.log(array[0](9,5))


// armanezar em um atributo de um objeto
 const obj= {}
obj.falar = function () {return "Valorant Games"}

console.log(obj.falar())

// passar um função como parametro

function run (fun){
    fun ()
}
run (function (){ console.log("Executando")})

// uma função pode retornar/ conter uma função

function soma (a , b ){

 return function ( a, b ){
 
    console.log( a + b)
 }
}

console.log(soma = (4+ 9 ))
