import Footer from "../../Components/Footer/Footer";

import CourseBox from "../../Components/CourseBox/CourseBox";
import "./Category.css";
import Pagination from "../../Components/Pagination/Pagination";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
const Category = () => {
  const [courses, setCourses] = useState([]);
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [shownCourses, setShownCourses] = useState([]);
  const [status, setStatus] = useState("default");
  const [statusTitle, setStatusTitle] = useState("مرتب سازی");
  const [searchValue, setSearchValue] = useState("");
  const [coursesDisplayType, setCoursesDisplayType] = useState("row");
  const { categoryName } = useParams();

  useEffect(() => {
    //  fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => {
        setCourses(allCourses);
        setOrderedCourses(allCourses);
      });
  }, [categoryName]);
  useEffect(() => {
    switch (status) {
      case "free": {
        const freeCourses = courses.filter((course) => course.price === 0);
        setOrderedCourses(freeCourses);
        break;
      }
      case "money": {
        const notFreeCourses = courses.filter((course) => course.price === 0);
        setOrderedCourses(notFreeCourses);
        break;
      }
      case "last": {
        setOrderedCourses(courses);
        break;
      }
      case "first": {
        const reversedCourses = courses.slice().reverse();
        setOrderedCourses(reversedCourses);
        break;
      }
      default: {
        setOrderedCourses(courses);
      }
    }
  }, [status]);
  const statusTitleChangeHandler = (event) => {
    setStatusTitle(event.target.textContent);
  };
  const searchValueChangeHandler = (event) => {
    setSearchValue(event.target.value);
    const filteredCourses = courses.filter((course) =>
      course.name.includes(event.target.value)
    );
    setOrderedCourses(filteredCourses);
  };
  return (
    <>
      <Topbar />
      <Navbar />
      <section className="courses">
        <div className="container ">
          <div className="courses-content">
            <div className="container px-8 md:px-4 lg:px-20 2xl:px-28 mx-auto">
              <div className="row">
                {courses.length === 0 ? (
                  <div className="alert alert-warning">
                    هنوز هیچ دوره ای برای این موضوع وجود ندارد.
                  </div>
                ) : (
                  <>
                    <div className="courses-top-bar flex-col md:flex-row">
                      <div className="courses-top-bar__right">
                        <div
                          className={`courses-top-bar__row-btn ${
                            coursesDisplayType === "row"
                              ? "courses-top-bar__icon--active"
                              : ""
                          }`}
                          onClick={() => {
                            setCoursesDisplayType("row");
                          }}
                        >
                          <i className="fas fa-border-all courses-top-bar__icon"></i>
                        </div>
                        <div
                          className={`hidden md:block courses-top-bar__column-btn ${
                            coursesDisplayType === "column"
                              ? "courses-top-bar__icon--active"
                              : ""
                          }`}
                          onClick={() => {
                            setCoursesDisplayType("column");
                          }}
                        >
                          <i className="fas fa-align-left courses-top-bar__icon"></i>
                        </div>

                        <div className="courses-top-bar__selection">
                          <span className="courses-top-bar__selection-title">
                            {statusTitle}
                            <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                          </span>
                          <ul className="courses-top-bar__selection-list">
                            <li
                              className="courses-top-bar__selection-item courses-top-bar__selection-item--active"
                              onClick={(event) => {
                                setStatus("مرتب سازی پیش فرض");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              کل دوره ها
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("free");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              دوره های رایگان
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("money");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              دوره های پولی
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("last");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              جدیدترین
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("first");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              قدیمی ترین
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("cheap");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              ارزان ترین
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("expensive");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              گران ترین
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="courses-top-bar__left mt-10 md:mt-0">
                        <form action="#" className="courses-top-bar__form">
                          <input
                            type="text"
                            className="courses-top-bar__input"
                            placeholder="جستجوی دوره ..."
                            value={searchValue}
                            onChange={searchValueChangeHandler}
                          />
                          <i className="fas fa-search courses-top-bar__search-icon"></i>
                        </form>
                      </div>
                    </div>

                    {shownCourses.length === 0 ? (
                      <div className="alert alert-warning mt-5">
                        هیچ دوره ای برای {statusTitle} وجود ندارد
                      </div>
                    ) : (
                      <>
                        {coursesDisplayType === "row" ? (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {shownCourses.map((course) => (
                                <CourseBox {...course} />
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            {shownCourses.map((course) => (
                              <div className="col-12 hidden md:block">
                                <div className="course-box">
                                  <div className="course__box-header">
                                    <div className="course__box-right">
                                      <a
                                        className="course__box-right-link"
                                        href="#"
                                      >
                                        <img
                                          src="/images/courses/fareelancer.png"
                                          className="course__box-right-img"
                                        />
                                      </a>
                                    </div>
                                    <div className="course__box-left w-full">
                                      <div className="course__box-left-top">
                                        <a
                                          href="#"
                                          className="course__box-left-link"
                                        >
                                          {course.name}
                                        </a>
                                      </div>
                                      <div className="course__box-left-center">
                                        <div className="course__box-left-teacher">
                                          <i className="course__box-left-icon fa fa-chalkboard-teacher"></i>
                                          <span className="course__box-left-name">
                                            علی هاشمی
                                          </span>
                                        </div>
                                        <div className="course__box-left-stars flex">
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                        </div>
                                      </div>
                                      <div className="course__box-left-bottom">
                                        <div className="course__box-left-des">
                                          <p>{course.description}</p>
                                        </div>
                                      </div>
                                      <div className="course__box-footer">
                                        <div className="course__box-footer-right">
                                          <i className="course__box-footer-icon fa fa-users"></i>
                                          <span className="course__box-footer-count">
                                            202
                                          </span>
                                        </div>
                                        <span className="course__box-footer-left">
                                          {course.price === 0
                                            ? "رایگان"
                                            : course.price.toLocaleString(
                                                "de-DE"
                                              )}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </>
                    )}

                    <Pagination
                      items={orderedCourses}
                      itemsCount={3}
                      pathName={`/category-info/${categoryName}`}
                      setShownCourses={setShownCourses}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Category;
