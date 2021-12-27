const saludar = function(nombre){
    return `Hola, ${nombre}`;
}
const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre)=> `Hola, ${nombre}`;
const saludar4 = ()=> `Hola, Gohan`;

console.log(saludar('Mamuela'))
console.log(saludar2('Goku'))
console.log(saludar3('Vegeta'))
console.log(saludar4())

const getUser = () => {
    return{
        uid: 'ABC123',
        userName: 'andinoCoder_123'
    }
} 

const getUser2 = () => ({
        uid: 'XYZ123',
        userName: 'malvadoCoder_123'
    })
 
const user = getUser();
console.log(user);
console.log(getUser());
console.log(getUser2());

function getUsuarioActivo(nombre){
    return{
        uid: 'LMN234',
        userName: nombre
    }
}
const getUsuarioActivo2 = (nombre)=>({
        uid: 'LMN234',
        userName: nombre
    })

const usuarioActivo = getUsuarioActivo('Mamuela')
const usuarioActivo2 = getUsuarioActivo2('Andrés')

console.log(usuarioActivo)
console.log(usuarioActivo2)
