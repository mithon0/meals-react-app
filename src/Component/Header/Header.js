import React, { useEffect, useState } from 'react';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'

import MealsCard from '../../MealsCard/MealsCard';
import Details from '../details/Details';
import './Header.css'
const Header = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('a');
    const [cart,steCart] =useState([]);
 
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, [searchText])
    // search btn handler
    function heandler() {
        
        const searchfield = document.getElementById('search-field');
        let searchField =searchfield.value;
        
        setSearchText(searchField);
        
       
    }

    // details button handlar
   
    const detailBtn=(meals)=>{
        const newCart =[...cart,meals]
        steCart(newCart);
        // console.log(cart);
    }


    return (
        <div className='body'>
            <nav className='nav'>

                <div className='navigation'>
                    <div className='title'>
                        <h1>Restu<span className='r'>R</span>ent</h1>
                    </div>
                    <div className='links'>
                        <a className='b' href="/home">Home</a>
                        <a className='b' href="/contact">Contact Us</a>
                        <a className='b' href="/about">About</a>
                        <a className='b' href="/lohin">Call Now</a>
                        <a className='b' href="/callnow">Log In</a>
                        <a className='c' href="/d"><FontAwesomeIcon icon={faBars}/> </a>
                    </div>
                   
                </div>
               
            </nav>
            <div className='inputField'>
              
                <input id='search-field' type="text" placeholder='Search by latter (a,b,c...etc)' />
            </div>
            <button className='btn1' onClick={heandler}>Search</button>
            <h1 className='total'>Total Meals:{meals.length}</h1>
            <hr />
            {/* body */}
            <div className='component-part'>

                <div className='cards'>
                    {
                        meals.map(meal => <MealsCard
                            key={meal.idMeal}
                            meal={meal}
                            detailBtn={detailBtn}
                        ></MealsCard>)
                    }
                </div>
                <div>
                   
                    <Details
                    cart={cart}
                    ></Details>
                </div>
            </div>
        </div>
    );
};

export default Header;