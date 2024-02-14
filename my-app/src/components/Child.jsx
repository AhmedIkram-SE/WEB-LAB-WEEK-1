import React from 'react'
import GrandChild from './GrandChild'
import { Firstname } from '../App'
import { First } from './Parent'
const Child = (props) => {
  return (
    <>
    <h3>Calling from Child</h3>
    <Firstname.Consumer>
      {(myname)=> {
        return <h1>My name that comes from app {myname}</h1>
      }}
    </Firstname.Consumer>
    <First.Consumer>
      {(Firstname) => {
        return <h2>Second Time name calling {Firstname}</h2>
      }}
    </First.Consumer>
    </>
  )
}

export default Child