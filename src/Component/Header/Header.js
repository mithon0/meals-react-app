import React, { useEffect, useState } from 'react';
import MealsCard from '../../MealsCard/MealsCard';
import './Header.css'
const Header = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [searchText])
    // search btn handler
    function heandler() {
        const searchField = document.getElementById('search-field').value;
        setSearchText(searchField);
    }

    return (
        <div className='body'>
            <nav className='nav'>

                <div className='navigation'>
                    <div className='title'>
                        <h1>FakeDb</h1>
                    </div>
                    <div className='links'>
                        <a href="/home">Home</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/about">About</a>
                        <a href="/lohin">Call Now</a>
                        <a href="/callnow">Log In</a>
                    </div>
                </div>
            </nav>
            <div className='inputField'>
                <input id='search-field' type="text" placeholder='Search' />
            </div>
            <button onClick={heandler}>Search</button>
            <hr />
            {/* body */}
            <div className='component-part'>
                
               <div className='cards'>
               {
                    meals.map(meal=><MealsCard
                    key={meal.idMeal}
                    meal={meal}
                    ></MealsCard>)
                }
               </div>
               <div>
               <h1>meals length:{meals.length}</h1>
                <h1>masurement</h1>
               </div>
            </div>
        </div>
    );
};

export default Header;