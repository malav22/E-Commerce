import React, { Component,Fragment,useEffect } from 'react';
import {CgMouse} from 'react-icons/all';
import './Home.css';
import ProductCard from './ProductCard.js';
import MetaData from '../layout/Header/MetaData';
import {getProduct,clearErrors} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";
import Loader from '../layout/Loader/Loader';
import {useAlert} from 'react-alert';
// import {CLEAR_ERRORS} from '../../constants/productConstants';

const Home = () =>{
    const alert = useAlert();
    const dispatch = useDispatch();
    let { loading, error, products } = useSelector((state) => state.products);


    useEffect(() => {
        console.log(error);
        if (error) {
            // alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch]);
    if (error) {
        alert.error(error);
    }
    

    return (
        <Fragment>
            {loading ?
             <Loader/> : (
             <Fragment>
        <MetaData title="E-Commerce"/>
        <div className="banner">
            <p>Welcome to <span style={{ fontSize: "2.5vmax" , color: "tomato"}}>ShopKart</span> eCommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
                <button>
                    Scroll <CgMouse/>
                </button>
            </a>
        </div>
        <div>
            <h2 className="homeHeading">
                Featured Products
            </h2>
        </div>
        <div className="container" id="container">
            {products && products.map((product) => <ProductCard product={product}/>)}
            {/* <Product product={products[0]}/>     */}    

        </div>
    </Fragment>)}
        </Fragment>
    )
}

export default Home;
