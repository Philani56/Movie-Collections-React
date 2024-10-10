import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMore from '../../components/ExploreMore/ExploreMore'
import MovieDisplay from '../../components/MovieDisplay/MovieDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
        <Header/>
        <ExploreMore category={category} setCategory={setCategory}/>
        <MovieDisplay category={category} />
        <AppDownload/>
    </div>
  )
}

export default Home