import React from 'react'
import { Button, Space, Table, Tag } from 'antd';

export default function MovieTables() {
    
    
    
    
    
    
    
    
    
    const columns = [
        {
          title: 'Tên Phim',
          dataIndex: 'tenPhim',
          key: 'tenPhim',
        },
        {
          title: 'Ngày Khởi Chiếu',
          dataIndex: 'ngayKhoiChieu',
          key: 'ngayKhoiChieu',
          render: (text) =>{
            return <span></span>
          }
        },
        {
          title: 'Đánh Giá',
          dataIndex: 'danhGia',
          key: 'danhGia',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Edit</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
  
    return (
        <>
            <div className='text-right mb-3'>
                <Button>CREATE</Button>
            </div>
            <Table columns={columns} dataSource={data} />;
        </>
    )
    
    
  
}
