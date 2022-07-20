import { useEffect , useState} from "react";
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom'
import './popular.css'

function Popular() {

  const [popular, setPopular] = useState([])

  useEffect(()=> {
    getPopular();
  },[])

  const getPopular = async () => {

    

    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
    const data = await api.json();
    
    setPopular(data.recipes)
    console.log(data.recipes)
    

    // console.log(data);
    // console.log(typeof(popular))
 
  }

  return (
    <div>

          <Wrapper>
            <h3 className="popular_h3">Popular Picks</h3>

            <Splide 
            options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: "5rem",
            }}>

            {popular.map((recipe)=>{
              return (
                <SplideSlide key={recipe.id }>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                  
                  <p className="popular_title">{recipe.title}</p>
                  <img src={recipe.image} alt={recipe}/>
                  <Gradient />
                  </Link>
                </Card>
                </SplideSlide>
              )
            })}
            </Splide>
          </Wrapper>
          </div>
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
  
 


  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 150%;
    height: 100%;
    object-fit: cover;

  }
}

@media screen and (max-width: 500px){
  min-height: 150px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  width: 120px;
  
 


  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 150%;
    height: 100%;
    object-fit: cover;
}
}

@media screen and (min-width: 501px) and (max-width: 1279px){
  min-height: 150px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  width: 130px;
  
 


  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 150%;
    height: 100%;
    object-fit: cover;

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

export default Popular