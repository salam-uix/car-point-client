import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import NewsLetter from '../../Shared/NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Products from '../Products/Products';

const Home = () => {

    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Brands></Brands>
            <Products></Products>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;