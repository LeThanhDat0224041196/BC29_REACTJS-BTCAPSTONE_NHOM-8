import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag, Input, Typography } from "antd";
import { fetchMovieListAPI } from "../../service/movie";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/common";

const { Title } = Typography;

export default function MovieTables() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetchMovieListAPI();
    console.log(result);
    setData(result.data.content);
  };

  const columns = [
    {
      title: "Image",
      key: "hinhAnh",
      render: (ele) => {
        return (
          <img
            className="img-fluid"
            src={ele.hinhAnh}
            style={{ height: 150, objectFit: "cover" }}
          />
        );
      },
    },
    {
      title: "Movie",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Premiere Date",
      dataIndex: "ngayKhoiChieu",
      key: "ngayKhoiChieu",
      render: (text) => {
        return <span>{formatDate(text)}</span>;
      },
    },
    {
      title: "Stars",
      dataIndex: "danhGia",
      key: "danhGia",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() =>
              navigate(`/admin/movie-management/${record.maPhim}/update`)
            }
            type="primary"
          >
            Edit
          </Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="xl">
        <Title level={4}>Movie Management</Title>
        <div className="mt-1 mb-1">
          <Input placeholder="Search" />
        </div>
        <div className="text-left mb-3">
          <Button onClick={()=>navigate('/admin/movie-management/create')} type="primary">CREATE</Button>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}
