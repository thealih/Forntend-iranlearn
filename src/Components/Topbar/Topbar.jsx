import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaPen } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";

const Topbar = () => {
  const [allTopbarLinks, setAllTopbarLinks] = useState([]);
  const [indexInfo, setIndexInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus/topbar`)
      .then((res) => res.json())
      .then((data) => setAllTopbarLinks(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/v1/infos/index")
      .then((res) => res.json())
      .then((allInfos) => setIndexInfo(allInfos));
  }, []);

  const getRandomItemsFromArray = (arr, randomCount) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };
  return (
    <div className="top-bar hidden md:block">
      <div className="container-fluid">
        <div className="top-bar__content">
          <div className="top-bar__right">
            {/* <ul className="top-bar__menu">
              {getRandomItemsFromArray(allTopbarLinks, 5).map((link) => (
                <li className="top-bar__item" key={link._id}>
                  <Link to={link.href} className="top-bar__link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul> */}
            <div>
              <p>این پروژه صرفا برای نمونه کار است و وجود خارجی ندارد</p>
            </div>
          </div>
          <div className="top-bar__left">
            <div className="top-bar__email">
              <Link to="https://www.thealih.ir/" className="top-bar__email-text top-bar__link flex items-center justify-center">
                علی هاشمی
              <FaUserPen className="mr-2 top-bar__phone-icon" />
              </Link>
            </div>
            <div className="top-bar__email">
              <a href="#" className="top-bar__email-text top-bar__link">
                a.hashemi6336@gmail.com
                {/* {indexInfo.email} */}
              </a>
              <i className="fas fa-envelope top-bar__phone-icon mx-2"></i>
            </div>
            <div className="top-bar__phone">
              <Link to="https://github.com/thealih" className="">
                {/* {indexInfo.phone} */}
                <FaGithub className="top-bar__phone-icon mx-2" />
              </Link>
            </div>
            <div className="top-bar__phone">
              <Link to="https://www.linkedin.com/in/ali-hashemi-" className="">
                <FaLinkedin className="top-bar__phone-icon mx-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Topbar);
