import React, { createContext } from 'react'
import Child from './Child'
import myparentImg from '../assets/Untitled.jpeg'
import {Hooks} from './Hooks'

const First=createContext();
const Parent = () => {
  
  return (
    <>
    <h1 className='prbg'>I am calling from Parent</h1>
    <Child
    parentimg={myparentImg}
    />
    <First.Provider value="Ahmed Ikram">
    <Child/>
    </First.Provider>
    
    <Hooks/>
    </>
  )
}

export default Parent
export {First};