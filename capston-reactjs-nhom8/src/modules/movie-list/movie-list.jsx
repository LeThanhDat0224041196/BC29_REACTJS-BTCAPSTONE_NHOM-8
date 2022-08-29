import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { fetchMovieListAPI } from '../../service/movie';
import {LoadingContext} from '../../contexts/loading.context'
import { useAsync } from '../../hooks/useAsync';

export default function MovieList() {
const navigate = useNavigate();
const [movieList, setMovieList] = useState([]);

useEffect(()=>{
    fetchMovieList();
}, []);

const fetchMovieList = async ()=>{
    const result = await fetchMovieListAPI();
    // console.log(result);
    setMovieList(result.data.content);
}

// const {state: movieList = []} = useAsync({
//     dependencies: [],
//     service: ()=> fetchMovieListAPI(),
// });


const renderMovieList = ()=>{
    return movieList.map((ele)=>{
        return (
            <div key={ele.maPhim} className='col-xl-3'>
                <div className='card movie-card' style={{marginBottom: 20, height: 500}}>
                    <img className='card-img-top' src={ele.hinhAnh} alt='movie' style={{height: 350, objectFit:'cover'}} />
                    <div className='card-body'>
                        <h5 className='card-title'>{ele.tenPhim}</h5>
                        <button className='btn btn-danger' onClick={()=> navigate(`/movie/${ele.maPhim}`)}>DETAIL</button>
                    </div>
                </div>
            </div>
        );
    });  
};

  return <div className='row mt-3 mx-auto w-75'>{renderMovieList()}</div>
  
}
