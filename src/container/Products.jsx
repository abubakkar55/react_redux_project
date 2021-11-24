import axios from "axios";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './../redux/actions/productsAction';
import SingleProduct from './SingleProduct';

const Products = () => {
    const products = useSelector((state) => state?.allProducts?.products);
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/").catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="px-20 pt-36">
            <div className="grid grid-cols-4 gap-7">

                {
                    products?.map(item => <SingleProduct key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export default Products
