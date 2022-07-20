import React from 'react'
import styled from 'styled-components'
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>

            <input
             onChange={(e)=>setInput(e.target.value)} 
             type='text' 
             value={input}/>

            
        </div>
    
    </FormStyle>
  )
}

const FormStyle = styled.form`
@media screen and (min-width: 1280px){
    margin: 0rem 5rem;
    
    div{
        width:100%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1.5rem 5rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        text-align: center;
        height: 40px;
        
    }
    svg{
        position: absolute;
        top: 18%;
        left: 0%;
        transform: translate(100%, 50%);
        color: white;
    }

}

@media screen and (max-width: 500px){
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.2rem;
        color: white;
        padding: 1rem 5rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        text-align: center;
        height: 40px;
        
    }

    svg{
        position: relative;
        top: 33px;
        left: 13px;
        color: white;
    }
}

@media screen and (min-width: 501px) and (max-width: 1279px){
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.2rem;
        color: white;
        padding: 1.5rem 5rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        text-align: center;
        height: 40px;
        
    }

    svg{
        position: relative;
        top: 37px;
        left: 13px;
        color: white;
    }

}
   
`

export default Search