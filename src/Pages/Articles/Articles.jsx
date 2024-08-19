import { useEffect, useState } from "react";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import "./Articles.css";
import Pagination from "../../Components/Pagination/Pagination";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [ShownArticles, setShownArticles] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles`)
      .then((res) => res.json())
      .then((allArticle) => setArticles(allArticle));
  }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          { id: 2, title: "تمامی مقاله ها", to: "/articles/1" },
        ]}
      />
      {/* <!--------------------------------  Articles-Section  --------------------------------> */}
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {ShownArticles.filter((article) => article.publish === 1).map(
                  (article) => (
                    <ArticleBox key={article._id} {...article} />
                  )
                )}
              </div>
            </div>
          </div>

          <Pagination
            items={articles}
            itemsCount={3}
            pathname="/articles"
            setShownCourses={setShownArticles}
          />
        </div>
      </section>
      {/* <!--------------------------------  Articles-Section  --------------------------------> */}

      <Footer />
    </>
  );
};

export default Articles;
