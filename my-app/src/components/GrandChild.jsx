import React from 'react'
import Cards from './Cards'
import myImg from '../assets/Image.jpg'
import myImg2 from '../assets/Untitled.jpeg'
import myimg3 from '../assets/Third image.jpeg'
const GrandChild = (props) => {
  return (
    <>
    <h4>Calling from GrandChild</h4>
    <Cards
    title="My Frist Title"
    myImg1={myImg}
    subtitle="1st Image"
    cImg={props.gcImg}
    />
    <Cards
    title="My Second title"
    myImg1={myImg2}
    subtitle="Second Image"
    />
    <Cards
    title="My Third Title"
    myImg1={myimg3}
    subtitle="Third Image"
    />
    </>
  )
}

export default GrandChild