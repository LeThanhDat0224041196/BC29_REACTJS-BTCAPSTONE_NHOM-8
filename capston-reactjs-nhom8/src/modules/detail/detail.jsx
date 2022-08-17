import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieDetailAPI } from '../../service/movie';

export default function Detail() {
  const [movieDetail, setMovieDetail] = useState({});
  const params = useParams();

  useEffect(()=>{
    fetchMovieDetail();
  },[]);

  const fetchMovieDetail = async ()=>{
    const result = await fetchMovieDetailAPI(params.movieId);
    console.log(result);
    setMovieDetail(result.data.content)
  }
  
  return (
    <div className='row'>
      <div className='col-3'>
        <img className='w-100' alt='movie' src={movieDetail.hinhAnh} />
      </div>
      <div className='col-9'>
          <h4>{movieDetail.tenPhim}</h4>
          <p>{movieDetail.moTa}</p>
          <p>{movieDetail.ngayKhoiChieu}</p>
          <div>
            <button className='btn btn-success'>TRAILER</button>
          </div>
      </div>
    </div>
  )
}
