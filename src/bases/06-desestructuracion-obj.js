const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron man'
}

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

//console.log(persona.edad);
//console.log(persona.clave);

const retornaPersona = ( usuario ) =>{
    console.log(usuario);
    const {nombre, edad, clave} = usuario
    
}

retornaPersona( persona );

    const retornaPersona2 = ( { nombre, edad, clave, sinTraje = 'Genio, millonario, playboy, filántropo' } ) =>{
    console.log(nombre, edad, clave, sinTraje)    
}

retornaPersona2( persona );


    const useContext = ( { nombre, edad, clave, sinTraje = 'Genio, millonario, playboy, filántropo' } ) =>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2345,
            lng: -12.12345
        }
    }
}
    
    const {nombreClave, anios, latlng: {lat, lng}} = useContext( persona );
    console.log(nombreClave, anios);
    console.log(lat, lng);