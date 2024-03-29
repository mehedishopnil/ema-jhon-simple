import { getShoppingCart } from "../utilities/fakedb";


    const cartProductsLoader = async() => {
        const  productsLoader = await fetch('http://localhost:5000/products');
        const products = await productsLoader.json();
        
        const storedCart = getShoppingCart();
        const savedCart = [];
        console.log(storedCart);

        for (const id in storedCart){
            const addedProduct = products.find(pd => pd._id === id);
            if (addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }

        return savedCart;
    }


export default cartProductsLoader;