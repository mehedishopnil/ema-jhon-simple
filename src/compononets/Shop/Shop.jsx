import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }

    setCart(saveCart);
  }, [products]);

  // Pagination data
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };

  // Handle Clear Cart
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Current Page Data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = products.slice(startIndex, endIndex);

  // Options for items per page select
  const options = [5, 10, 20];


  return (
    <>
      <div className="shop-container">
        <div className="products-container">
          {currentData.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link className="review-order" to="/orders">
              <button className="cart-delete-btn checkout">
                Review Order
                <FontAwesomeIcon
                  className="cart-delete-icon"
                  icon={faArrowRight}
                />
              </button>
            </Link>
          </Cart>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination grid">
        <div>
          <p className="text-center">Current Page: {currentPage}</p>
          <p className="text-center">Items Per Page: {itemsPerPage}</p>
        </div>

        <div>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={currentPage === number ? "selected" : ""}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}

          {/* Drop Down */}
          <>
            <select
              className="border rounded p-2 ml-2 bg-orange-200"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(parseInt(e.target.value));
                setCurrentPage(1); // Reset to the first page when items per page changes
              }}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </>
        </div>
      </div>
    </>
  );
};

export default Shop;
