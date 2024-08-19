import "./FooterItem.css";
const FooterItem = ({ title, children }) => {
  return (
    <div className="">
      <div className="footer-widgets__item mb-5">
        <span className="footer-widgets__title mb-[50px]">{title} </span>

        {children}
      </div>
    </div>
  );
};

export default FooterItem;
