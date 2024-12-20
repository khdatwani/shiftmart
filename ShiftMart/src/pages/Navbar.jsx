import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
        <div className='h-20 w-auto' style={{background:'linear-gradient(to right,black,purple)'}}>
            <ul style={{display:"flex",gap:150,fontFamily:"cursive",position:"absolute",left:800,top:25}}>
                <li><button style={{fontSize:20,fontWeight:"bold"}} className='hover:text-red-500 text-white'>Home</button></li>
                <li><button style={{fontSize:20,fontWeight:"bold"}} className='hover:text-red-500 text-white'>Login</button></li>
                <li><button style={{fontSize:20,fontWeight:"bold"}} className='hover:text-red-500 text-white'>Category</button></li>
                <li><button style={{fontSize:20,fontWeight:"bold"}} className='hover:text-red-500 text-white'>Cart</button></li>
            </ul>
            <Outlet></Outlet>
        </div>

    </div>
  )
}