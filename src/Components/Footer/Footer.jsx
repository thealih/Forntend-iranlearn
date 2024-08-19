import React from "react";
import FooterItem from "../FooterItem/FooterItem";
import { Link } from "react-router-dom";
import Input from "./../../Components/Form/Input";
import { emailValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import swal from "sweetalert";
import "./Footer.css";
const Footer = () => {
  const [formState, onInputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addNewEmail = (event) => {
    event.preventDefault();
    const newEmail = {
      email: formState.inputs.email.value,
    };

    fetch("http://localhost:4000/v1/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmail),
    }).then((res) => {
      console.log(res);

      if (res.ok) {
        swal({
          title: "ایمیل شما با موفقیت در خبرنامه ثبت شد",
          icon: "success",
          buttons: "خیلی هم عالی",
        });
      }
    });
  };

  return (
    <footer className="footer sm:mt-10 font-sans leading-normal ">
      <div className=" 2xl:container 2xl:mx-auto">
        <div className="footer-widgets py-16 px-10">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-x-7 gap-y-10">
            <FooterItem title="درباره ما">
              <p className="footer-widgets__text text-justify">
                وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که
                در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل
                قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و
                فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم!
                و خب امروز آکادمی آموزش برنامه نویسی ایران لرن به عنوان یک
                آکادمی خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی
                اجازه تدریس در اون رو نداره و باید از فیلترینگ های خاص آکادمی
                ایران لرن رد شه! این به این معنی هست که ما برامون فن بیان و نحوه
                تعامل مدرس با دانشجو بسیار مهمه! ما در آکادمی ایران لرن تضمین
                پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که مدرسین وب سایت
                ایران لرن حتی برای پشتیبانی دوره های رایگان شون هم هزینه دریافت
                میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته باشند !
              </p>
            </FooterItem>

            <FooterItem title="آخرین مطالب">
              <div className="footer-widgets__links">
                <a href="#" className="footer-widgets__link">
                  نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                </a>
                <a href="#" className="footer-widgets__link">
                  چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن
                  پایتون
                </a>
                <a href="#" className="footer-widgets__link">
                  آموزش نصب پایتون ( Python ) در در مک، ویندوز و لینوکس | گام به
                  گام و تصویری
                </a>
                <a href="#" className="footer-widgets__link">
                  بهترین فریم ورک های فرانت اند | 16 فریم ورک Front end بررسی
                  معایب و مزایا
                </a>
                <a href="#" className="footer-widgets__link">
                  معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش
                  رایگان
                </a>
              </div>
            </FooterItem>

            <FooterItem title="دسترسی سریع">
              <div className="grid sm:grid-cols-2">
                <div className="">
                  <a href="#" className="footer-widgets__link">
                    آموزش HTML
                  </a>
                </div>

                <div className="">
                  <a href="#" className="footer-widgets__link">
                    آموزش CSS
                  </a>
                </div>

                <div className="">
                  <a href="#" className="footer-widgets__link">
                    آموزش جاوا اسکریپت
                  </a>
                </div>
                <div className="">
                  <a href="#" className="footer-widgets__link">
                    آموزش بوت استرپ
                  </a>
                </div>
                <div className="">
                  <a href="#" className="footer-widgets__link">
                    آموزش ریکت
                  </a>
                </div>

                <div className="">
                  <a href="#" className="footer-widgets__link">
                    آموزش پایتون
                  </a>
                </div>

                <div className="">
                  <Link to="/contact" className="footer-widgets__link">
                    ارتباط با ما
                  </Link>
                </div>
              </div>
              <div className="w-full mt-10 md:mt-0">
                <span className="footer-widgets__title">اشتراک در خبرنامه</span>
                <span className="footer-widgets__text text-center d-block">
                  جهت اطلاع از آخرین اخبار و تخفیف های سایت مشترک شوید!
                </span>
                <form action="#" className="footer-widgets__form w-full">
                  <div className="w-3/4 md:w-2/5 lg:w-full">
                    <Input
                      element="input"
                      id="email"
                      type="text"
                      className="footer-widgets__input px-3"
                      placeholder="ایمیل خود را وارد کنید."
                      onInputHandler={onInputHandler}
                      validations={[emailValidator()]}
                    />
                  </div>
                  <button
                    type="submit"
                    className="footer-widgets__btn"
                    onClick={addNewEmail}
                  >
                    عضویت
                  </button>
                </form>
              </div>
            </FooterItem>
          </div>
        </div>
      </div>

      <div className="footer__copyright mb-16 lg:mb-0">
        <span className="footer__copyright-text mx-2 text-center">
          سایت ایران لرن تستی است و صرفا برای نمونه کار{" "}
          <Link to={"https://www.thealih.ir/"} target="_blank" className="text-blue-600">
            رزومه علی هاشمی
          </Link>{" "}
          است
        </span>
      </div>
    </footer>
  );
};

export default Footer;
