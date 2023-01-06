import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styles/categories.css';

const Categories = ({setCategory}) => {
    const [categories, setCategories] = useState([]);
    const [closedCategory, setClosedCategory] = useState(false);

    const handleClickCategory = (id) => {
        setCategory(id);
    }

    const handleClosedCategory = () => {
        setClosedCategory(!closedCategory);
    }

    useEffect(() => {
      const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories';
      axios.get(URL)
        .then(({data}) => setCategories(data.data.categories))
        .catch(err => console.log(err))
    }, []);
    

    return (
        <section className={`category ${closedCategory && 'closed'}`}>
            <div className='category__header'>
                <span className='category__header-title'>Category</span>
                <i onClick={handleClosedCategory} className='bx bx-chevron-down'></i>
            </div>
            <ul className='category__list'>
                <li onClick={() => handleClickCategory(0)}>All products</li>
                {
                    categories.map(category => <li onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>)
                }
            </ul>
        </section>
    )
}

export default Categories