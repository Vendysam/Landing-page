import React, { useState } from 'react'
import Background from './components/Background/background';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Dive Into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to ", text2:"your passions"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] =useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount = {heroCount}/>
      <NavBar/>
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData [heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
