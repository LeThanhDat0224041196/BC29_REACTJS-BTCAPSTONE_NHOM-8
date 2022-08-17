import { request } from "../configs/axios";

const fetchMovieShowTimeAPI = (movieId)=>{
    return request({
        url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
        method: 'GET',
    })
}
export {fetchMovieShowTimeAPI}