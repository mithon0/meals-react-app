import React from 'react';
import './Details.css';

const Details = ({cart}) => {
  // console.log(props.cart[0].idMeal);
  let name='';
  let details ='';
  let strIngredient1='';
  let strIngredient2='';
  let strIngredient3='';
  let strIngredient4='';

  for(const product of cart){
    name =product.strMeal;
    details=product.strInstructions;
    strIngredient1=product.strIngredient1;
    strIngredient2=product.strIngredient2;
    strIngredient3=product.strIngredient3;
    strIngredient4=product.strIngredient4;

  }

    return (
        <div className='detail-container'>
          
          <h1>Name:{name}</h1> 
          <h3>Ingredient</h3> 
          <ul>
            <li>{strIngredient1}</li>
            <li>{strIngredient2}</li>
            <li>{strIngredient3}</li>
            <li>{strIngredient4}</li>
          </ul>
            <h1>Details</h1>
          <p>{details}</p>
        </div>
    );
};

export default Details;