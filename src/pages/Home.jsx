import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../Components/home/Categories';
import ProductCard from '../Components/home/ProductCard';
import { getAllProducts } from '../store/slices/products.slice';
import './styles/Home.css';

const Home = () => {
  const [nameProduct, setNameProduct] = useState('');
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState('');

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameProduct(e.target.nameProduct.value);
    console.log(nameProduct);
  }

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    const newProducts = products.filter(product => product.title.includes(nameProduct) && (product.category.id === category || !category));
    setFilterProducts(newProducts);
  }, [nameProduct, category])



  return (
    <main className='home'>
      <form className='home__form' onSubmit={handleSubmit}>
        <div className='home__form-div'>
          <input className='home__form-input' type="text" name='nameProduct' placeholder='What are you looking for?' />
          <button className='home__form-btn'><i className='bx bx-search-alt-2' ></i></button>
        </div>
      </form>

      <div className="home__container">
        <Categories setCategory={setCategory} />

        <section className='home__containerProducts'>
          {
            filterProducts.map(product => <ProductCard key={product.id} product={product} />)
          }
        </section>
      </div>

    </main>
  )
}

export default Home