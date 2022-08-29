import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Image
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailAPI } from "../../service/movie";

export default function MovieForm() {
  const [componentSize, setComponentSize] = useState("default");
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const params = useParams();
  const [form] = Form.useForm();
  const [movieDetail, setMovieDetail] = useState();

  useEffect(()=>{
    if(!!params.movieId){
      fetchMovieDetail()
    }
  },[params.movieId])

  const fetchMovieDetail = async()=>{
    const result = await fetchMovieDetailAPI(params.movieId)
    setMovieDetail(result.data.content)
  }

  useEffect(()=>{
    if(movieDetail){
      form.setFieldsValue({
        ...movieDetail,
        ngayKhoichieu: moment(movieDetail.ngayKhoichieu),
      });
      setImage(movieDetail.hinhAnh)
    }
  },[movieDetail])

  
  
  
  
  
  
  
  
  const onFormLayoutChange = (event) => {
    setComponentSize(event.target.value);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="vertical"
      initialValues={{
        tenPhim: '',
        moTa: '',
        ngayKhoichieu: '',
        sapChieu: true,
        danhChieu: true,
        hot: true,
        trailer: '',
        danhGia: '',
      }}
      size={componentSize}
    >
      <Form.Item label="Form Size">
        <Radio.Group defaultValue={componentSize} onChange={onFormLayoutChange}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Movie" name='tenPhim'>
        <Input />
      </Form.Item>
      <Form.Item label="Trailer" name='trailer'>
        <Input />
      </Form.Item>
      <Form.Item label="Describe" name='moTa'>
        <Input />
      </Form.Item>
      <Form.Item label="Premiere Date" name='ngayKhoiChieu'>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Now Showing" valuePropName="checked" name='dangChieu'>
        <Switch />
      </Form.Item>
      <Form.Item label="Coming soon" valuePropName="checked" name='sapChieu'>
        <Switch />
      </Form.Item>
      <Form.Item label='Star' name='danhGia'>
        <InputNumber />
      </Form.Item>
      <Form.Item label='Hình ảnh'>
        <Input type='file'/>
      </Form.Item>
      <Image />
      <Form.Item >
        <Button type='primary' htmlType='submit'>
          SAVE
        </Button>
      </Form.Item>
    </Form>
  );
}
