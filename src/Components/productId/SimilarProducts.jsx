import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../home/ProductCard';
import './styles/similarProducts.css'

const SimilarProducts = ({ product, categories }) => {
    const [productsByCategory, setProductsByCategory] = useState([]);



    useEffect(() => {
        if (product && categories) {
            const category = categories.filter(category => category.name === product.category);

            const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${category[0].id}`;

            axios.get(URL)
                .then(({ data }) => {
                    const productsFilter = data.data.products.filter(productCategory => productCategory.id !== product.id);
                    setProductsByCategory(productsFilter);
                })
                .catch(err => console.log(err))
        }

    }, [product, categories]);

    return (
        <section className='similarProducts'>
            {
                productsByCategory.map(productsByCategory => <ProductCard  product={productsByCategory} key={productsByCategory.id}/>)
            }
        </section>
    )
}

export default SimilarProducts