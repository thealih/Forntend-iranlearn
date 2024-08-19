import { useEffect, useState } from "react";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import swal from "sweetalert";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getAllContact();
  }, []);
  function getAllContact() {
    fetch(`http://localhost:4000/v1/contact`)
      .then((res) => res.json())
      .then((allContact) => {
        setContacts(allContact);
      });
  }
  const showContactBody = (body) => {
    swal({
      title: body,
      buttons: "تایید",
    });
  };
  const sendAnswerToUser = (contactEmail) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "متن پاسخ را وارد کنید",
      content: "input",
      buttons: "ارسال ایمیل",
    }).then((value) => {
      const answerInfo = {
        email: contactEmail,
        answer: value,
      };

      fetch(`http://localhost:4000/v1/contact/answer`, {
        method: "POST",
        headers: {
          "Contact-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify(answerInfo),
      })
        .then((res) => {
          if (res.ok) {
            res.json();
            getAllContact();
          }
        })
        .then((result) => console.log(result));
    });
  };

  const removeContact = (contactID) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/contact/${contactID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal({
              title: "پیغام مورد نظر با موفقیت حذف شد",
              icon: "success",
              buttons: "تایید",
            }).then((result) => {
              getAllContact();
            });
          }
        });
      }
    });
  };

  return (
    <>
      <DataTable title="پیغام ها">
        <table className="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>شماره تماس</th>
              <th>مشاهده</th>
              <th>حذف</th>
              <th>پاسخ دادن</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr>
                <td
                  className={
                    contact.answer === 1
                      ? "answer-contact"
                      : "no-answer-contact"
                  }
                >
                  {index + 1}
                </td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary edit-btn"
                    onClick={() => showContactBody(contact.body)}
                  >
                    مشاهده پیغام
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger delete-btn"
                    onClick={() => removeContact(contact._id)}
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary edit-btn"
                    onClick={() => {
                      sendAnswerToUser(contact.email);
                    }}
                  >
                    پاسخ دادن
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </>
  );
};

export default Contact;
