import React from 'react'
import test from '../assets/bakgrunn.svg'
import DisplayTrip from '../components/Trips/DisplayTrip'
import CreateTrip from '../components/Trips/CreateTrip'
import Searchbar from '../components/Searchbar'
import '../styles/HomePage.css'



function HomePage() {
  return (
    <>
      <div className='hero-content'>
        <h1 className='hero-title'>YOUR NEXT JOURNEY AWAITS...</h1>
      </div>
      <img src={test} alt="" className='background-image' />
      
      <div className='bottom-content'>
        <h1 className='text-over-image'>NEWEST TRIPS</h1>
        <div><Searchbar></Searchbar></div>
        <div className='card-view'>
          <CreateTrip />
          <DisplayTrip />
          <DisplayTrip />
        </div>
      </div>
    </>
  )
}

export default HomePage