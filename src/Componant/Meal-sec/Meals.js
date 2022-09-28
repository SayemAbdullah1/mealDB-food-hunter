import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Mael from '../Meal/Mael';
import './Meals.css'

const Meals = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart)

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
            .then(data => setProducts(data.meals))
    } ,[])
    const addToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }


    return (
        <div className='meals-sec'>
            <div>
            <div>
                <h2 className='heading'>The food hunter</h2>
            <div className='meals-info'>
                {
                    products.map(meal => <Mael
                    meal = {meal}
                        key={meal.idMeal}
                        addToCart = {addToCart}
                    ></Mael>)
                }
            </div>

            </div>

            </div>
            <div className='order-cart-sec'>
            <div className='order-list'>
                <h3 className='order'>Order List</h3>
                { (
                    <ol>
                        {cart.map(c => (
                            <li >
                                <div className='api-img'>

                                    <div><h4>{c.strMeal}</h4></div>
                                <div><img src={c.strMealThumb} alt="" /></div>
                                </div>
                                </li>
                        ))}
                    </ol>
                )}
                
            </div>

            </div>
        </div>
    );
};

export default Meals;