import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieShowTimeAPI } from '../../service/cinema';

export default function TabShowTime() {
  const params = useParams();
  const [showTime, setShowTime] = useState([]);

  useEffect(()=>{
    fetchMovieShowTime();
  })

  const fetchMovieShowTime = async ()=>{
    const result = await fetchMovieShowTimeAPI(params.movieId);
    // console.log(result);
    setShowTime(result.data.content);
  };

  const renderTabShowTime = ()=>{
    return showTime?.heThongRapChieu?.map((ele, idx)=>{
      return (
        <a
        key={ele.maHeThongRap}
        className={`nav-link text-capitalize ${idx === 0 && 'active'}`}
        data-toogle = 'pill'
        role='tab'
        aria-selected='true'
        href={`#${ele.maHeThongRap}`}
        >{ele.tenHeThongRap}
        </a>
      )
    })
  }

  return (
    <div
      className="nav flex-column nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
        >
          {renderTabShowTime()}
    </div>
  )
}
