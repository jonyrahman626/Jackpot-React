import React from 'react';
import Banner from '../components/Banner/Banner';
import Game from '../components/Game/Game';
import Spiner from '../components/Spiner/Spiner';
import Pricing from '../components/Pricing/Pricing';
import Tounament from '../components/Tounament/Tounament';


const Index = () => {
    return (
        <div style={{"overflow-x" : "hidden"}}>

            <Banner />

            <Game />

            <Spiner />

            <Pricing />

            <Tounament />
        </div>
    );
}

export default Index;
