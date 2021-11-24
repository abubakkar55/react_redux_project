import React from 'react'
import { NavLink } from 'react-router-dom';

const SingleProduct = ({ title, image, price, description, id }) => {
    return (
        <div className="p-5 rounded shadow">
            <img className="w-28 h-28 mx-auto mb-4" src={image} alt="product-img" />
            <h2 className="mb-3">{title} </h2>
            <p className="mb-5">{description?.slice(0, 30)} </p>
            <div>
                <button> ${price}</button>
                <button><NavLink to={`product_details/${id}`}> add to cart </NavLink>  </button>
            </div>
        </div>
    )
};

export default SingleProduct;