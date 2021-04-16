import React from 'react';
import Branches from '../Branches/Branches';
import Header from '../Header/Header';
import BasicService from '../BasicService/BasicService';
import PremiumService from '../PremiumService/PremiumService';
import Footer from '../../Shared/Footer/Footer';
import Review from '../Review/Review';
import ContactForm from '../ContactForm/ContactForm';
import Documentary from '../Documentary/Documentary';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Branches></Branches>
            <BasicService></BasicService>
            <PremiumService></PremiumService>
            <Review></Review>
            <Documentary></Documentary>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;