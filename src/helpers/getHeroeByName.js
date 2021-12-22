import { heroes } from '../data/hero';

export const getHeroByName = (name = '') => {

    if(name.length === 0) return [];

    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name.toLowerCase()));
};