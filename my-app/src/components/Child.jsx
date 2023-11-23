import React from 'react'
import GrandChild from './GrandChild'
const Child = (props) => {
  return (
    <>
    <h3>Calling from Child</h3>
    <GrandChild
    gcImg={props.parentimg}
    />
    </>
  )
}

export default Child