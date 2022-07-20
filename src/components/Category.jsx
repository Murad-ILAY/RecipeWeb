import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom' 
import './Category.css'


import React from 'react'

function Category() {
  return (
    <List>
         <SLink to={'/cuisine/Italian' } className='country'>
             <FaPizzaSlice className='image'></FaPizzaSlice>
             <h4 className='h4'>Italian</h4>
         </SLink >
         <SLink to={'/cuisine/American'} className='country'>
             <FaHamburger className='image'></FaHamburger>
             <h4 className='h4'>American</h4>
         </SLink>
         <SLink to={'/cuisine/Thai'} className='country'>
             <GiNoodles className='image'></GiNoodles>
             <h4 className='h4'>Thai</h4>
         </SLink>
         {/* <NavLink to={'/cuisine/Azerbaijani'}>
             <GiChopsticks></GiChopsticks>
             <h4>Azerbaijani</h4>
         </NavLink> */}
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    
    
`
const SLink = styled(NavLink)`
@media screen and (min-width: 1280px){
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    transform: scale(0.8);

    h4(
        color: white;
        font-size: 0.8rem;
    )

    svg(
        color: white;
        font-size: 1.5rem;
    )
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }

    svg{
        color: white;
    }

    h4{
        color: white;
    }
}

@media screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
    
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    margin: 0 3%;

    h4(
        color: white;
        font-size: 0.8rem;
    )

    svg(
        color: white;
        font-size: 1.5rem;
        
    )
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }

    svg{
        color: white;
    }

    h4{
        color: white;
    }
}



@media screen and (min-width: 501px) and (max-width: 1279px){
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
    
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    

    margin: 0 3%;

    h4(
        color: white;
        font-size: 0.8rem;
    )

    svg(
        color: white;
        font-size: 1.5rem;
    )
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }

    svg{
        color: white;
    }

    h4{
        color: white;
    }
}
    
`

export default Category