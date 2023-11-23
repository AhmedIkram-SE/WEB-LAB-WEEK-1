import React from 'react'
import Child from './Child'
import myparentImg from '../assets/Untitled.jpeg'
import {Hooks} from './Hooks'

const Parent = () => {
  
  return (
    <>
    <h1 className='prbg'>I am calling from Parent</h1>
    <Child
    parentimg={myparentImg}
    />
    <Hooks/>
    </>
  )
}

export default Parent