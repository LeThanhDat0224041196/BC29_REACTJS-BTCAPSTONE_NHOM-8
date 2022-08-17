import { GROUP_ID } from "../constants/common";
import { request } from "../configs/axios";

const fetchMovieListAPI = ()=>{
    return request({
        url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
        method: "GET"
    })
}

const fetchMovieDetailAPI = (movieId)=>{
    return request({
        url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
        method: "GET",
    })
}

const addMovieUploadImgAPI = (data) =>{
    return request({
        url: '/QuanLyPhim/ThemPhimUploadHinh',
        method: 'POST',
        data,
    })
}

const updateMovieUploadImageAPI = (data) =>{
    return request({
        url: '/QuanLyPhim/CapNhatPhimUpload',
        method: 'POST',
        data,
    })
}

export {fetchMovieListAPI, fetchMovieDetailAPI, addMovieUploadImgAPI, updateMovieUploadImageAPI};