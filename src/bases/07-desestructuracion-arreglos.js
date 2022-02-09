const personajes = ['goku', 'vegeta', 'trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [, , p1] = personajes; 

console.log(p1)

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const  [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

const useState= (valor ) => {
    return [valor, ()=> {console.log('hola, mundo')} ];
}

const [nombre, setnombre]= useState( 'goku');

console.log(nombre);
setnombre();