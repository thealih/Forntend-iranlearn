import "./PresellCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import CourseBox from "../CourseBox/CourseBox";
const PresellCourses = () => {
  const [presellCourses, setPresellCourses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allPresellCourses) => {
        setPresellCourses(allPresellCourses);
        console.log(allPresellCourses);
      });
  }, []);
  console.log(presellCourses);
  return (
    <div className="presell px-8 md:px-4 lg:px-20 my-10 lg:my-0,mt-10 2xl:px-28">
      <div className="container">
        <SectionHeader
          title="دوره های در حال پیش فروش"
          desc="متن تستی برای دوره های پیش فروش"
        />
        <div className="courses-content">
          <div className="container">
            <div className="row">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // when window width is >=  1024px
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                loop={true}
                className="mySwiper"
              >
                {presellCourses.map((course) => (
                  <SwiperSlide>
                    <CourseBox {...course} isSlider={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresellCourses;
