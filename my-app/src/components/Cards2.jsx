import React,{useEffect, useState} from "react";

const Cards2 = () => {
    const [mycount,setcount] = useState(0)
    useEffect(() =>{
        document.title=`${mycount}`
    })
    return (
        <>
        <div>Cards</div>
        <button onClick={()=> {setcount(mycount+1)}}> Click ME</button>
        </>
    )
}
export default Cards2