import React from 'react';
import Branches from '../Branches/Branches';
import Header from '../Header/Header';
import BasicService from '../BasicService/BasicService';
import PremiumService from '../PremiumService/PremiumService';
import Footer from '../../Shared/Footer/Footer';
import Review from '../Review/Review';
import ContactForm from '../ContactForm/ContactForm';
import Documentary from '../Documentary/Documentary';
import './Home.css';
const Home = () => {
    return (
        <div className="home-container">
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