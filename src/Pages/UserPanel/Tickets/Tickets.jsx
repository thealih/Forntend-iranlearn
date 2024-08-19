import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ticket from "../../../Components/UserPanel/Ticket/Ticket";

import "./Tickets.css";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/tickets/user`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);

  return (
    <div class="w-full">
      <div class="ticket">
        <div class="ticket-header items-center ">
          <span class="ticket-header__title">همه تیکت ها</span>
          <Link class="ticket-header__link" to="/my-account/send-ticket">
            ارسال تیکت جدید
          </Link>
        </div>
        <div class="ticket-boxes max-md:grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5 ml-6">
          <div class="ticket-boxes__item max-md:w-full">
            <img class="ticket-boxes__img img-fluid" src="/images/ticket.svg" />
            <span class="ticket-boxes__condition">باز</span>
            <span class="ticket-boxes__value">0</span>
          </div>
          <div class="ticket-boxes__item max-md:w-full ticket-boxes__closed ticket-boxes__custom">
            <img class="ticket-boxes__img img-fluid" src="/images/ticket.svg" />
            <span class="ticket-boxes__condition">بسته</span>
            <span class="ticket-boxes__value ticket-boxes__value-closed">
              2
            </span>
          </div>
          <div class="ticket-boxes__item max-md:w-full ticket-boxes__answered ticket-boxes__custom">
            <img class="ticket-boxes__img img-fluid" src="/images/ticket.svg" />
            <span class="ticket-boxes__condition">پاسخ داده شده</span>
            <span class="ticket-boxes__value ticket-boxes__value-answered">
              1
            </span>
          </div>
          <div class="ticket-boxes__item max-md:w-full ticket-boxes__finished ticket-boxes__custom">
            <img class="ticket-boxes__img img-fluid" src="/images/ticket.svg" />
            <span class="ticket-boxes__condition">پایان یافته</span>
            <span class="ticket-boxes__value ticket-boxes__value-finished">
              1
            </span>
          </div>
          <div class="ticket-boxes__item max-md:w-full">
            <img class="ticket-boxes__img img-fluid" src="/images/ticket.svg" />
            <span class="ticket-boxes__condition">همه</span>
            <span class="ticket-boxes__value">2</span>
          </div>
        </div>
        <div class="ticket-filter mt-6 ">
          <form action="#" class="ticket-filter__form max-sm:grid grid-cols-2">
            <select class="ticket-filter__select">
              <option class="ticket-filter__option" value="">
                همه
              </option>
              <option class="ticket-filter__option" value="">
                فرستاده شده
              </option>
              <option class="ticket-filter__option" value="">
                دریافتی
              </option>
            </select>
            <select class="ticket-filter__select">
              <option class="ticket-filter__option" value="">
                همه
              </option>
              <option class="ticket-filter__option" value="">
                باز
              </option>
              <option class="ticket-filter__option" value="">
                بسته
              </option>
              <option class="ticket-filter__option" value="">
                پاسخ داده شده
              </option>
              <option class="ticket-filter__option" value="">
                پایان یافته
              </option>
            </select>
            <select class="ticket-filter__select">
              <option class="ticket-filter__option" value="">
                تاریخ پاسخ
              </option>
              <option class="ticket-filter__option" value="">
                تاریخ ایجاد
              </option>
            </select>
            <button
              class="ticket-filter__btn max-sm:col-span-2 max-sm:w-1/3 max-sm:mt-5 "
              type="submit"
            >
              اعمال
            </button>
          </form>
        </div>
        <div class="ticket-content">
          <span class="ticket-content__title">نمایش 1 تیکت</span>

          {tickets.map((ticket) => (
            <Ticket {...ticket} />
          ))}
        </div>
      </div>
    </div>
  );
}
