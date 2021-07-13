import React from 'react';
import ThreeSlider from '../components/three-slider/three-slider.component';
import SingleSlider from '../components/single-slider/single-slider.component';

import Bulbasaur from '../images/pokemon/bulbasaur.png';
import Ivysaur from '../images/pokemon/ivysaur.png';
import Venusaur from '../images/pokemon/venusaur.png';

import Squirtle from '../images/pokemon/squirtle.png';
import Wartortle from '../images/pokemon/wartortle.png';
import Blastoise from '../images/pokemon/blastoise.png';

import Charmander from '../images/pokemon/charmander.png';
import Charmeleon from '../images/pokemon/charmeleon.png';
import Charizard from '../images/pokemon/charizard.png';


const pokemon = [
    Bulbasaur,
    Ivysaur,
    Venusaur,
    Squirtle,
    Wartortle,
    Blastoise,
    Charmander,
    Charmeleon,
    Charizard
];


const Test = () => (
    <>
        <ThreeSlider gutter={15} componentWidth={125} componentHeight={125}>
            {
                pokemon.map((img, index) => <img key={index} src={img} alt='pokemon' />)
            }
        </ThreeSlider>
        <SingleSlider images={pokemon} imageWidth={125} imageHeight={125} />
    </>
);

export default Test;