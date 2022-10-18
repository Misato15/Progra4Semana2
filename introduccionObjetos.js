let dispositivo = 
{
    nombre: "gateaway",
    nSerie: 123467,
    valor: 100,
    direccionIpv4:[192,168,10,5],
    estado: false,
    cambiarEstado: function()
    {
        this.estado=!this.estado,
        console.log(`Estao cambio: ${this.estado}`)
    }
}
dispositivo.valor=200
console.log(dispositivo)
dispositivo.cambiarEstado()
console.log(dispositivo.estado)

let numeroSerie = dispositivo.nSerie
let nombreDispositivo = dispositivo.nombre

console.log(numeroSerie, nombreDispositivo)

//Extraer información de un objeto
//Destructuración

let {nSerie,nombre} =  dispositivo
console.log(nSerie, nombre)

let Equipo = 
{
    nombre: "Barcelona",
    golesaFavor: 1,
    golesEnContra: 3
    
}
//-------------------------
let golesLocal = Equipo.golesaFavor
let golesVisitantes = Equipo.golesEnContra
console.log(golesLocal,golesVisitantes)

//--------------------------

let {golesaFavor,golesEnContra} = Equipo
console.log(golesaFavor,golesEnContra)

let loteria = [32,69,47,69]

console.log(loteria)

//destructuración en arreglos

let [,,ganador] = loteria
console.log(ganador)
