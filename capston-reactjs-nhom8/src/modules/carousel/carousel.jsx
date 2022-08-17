import { Carousel as CarouselAntd } from 'antd';
import React from 'react'
const contentStyle = {
  height: '550px',
  width: '100%',
  objectFit: 'cover',
};

export default function Carousel() {
  return (
    <CarouselAntd autoplay dotsight="bottom">
    <div>
      <img style={contentStyle} src='http://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2017/07/26020212/poster-phim-hanh-dong.jpg'/>
    </div>
    <div>
      <img style={contentStyle} src='https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2017/07/26020157/poster-phim-kinh-di.jpg'/>
    </div>
    <div>
      <img style={contentStyle} src='https://www.jrailpass.com/blog/wp-content/uploads/2022/08/bullet-train-movie-1280x720.jpg'/>
    </div>
    <div>
      <img style={contentStyle} src='https://images.pushsquare.com/d5b4d0558cf5c/ghost-of-tsushima-updates.original.jpg'/>
    </div>
  </CarouselAntd>
  )
}
