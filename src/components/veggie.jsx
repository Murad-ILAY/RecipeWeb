import React from 'react'
import { useEffect , useState} from "react";
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom';
import './veggie.css'

function Veggie() {

  const [veggie, setVeggie] = useState([])

  useEffect(()=> {
    getVeggie();
  },[])

  const getVeggie = async () => {

    const check = localStorage.getItem('veggie')

    if(check){
      setVeggie(JSON.parse(check))
    }
    else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      
      setVeggie(data.recipes)
      // console.log(data.recipes)
    }

    
    
    
    
    

    // console.log(data);
    // console.log(typeof(popular))
 
  }


  return (
    <div><Wrapper>
    <h3 className='veggie_h3'>Vegeterian Picks</h3>

    <Splide 
    options={{
      perPage: 3,
      arrows: false,
      pagination: false,
      drag: 'free',
      gap: "5rem",
    }}>

    {veggie.map((recipe)=>{
      return (
        <SplideSlide key={recipe.id }>
        <Card>
          <Link to={'/recipe/' + recipe.id}>
          
          <p className='veggie_title'>{recipe.title}</p>
          <img src={recipe.image} alt={recipe}/>
          <Gradient />
          </Link>
        </Card>
        </SplideSlide>
      )
    })}
    </Splide>
  </Wrapper></div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
@media screen and (min-width: 1280px){
  min-height: 200px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  text-align: center;


  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    height: 40%;
    display: flex;
    justif-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 500px){
  min-height: 150px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 120px;


  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    height: 50%;
    display: flex;
    justif-content: center;
    align-items: center;
}
}

@media screen and (min-width: 501px) and (max-width: 1279px){
  min-height: 180px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 150px;


  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 50%;
    display: flex;
    justif-content: center;
    align-items: center;
}
}
 
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Veggie