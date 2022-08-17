import { request } from "../configs/axios"

const fetchRoomListAPI = (showtime)=>{
    return request({
        url:`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`,
        method: 'GET',
    })
};

const fetchBookingTicketAPI = (data)=>{
    return request ({
        url:'/QuanLyDatVe/DatVe',
        method: 'POST',
        data,
    })
}

export {fetchRoomListAPI, fetchBookingTicketAPI }