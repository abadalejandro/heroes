import { heroes } from '../data/heroes';
import { hero } from '../interfaces/interfaces';


export const getHeroById = (id:string):hero|undefined => {

    return heroes.find(hero => hero.id === id);

}
