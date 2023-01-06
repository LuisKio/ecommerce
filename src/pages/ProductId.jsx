import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../Components/productId/ProductInfo';
import SimilarProducts from '../Components/productId/SimilarProducts';
import './styles/ProductId.css';

const ProductId = () => {
  const { id } = useParams()
  const [product, setProduct] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;

    axios.get(URL)
      .then(({ data }) => setProduct(data.data.product))
      .catch(err => console.log(err))
  }, [id]);

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`;

    axios.get(URL)
      .then(({ data }) => setCategories(data.data.categories))
      .catch(err => console.log(err))
  }, [])


  return (
    <main className='productId'>
      <section className="productId__path">
        <Link to={'/'} className='productId__home'>Home</Link>
        <i className='productId__point bx bxs-circle'></i>
        <h4 className='productId__nameProduct'>{product?.title}</h4>
      </section>

      <ProductInfo product={product} />

      <section className='discoverItems'>
        <h3>Discover similar items</h3>
        <SimilarProducts product={product} categories={categories} />
      </section>

    </main>
  )
}

export default ProductId