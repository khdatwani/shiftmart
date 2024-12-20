
  import React, { useState,useEffect } from 'react'
  
  export default function Product() {
    const [product,setProduct]=useState([])
    useEffect(()=>{
      async function getdata(){
        const res=await fetch("http://localhost:3000/product")
        const data=await res.json()
        setProduct(data)
        console.log(data);
        

      }
      getdata()
    },[])

    return (
      <div>
        {product.map((value,index)=>(
          <div key={index.id}>
            <h1>{value.title}</h1>
          </div>
        )

        )}
      </div>
    )
  }
  