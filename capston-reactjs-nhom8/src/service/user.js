import {request} from '../configs/axios'

export const loginAPI = (data)=>{
    return request({
        data: data,
        url: '/QuanLyNguoiDung/DangNhap',
        method: "POST",
    })
}