import { Link } from "react-router-dom";
import "./SectionHeader.css";
const SectionHeader = ({ title, desc, btnTitle, btnHref }) => {
  return (
    <div className="courses-header">
      <div className="courses-header__right">
        <span className="courses-header__title title text-3xl sm:text-4xl">
          {title}
        </span>
        <span className="courses-header__text text-base sm:text-lg leading-normal">
          {desc}
        </span>
      </div>
      {btnTitle && (
        <div className="courses-header__left mr-4">
          <Link
            to={`${btnHref}`}
            className="courses-header__link text-lg sm:text-2xl py-3 sm:py-4"
          >
            {btnTitle}
            <i className="fas fa-arrow-left courses-header__icon text-md sm:text-lg"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
