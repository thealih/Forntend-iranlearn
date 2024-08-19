import "./Breadcrumb.css";
import { Link } from "react-router-dom";

const Breadcrumb = ({ links }) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <div className="breadcrumb__content">
          <Link to={"/"}>
            <div className="breadcrumb__home-content-icon max-sm:w-24">
              <i className="fas fa-home breadcrumb__home-icon"></i>
            </div>
          </Link>
          <ul className="breadcrumb__list max-sm:flex-wrap">
            {links.map((link) => (
              <li className="breadcrumb__item max-sm::ml-5">
                <Link to={link.to} className="breadcrumb__link">
                  {link.title}
                  {link.id !== links.length ? (
                    <i className="fas fa-angle-left breadcrumb__icon"></i>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
