do{
    peso = Number (prompt("ingrese su peso en Kg"))
} while (isNaN (peso) || peso<0)
do{
    altura = Number (prompt("ingrese su altura en m"))
} while (isNaN (altura) || peso<0)
let altura2 = altura*altura
let imc = peso / altura2
if(imc< 18.5)
    { respuesta="usted esta bajo de peso"
}else{
    if(imc <25)
    { respuesta="su peso es normal"
}else{
     if(imc < 30)
    { respuesta="preobesidad"
 }else{
     if(imc ==30)
    { respuesta="obesidad"
 }else{
     if(imc<35 )
     { respuesta="obesidad de clase 1"
 }else{
     if(imc < 40)
     { respuesta="obesidad de clase 2"
 }else{
      respuesta="obesidad de clase 3"
 }
 }
 }
    
}    
}
}
document.getElementById("parrafopeso").innerHTML=respuesta
console.log(imc)
