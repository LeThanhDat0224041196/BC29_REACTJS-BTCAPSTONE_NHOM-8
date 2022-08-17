import React, {useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchMovieShowTimeAPI } from '../../service/cinema';
import { formatDate } from '../../utils/common';

export default function ContentShowTime() {
  const params = useParams();
  const [showTime, setShowTime] = useState([]);

  useEffect(()=>{
    fetchMovieShowTime();
  }, )

  const fetchMovieShowTime = async ()=>{
    const result = await fetchMovieShowTimeAPI(params.movieId);
    // console.log(result);
    setShowTime(result.data.content);
  };

  const renderContentShowTime = ()=>{
    return showTime.heThongRapChieu?.map((ele, idx)=>{
      return(
        <div 
        key={ele.maHeThongRap}
        id={ele.maHeThongRap}
        className={`tab-pane fade-show ${idx === 0 && 'active'}`}
        role='tabpanel'
        >
          {ele.cumRapChieu.map((ele)=>{
            return (
              <div key={ele.maCumRap} className='row mb-5'>
                <div className='col-1'>
                  <img className='img-fluid rounded' src={ele.hinhAnh} />
                </div>
                <div className='col-11 pl-8'>
                  <h5>{ele.tenCumRap}</h5>
                  <span className='text-muted'>{ele.diaChi}</span>
                </div>
                <div className='col-12'>
                  <div className='row'>
                    {ele.lichChieuPhim.map((ele)=>{
                      return(
                        <div key={ele.maLichChieu} className='col-4'>
                          <Link to={`/booking/${ele.maLichChieu}`}>
                          {formatDate(ele.ngayChieuGioChieu)}
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
    })
  }

  return (
    <div className="tab-content" id="v-pills-tabContent">
        {renderContentShowTime()}
    </div>
  )
}
