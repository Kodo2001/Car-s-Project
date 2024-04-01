import { useEffect, useState } from 'react'
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  const heroData=[
    { text1:"Dive into" , text2:"What you love" },
    { text1:"indulge" , text2:"your passions" },
    { text1:"Give in to" , text2:"your passions" }
  ]

  const [heroCount,setHeroCount]=useState(0); //lawkatada bydefault wenay dwam dabta background
  const [playStatus ,setPlayStatus]=useState(false); //agar awa bkama true videoka dabta background
  
  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])

  return (
    <>
    <Background //Aw componenta det rsmekm dadate yan videokam dadatawa.
     heroCount={heroCount}
      playStatus={playStatus}
     />

     <Navbar />

     <Hero
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}
     setPlayStatus={setPlayStatus}
     />

      

    </>
  )
}

export default App
