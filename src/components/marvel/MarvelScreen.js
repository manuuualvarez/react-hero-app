import React from 'react'
import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr></hr>
            <HeroList publisher= "Marvel Comics"/>
        </div>
    )
}