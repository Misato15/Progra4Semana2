const [,,parametro1,parametro2]=process.argv

console.log(process.argv)

const nombre = parametro1.split('=')
const edad = parametro2.split('=')

console.log(nombre,edad)