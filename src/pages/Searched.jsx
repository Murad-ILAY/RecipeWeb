import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './Searched.css'

function Searched() {

    const [searchRecipies, setSearchRecipies] = useState([])
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)
        
        const recipes = await data.json();

        setSearchRecipies(recipes.results);
    }

    useEffect(()=>{
        getSearched(params.search)
    },[params.search]);

  return (
    <Grid>
        {searchRecipies.map((item)=>{
            return (
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    
                        <img src={item.image} alt='' className='search_image'/>
                        <h4>{item.title}</h4>
                    
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}


const Grid = styled.div`
  

`
const Card = styled.div`
  text-align: center;
  
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }

  @media screen and (max-width: 500px){
    img {
      width: 250px;
    }
}
`

export default Searched