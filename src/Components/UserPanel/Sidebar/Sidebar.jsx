import React, { useContext, useState } from "react";
import AuthContext from "../../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IoIosCloseCircle } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";

export function SidebarHeader() {
  const authContext = useContext(AuthContext);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div className="content-header flex items-center ">
      <button
        type="button"
        className="mr-5 flex h-10 w-10 items-center justify-center bg-non lg:hidden"
        onClick={toggleSidebar}
      >
        <TbMenu2 className="text-[var(--white-color) ] text-white text-9xl" />
      </button>
      <div className="container mt-0  px-8 md:px-4 lg:px-10 lg:mx-auto">
        <span className="content-header__title font-mono">حساب کاربری من</span>
        <span className="content-header__subtitle">پیشخوان</span>
      </div>
      {isSidebarExpanded ? (
        <div className="fixed z-40 top-0 flex justify-between items-start w-full h-full bg-white pt-6  px-8 md:px-4 lg:px-20">
          <Sidebar className={` bg-white `} toggleSidebar={toggleSidebar} />
          <button type="button" onClick={toggleSidebar}>
            <IoIosCloseCircle className="text-3xl" />
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export function Sidebar({ className, toggleSidebar }) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutUser = (event) => {
    event.preventDefault();

    swal({
      title: "آیا از خروج اطمینان داری؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      console.log(result);
      if (result) {
        swal({
          title: "با موفقیت خارج شدید",
          icon: "success",
          buttons: "اوکی",
        }).then(() => {
          authContext.logout();
          navigate("/");
        });
      }
    });
  };

  return (
    <div className={`sidebar font-sans lg:block ${className}`}>
      <span class="sidebar__name">{authContext.userInfos.name} </span>
      <ul class="sidebar__list ml-10 leading-normal lg:text-center">
        <li class="sidebar__item">
          <Link class="sidebar__link" to="/my-account" onClick={toggleSidebar}>
            پیشخوان
          </Link>
        </li>
        <li class="sidebar__item">
          <Link class="sidebar__link" to="orders" onClick={toggleSidebar}>
            سفارش‌ها
          </Link>
        </li>
        <li class="sidebar__item">
          <a class="sidebar__link" href="#" onClick={toggleSidebar}>
            کیف پول من
          </a>
        </li>
        <li class="sidebar__item">
          <Link class="sidebar__link" to="edit-account" onClick={toggleSidebar}>
            جزئیات حساب کاربری
          </Link>
        </li>
        <li class="sidebar__item">
          <Link class="sidebar__link" to="buyed" onClick={toggleSidebar}>
            دوره های خریداری شده
          </Link>
        </li>
        <li class="sidebar__item">
          <Link class="sidebar__link" to="tickets" onClick={toggleSidebar}>
            تیکت های پشتیبانی
          </Link>
        </li>
        <li class="sidebar__item" onClick={logoutUser}>
          <a class="sidebar__link" href="#">
            خروج از سیستم
          </a>
        </li>
      </ul>
    </div>
  );
}
