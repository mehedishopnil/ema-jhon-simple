import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';


//
const Cart = ({ cart, handleClearCart, children }) => {
   // eslint-disable-next-line react/prop-types
    

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }

        // or alternative:
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
        // console.log(quantity);
    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <div>
                <h4>Order summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice} </p>
                <p>Shipping: ${totalShipping} </p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
            </div>

            <div>
                <button onClick={handleClearCart} className='cart-delete-btn'>
                    Clear Cart
                    <FontAwesomeIcon className='cart-delete-icon' icon={faTrashAlt} />
                </button>

                
                {children}
            </div>
        </div>
        

    );
};

export default Cart;