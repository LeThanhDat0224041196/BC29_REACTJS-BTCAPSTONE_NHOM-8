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
  Image,
  notification,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GROUP_ID } from "../../constants/common";
import { useAsync } from "../../hooks/useAsync";
import { addMovieUploadImgAPI,updateMovieUploadAPI } 
from "../../service/movie";
import {fetchMovieDetailAPI } from '../../service/movie'


export default function MovieForm() {
  const [componentSize, setComponentSize] = useState("default");
  // const [movieDetail, setMovieDetail] = useState();
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const params = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
 
  const { state: movieDetail } = useAsync({
    service: () => fetchMovieDetailAPI(params.movieId),
    dependencies: [params.movieId],
    condition: !!params.movieId,
  });

  useEffect(() => {
    if (movieDetail) {
      form.setFieldsValue({
        ...movieDetail,
        ngayKhoiChieu: moment(movieDetail.ngayKhoiChieu),
      });

      setImage(movieDetail.hinhAnh);
    }
  }, [movieDetail]);

  const onFormLayoutChange = (event) => {
    setComponentSize(event.target.value);
  };

  const handleSave = async (values) => {
    values.ngayKhoiChieu = values.ngayKhoiChieu.format('DD/MM/YYYY');
    values.maNhom = GROUP_ID;

    const formData = new FormData();

    for (const key in values) {
      formData.append(key, values[key]);
    }

    file && formData.append('File', file, file.name);
    params.movieId && formData.append('maPhim', params.movieId);

    if (params.movieId) {
      await updateMovieUploadAPI(formData);
    } else {
      await addMovieUploadImgAPI(formData);
    }

    notification.success({
      description: 'Successfully!',
    });
    navigate('/admin/movie-management');
  };

  const handleChangeImage = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImage(e.target.result);
      setFile(file);
    };
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
        tenPhim: "",
        moTa: "",
        ngayKhoichieu: "",
        sapChieu: true,
        dangChieu: true,
        hot: true,
        trailer: "",
        danhGia: "",
      }}
      onFinish={handleSave}
      size={componentSize}
    >
      <Form.Item label="Form Size">
        <Radio.Group defaultValue={componentSize} onChange={onFormLayoutChange}>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Movie" name="tenPhim">
        <Input />
      </Form.Item>
      <Form.Item label="Trailer" name="trailer">
        <Input />
      </Form.Item>
      <Form.Item label="Describe" name="moTa">
        <Input />
      </Form.Item>
      <Form.Item label="Premiere Date" name="ngayKhoiChieu">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Now Showing" valuePropName="checked" name="dangChieu">
        <Switch />
      </Form.Item>
      <Form.Item label="Coming soon" valuePropName="checked" name="sapChieu">
        <Switch />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked" name="hot">
        <Switch />
      </Form.Item>
      <Form.Item label="Star" name="danhGia">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <Input type="file" onChange={handleChangeImage} />
      </Form.Item>
      <Image src={image} />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          SAVE
        </Button>
      </Form.Item>
    </Form>
  );
}
