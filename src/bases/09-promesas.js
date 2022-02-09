import {getHeroeById} from './bases/08-importaciones-exportaciones'

/*const promesa = new Promise((resolve, reject)=> {

    setTimeout(() => {

        const heroe = getHeroeById(2);
        resolve(heroe);
        reject('No se pudo encontrar el héroe')
    }, 2000);

}); 

promesa.then( (heroe) => {
    console.log('then de la promesa', heroe)
} )
.catch(error => console.warn(error));

*/

const getHeroeByIdAsync = (id) => {

   return new Promise((resolve, reject)=> {

        setTimeout(() => {
    
            const heroe = getHeroeById(id);
            if(heroe){

                resolve(heroe);
            }
            else{
                reject('No se pudo encontrar el héroe')
            }
           
        }, 2000);
    
    });
     
}

getHeroeByIdAsync(3).then(heroe => console.log('Heroe', heroe))
.catch(error => console.warn(error));

