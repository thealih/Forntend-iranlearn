import React, { useEffect, useState } from "react";

import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/orders`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  const showOrderDetails = (orderID) => {
    console.log(orderID);
  };

  return (
    <div class="w-full">
      <div class="order max-sm:px-[6px]">
        <table class="order__table max-sm:w-full">
          <thead class="order__table-header">
            <tr class="order__table-header-list">
              <th class="order__table-header-item max-sm:text-lg max-sm:text-center">
                شناسه
              </th>
              <th class="order__table-header-item max-sm:text-lg max-sm:text-center">
                تاریخ
              </th>
              <th class="order__table-header-item max-sm:text-lg max-sm:text-center">
                وضعیت
              </th>
              <th class="order__table-header-item max-sm:text-lg max-sm:text-center">
                دوره
              </th>
              <th class="order__table-header-item max-sm:text-lg max-sm:text-center">
                مبلغ
              </th>
              <th class="order__table-header-item max-sm:text-lg max-sm:text-center">
                عملیات ها
              </th>
            </tr>
          </thead>
          <tbody class="order__table-body">
            {orders.map((order, index) => (
              <tr class="order__table-body-list r">
                <td class="order__table-body-item max-sm:text-center">
                  <a
                    href="#"
                    class="order__table-body-link max-sm:text-lg max-sm:text-center"
                  >
                    {index + 1}
                  </a>
                </td>
                <td class="order__table-body-item max-sm:text-lg max-sm:text-center ">
                  {order.createdAt.slice(0, 10)}
                </td>
                <td class="order__table-body-item max-sm:text-lg max-sm:text-center ">
                  تکمیل شده
                </td>
                <td class="order__table-body-item max-sm:text-lg max-sm:text-center">
                  {order.course.name}
                </td>
                <td class="order__table-body-item max-sm:text-lg max-sm:text-center ">
                  {order.price}
                </td>
                <td
                  class="order__table-body-item "
                  onClick={() => showOrderDetails(order._id)}
                >
                  <a
                    class="order__table-body-btn max-sm:text-lg max-sm:text-center"
                    href="#"
                  >
                    نمایش
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
