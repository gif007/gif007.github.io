import React from 'react';
import ThreeSlider from '../components/slider/slider.component';

import Bulbasaur from '../images/bulbasaur.png';
import Ivysaur from '../images/ivysaur.png';
import Venusaur from '../images/venusaur.png';

import Squirtle from '../images/squirtle.png';
import Wartortle from '../images/wartortle.png';
import Blastoise from '../images/blastoise.png';

import Charmander from '../images/charmander.png';
import Charmeleon from '../images/charmeleon.png';
import Charizard from '../images/charizard.png';

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
    <ThreeSlider images={pokemon} gutter={15} imageWidth={125} imageHeight={125} />
);

export default Test;