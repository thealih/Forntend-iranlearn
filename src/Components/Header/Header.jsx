import { useEffect, useState } from "react";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import "./Header.css";

const Header = () => {
  const [indexInfo, setIndexInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/v1/infos/index")
      .then((res) => res.json())
      .then((allInfos) => setIndexInfo(allInfos));
  }, []);
  console.log(indexInfo);

  return (
    <header className="header">
      <Topbar info={indexInfo} />
      <Navbar />
      <Landing info={indexInfo} />
    </header>
  );
};

export default Header;
