import React from 'react'
import Nav from '../Components/Nav'
export default function Main() {
  return (
    <div className="w-full h-auto flex flex-col justify-between  items-center md:max-h-screen md:flex-row">
        <div className="w-[100%] h-[12vh] absolute left-0 bottom-0 z-[999] md:max-w-[8%] md:h-screen lg:max-w-[5%]">
            <Nav/>
        </div>
        <div className="w-[100%]  h-screen md:max-w-[92%] lg:max-w-[95%]">

        </div>
    </div>
  )
}
