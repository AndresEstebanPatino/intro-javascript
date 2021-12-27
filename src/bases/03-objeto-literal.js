const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 23.3435453,
        lat: 23.773829823,
        lng: 12.234342,
    }

};


const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);
