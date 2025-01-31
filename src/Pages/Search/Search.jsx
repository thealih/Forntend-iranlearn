import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import { useParams } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import CourseBox from "../../Components/CourseBox/CourseBox";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";

const Search = () => {
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const { value } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/search/${value}`)
      .then((res) => res.json())
      .then((allData) => {
        console.log(allData);
        setArticles(allData.allResultArticles);
        setCourses(allData.allResultCourses);
      });
  }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="نتیجه دوره ها برای جستجوی شما"
            desc="سکوی پرتاب به سوی موفقیت ها"
          />
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.length === 0 ? (
                  <div className="alert alert-warning mt-5">
                    دوزه ای برای جستجو شما وجود ندارد
                  </div>
                ) : (
                  <>
                    {courses.map((course) => (
                      <CourseBox key={course.id} {...course} />
                    ))}
                  </>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="نتیجه مقالات برای جستجوی شما"
            desc="پیش به سوی ارتقای دانش"
          />
          <div className="articles__content">
            <div className="row">
              {articles.length === 0 ? (
                <div className="alert alert-warning mt-5">
                  مقاله ای برای جستجوی شما وجود ندارد
                </div>
              ) : (
                <>
                  {articles.map((article) => (
                    <ArticleBox {...article} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
