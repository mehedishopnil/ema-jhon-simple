import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    
    // Done: 1. Determine the total number of items::
    const {totalProducts} = useLoaderData()
    console.log(totalProducts);

    // 2.ToDo: Decide the number of items per page::
    const itemsPerPage = 10;

    // 3.Done: Total Pages::
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // Page Numbers::
    const pageNumbers = [...Array(totalPages).keys()]


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        //step-1: get id
        for (const id in storedCart) {

            //step-2: get the product by using id
            const addedProduct = products.find(product => product._id === id);

            //step-3: get the product quantity

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                //step - 4: add the addedproduct to savedCart
                saveCart.push(addedProduct);
            }

        }
        //step -5: Set to cart
        setCart(saveCart);
    }, [products]);

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <>
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                }
            </div>

            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='review-order' to="/orders">
                        <button className='cart-delete-btn checkout'>
                        Review Order
                            <FontAwesomeIcon className='cart-delete-icon' icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>

        {/* Pagination */}
        <div className='pagination'>
                {
                    pageNumbers.map(number => <button key={number}>{number}</button>)
                }
        </div>
        </>
    );
};

export default Shop;