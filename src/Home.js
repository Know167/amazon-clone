import React from 'react'
import './Home.css'
import Product from './Product.js'


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg" alt="" />
            </div>
            <div className="home__row">
                {/* product */}
                <Product 
                title='omae wa mou shindeiru'
                price={1299}
                image="https://images-eu.ssl-images-amazon.com/images/I/91FvDEE9sCL._AC_UL450_SR450,320_.jpg"
                rating={4}
                />
                {/* product */}
                <Product
                title='blaster'
                price={1149}
                image="https://images-eu.ssl-images-amazon.com/images/I/71MNVwWhkaL._AC_UL450_SR450,320_.jpg"
                rating={4}
                />
            </div>
            <div className="home__row">
                {/* product */}
                <Product
                title='leanstop'
                price={2099}
                image="https://images-eu.ssl-images-amazon.com/images/I/61Q-Mj7u7iL._AC_UL450_SR450,320_.jpg"
                rating={4}
                />
                {/* product */}
                <Product
                title='wadduheck'
                price={700}
                image="https://images-eu.ssl-images-amazon.com/images/I/61ZvXHcRrrL._AC_UL450_SR450,320_.jpg"
                rating={3}
                />
                {/* product */}
                <Product 
                title='Justin'
                price={329}
                image="https://images-eu.ssl-images-amazon.com/images/I/61Ih+ry88oL._AC_UL450_SR450,320_.jpg"
                rating={5}
                />
            </div>
            <div className="home__row">
                {/* product */}
                <Product
                title='fuckubitch'
                price={14999}
                image="https://m.media-amazon.com/images/I/71L-lTQnJiL._AC_UY218_.jpg"
                rating={4}
                />
            </div>
        </div>
    )
}

export default Home