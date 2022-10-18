//node cambioDolar.js --cantidad=1000 --tasa=24.78 --tipo=false

//false -> de lps a dolares
//true -> de dolares a lempiras
//console.log(valorResultante)

let [,,p1,p2,p3] = process.argv

const [,cantidad] = p1.split('=')
const [,tasa] = p2.split('=')
let [,tipo] = p3.split('=')
tipo=(tipo==="true")



    let valorResultante = tipo?cantidad*tasa:cantidad/tasa

console.log(`El cambio es: ${valorResultante} ${tipo?'lps': '$'}`)

