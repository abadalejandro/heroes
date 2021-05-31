import { heroes } from '../data/heroes';

export const getHeroesByName = (name:any  = '') => {
    if(!name) return heroes;
    name = name?.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero?.toLocaleLowerCase().includes(name));
}