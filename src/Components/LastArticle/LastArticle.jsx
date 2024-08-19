import { useEffect, useState } from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./LastArticle.css";
const LastArticle = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles`)
      .then((res) => res.json())
      .then((allArticles) => {
        setArticles(allArticles);
      });
  }, []);

  return (
    <section className="articles px-8 md:px-4 lg:px-20 my-10 lg:my-0,mt-10 2xl:px-28">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
          btnHref="/articles/1"
        />

        <div className="articles__content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles
              .filter((article) => article.publish === 1)
              .slice(0, 3)
              .map((article) => (
                <ArticleBox {...article} key={article._id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastArticle;
