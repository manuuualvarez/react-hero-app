import { heroes } from '../data/hero';

export const getHeroById = (heroId) => {

    return heroes.find( hero => hero.id === heroId );
};