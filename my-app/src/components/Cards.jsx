import React from 'react'

const Cards = (props) => {
  return (
    <>
    <h5>Calling from cards component</h5>
    <h1>{props.title}</h1>
    <img src={props.myImg1} alt="img not found"/>
    <h1>{props.subtitle}</h1>
    <img src={props.cImg} alt="" />
    </>
  )
}

export default Cards