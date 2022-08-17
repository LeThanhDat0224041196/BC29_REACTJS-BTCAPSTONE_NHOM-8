import React from 'react'
import HomeLayout from '../../layouts/home'
import Carousel from '../../modules/carousel/carousel'
import MovieList from '../../modules/movie-list/movie-list'


export default function Home() {
  return (
    <div className=''>
        <Carousel />
        <MovieList />
    </div>
  )
}
