import "./Navbar.css";
import AuthContext from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
const Navbar = () => {
  const [allMenus, setAllMenus] = useState([]);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        setAllMenus(menus);
      });
  }, []);
  return (
    <div className="main-header">
      <div className="">
        <div className="main-header__content">
          <div className="main-header__right">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo sm:max-w-xs"
              alt="لوگوی ایران لرن"
            />
            <div className="hidden lg:flex lg:justify-center lg:align-middle font-sans">
              <ul className="main-header__menu">
                <li className="main-header__item">
                  <Link to="/" className="main-header__link">
                    صفحه اصلی
                  </Link>
                </li>

                {allMenus.map((menu) => (
                  <li className="main-header__item">
                    <Link
                      to={`${menu.href}/1`}
                      className="main-header__link"
                      key={1}
                    >
                      {menu.title}
                      {menu.submenus.length !== 0 && (
                        <>
                          <i className="fas fa-angle-down main-header__link-icon"></i>
                          <ul className="main-header__dropdown">
                            {menu.submenus.map((submenus) => (
                              <li className="main-header__dropdown-item">
                                <Link
                                  to={"#"}
                                  className="main-header__dropdown-link"
                                >
                                  {submenus.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn ]">
              <i className="fas fa-search main-header__search-icon text-black"></i>
            </a>
            <a href="#" className="main-header__cart-btn hidden lg:flex">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>
            {authContext.isLoggedIn ? (
              <Link
                to="/my-account"
                className="main-header__profile hidden lg:flex hover:text-[var(--dark-color)] hover:font-mono"
              >
                <span className="main-header__profile-text hover:text-[var(--dark-color)]">
                  {authContext.userInfos.name}
                </span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="main-header__profile hidden lg:flex hover:text-[var(--dark-color)] hover:font-mono"
              >
                <span className="main-header__profile-text hover:text-[var(--dark-color)]">
                  ورود / ثبت نام
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
