import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function DetailCom({images}) {
    
    
  return (
    <div className="detail-swiper">
      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        
      >
        {
            images?.map((img)=>(
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
            ))
        }
  </Swiper>
    </div>
  );
}
