import { Link, useParams } from "react-router-dom";
import "./Pagination.css";
import { useEffect, useState } from "react";
const Pagination = ({ items, itemsCount, pathName, setShownCourses }) => {
  const { page } = useParams();
  const [pagesCount, setPagesCount] = useState(null);
  useEffect(() => {
    let endIndex = itemsCount * page;
    let startIndex = endIndex - itemsCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShownCourses(paginatedItems);
    let pageNumber = Math.ceil(items.length / itemsCount);
    setPagesCount(pageNumber);
  }, [page, items]);
  return (
    <div className="courses-pagination">
      <ul className="courses__pagination-list">
        <li className="courses__pagination-item">
          <Link href="#" className="courses__pagination-link">
            <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
          </Link>
        </li>
        {Array(pagesCount)
          .fill(0)
          .map((item, index) => (
            <li className="courses__pagination-item">
              {index + 1 === Number(page) ? (
                <Link
                  to={`${pathName}/${index + 1}`}
                  className="courses__pagination-link courses__pagination-link--active"
                >
                  {index + 1}
                </Link>
              ) : (
                <Link
                  to={`${pathName}/${index + 1}`}
                  className="courses__pagination-link"
                >
                  {index + 1}
                </Link>
              )}
            </li>
          ))}

        <li className="courses__pagination-item">
          <Link to="#" className="courses__pagination-link">
            <i className="fas fa-long-arrow-alt-left courses__pagination-icon"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
