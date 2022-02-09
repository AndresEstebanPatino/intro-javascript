//import {heroes} from './data/heroes';
//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

//console.log(owners);

const getHeroeById = (id) =>{

    return heroes.find((heroe)=>{
        if(heroe.id === id){
            return true;
        }
        else {
            return false;
        }
    })
    
}

//console.log(getHeroeById(2))



const getHeroeById2 = (id) =>{
    return heroes.find((heroe) => heroe.id === id)
    }   


//console.log(getHeroeById2(4))

const getHerosByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner) 
//console.log(getHerosByOwner('DC'));

export {

    getHeroeById,
    getHeroeById2,
    getHerosByOwner
} 