import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const SiteCategories = () => {
  const [allMenus, setAllMenus] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        setAllMenus(menus);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="">
        <div className=" grid grid-cols-2 grid-rows-4 gap-5 mx-7 my-10">
          {allMenus.map((menu) => (
            <div className="flex justify-center items-center w-full h-24 border-[.5px] border-solid border-gray-400 rounded-lg">
              {menu.submenus.length !== 0 ? (
                <Link
                  to={`${menu.href}/1`}
                  className="flex justify-center items-center font-sans text-gray-600 w-full h-full"
                  key={1}
                >
                  {menu.title}
                  {menu.submenus.length !== 0 && (
                    <>
                      {/* <FaAngleDown className="" /> */}

                      <div className="hidden">
                        {menu.submenus.map((submenus) => (
                          <div className="">
                            <Link to={submenus.href} className="">
                              {submenus.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </Link>
              ) : (
                <Link
                  to={`${menu.href}/1`}
                  className="flex justify-center content-center font-sans text-gray-600"
                  key={1}
                >
                  {menu.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SiteCategories;
