import "./AboutUsBox.css";
const AboutUsBox = ({ title, desc, icon }) => {
  const iconClass = `${icon} about-us__icon`;
  return (
    <div className="">
      <div className="about-us__box">
        <div className="about-us__box-right">
          <i className={iconClass}></i>
        </div>
        <div className="about-us__box-left">
          <span className="about-us__box-title">{title}</span>
          <span className="about-us__box-text">{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBox;
