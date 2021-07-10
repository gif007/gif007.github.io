import React from 'react';
import ThreeSlider from '../components/three-slider/three-slider.component';
import SingleSlider from '../components/single-slider/single-slider.component';

import Bulbasaur from '../images/bulbasaur.png';
import Ivysaur from '../images/ivysaur.png';
import Venusaur from '../images/venusaur.png';

import Squirtle from '../images/squirtle.png';
import Wartortle from '../images/wartortle.png';
import Blastoise from '../images/blastoise.png';

import Charmander from '../images/charmander.png';
import Charmeleon from '../images/charmeleon.png';
import Charizard from '../images/charizard.png';

import BP1 from '../images/bp1.jpg';
import BP2 from '../images/bp2.jpg';
import BP3 from '../images/bp3.jpg';
import BP4 from '../images/bp4.jpg';
import BP5 from '../images/bp5.jpg';
import BP6 from '../images/bp6.jpg';
import BP7 from '../images/bp7.jpg';
import BP8 from '../images/bp8.jpg';
import BP9 from '../images/bp9.jpg';
import BP10 from '../images/bp10.jpg';
import BP11 from '../images/bp11.jpg';
import BP12 from '../images/bp12.jpg';

const barbara = [
    BP1,
    BP2,
    BP3,
    BP4,
    BP5,
    BP6,
    BP7,
    BP8,
    BP9,
    BP10,
    BP11,
    BP12
]

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
        <ThreeSlider images={pokemon} gutter={15} imageWidth={125} imageHeight={125} />
        <SingleSlider images={pokemon} imageWidth={125} imageHeight={125} />
        <SingleSlider images={barbara} imageWidth={217} imageHeight={325} />
    </>
);

export default Test;