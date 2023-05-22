import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarAlt, faProcedures, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        //step-1: get id
        for (const id in storedCart) {

            //step-2: get the product by using id
            const addedProduct = products.find(product => product.id === id);

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
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product key={product.id}
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
    );
};

export default Shop;