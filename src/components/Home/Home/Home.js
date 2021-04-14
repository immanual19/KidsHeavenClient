import React from 'react';
import Branches from '../Branches/Branches';
import Header from '../Header/Header';
import TempComp from '../../Shared/TempComp/TempComp';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Branches></Branches>
            <TempComp></TempComp>
        </div>
    );
};

export default Home;