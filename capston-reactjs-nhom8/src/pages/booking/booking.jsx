import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchBookingTicketAPI, fetchRoomListAPI } from '../../service/booking';
import Chair from '../../modules/chair/chair';

export default function Booking() {
  const [danhSachGhe, setDanhSachGhe] = useState([]);
  const [roomList, setRoomList] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    fetchRoomList();
  }, []);

  const fetchRoomList = async ()=>{
    const result = await fetchRoomListAPI(params.maLichChieu);
    console.log(result);
    setRoomList(result.data.content);
  }

  const handleBookingTicket = async ()=>{
    const danhSachVe = danhSachGhe.map((ele)=>{
      return {
        maGhe: ele.maGhe,
        giaVe: ele.giaVe,
      };
    });

    const submitData = {
      maLichChieu: params.maLichChieu,
      danhSachVe,
    };

    await fetchBookingTicketAPI(submitData);
    alert('TICKET SUCCESSFUL !!!');
    navigate('/');
  };
  
  const handleSelect = (selectedChair)=>{
    const data = [...danhSachGhe];
    const idx = data.findIndex((ele)=> ele.tenGhe === selectedChair.tenGhe);

    if(idx !== -1){
      data.splice(idx,1);
    } else{
      data.push(selectedChair)
    }
    setDanhSachGhe(data)
  };

  return roomList ? (
    <div className='row w-75 mx-auto my-5'>
      <div className='col-8-xl'>
      {roomList.danhSachGhe.map((ele,idx)=>{
        return(
          <React.Fragment key={ele.tenGhe}>
              <Chair handleSelect={handleSelect} item={ele} />
              {(idx+1)%16 === 0 && <br />}
          </React.Fragment>
        );
      })}
      </div>
      <div className='col-4-xl'>
        <img className='img-fluid'
        src={roomList.thongTinPhim.hinhAnh}
        alt='image'
        />
        <h4>Tên Phim: {roomList.thongTinPhim.tenPhim}</h4>
        <h5>Mô tả: {roomList.thongTinPhim.moTa}</h5>
        <p>
          Ghê: {danhSachGhe.map((ele)=>(
            <span key={ele.tenGhe} className='badge badge-success'>
              {ele.tenGhe}
            </span>
          ))}
        </p>
        <p>
          Tổng tiền: {danhSachGhe.reduce((previousValue, currentValue)=>{
            previousValue
          })}
        </p>
      </div>
    </div>
  ) : (
    "Loading"
  );
}
