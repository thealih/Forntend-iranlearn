import Index from "./Pages/Index/Index";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Category from "./Pages/Categories/Category";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import Articles from "./Pages/Articles/Articles";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";
import Search from "./Pages/Search/Search";
import AdminPanel from "./Pages/AdminPanel/index";
import Users from "./Pages/AdminPanel/Users/Users";
import AdminCourses from "./Pages/AdminPanel/Courses/Courses";
import Menus from "./Pages/AdminPanel/Menus/Menus";
import AdminArticle from "./Pages/AdminPanel/Articles/Articles";
import AdminCategory from "./Pages/AdminPanel/Category/Category";
import AdminContact from "./Pages/AdminPanel/Contact/Contact";
import Sessions from "./Pages/AdminPanel/Sessions/Sessions";
import Session from "./Pages/Session/Session";
import Comments from "./Pages/AdminPanel/Comments/Comments";
import Offs from "./Pages/AdminPanel/Offs/Offs";
import Draft from "./Pages/AdminPanel/Articles/Draft";
import PAdminIndex from "./Pages/AdminPanel/Index/Index";
import UserPanel from "./Pages/UserPanel/Index";
import UserPanelIndex from "./Pages/UserPanel/Index/Index";
import UserPanelOrder from "./Pages/UserPanel/Orders/Orders";
import UserPanelCourses from "./Pages/UserPanel/Courses/Courses";
import SendTicket from "./Pages/UserPanel/Tickets/SendTicket";
import UserPanelTickets from "./Pages/UserPanel/Tickets/Tickets";
import UserPanelTicketAnswer from "./Pages/UserPanel/Tickets/TicketAnswer";
import UserPanelEditAccount from "./Pages/UserPanel/EditAccount/EditAccount";
import SiteCategories from "./Pages/SiteCategories/SiteCategories";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName/:page", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/courses/:page", element: <Courses /> },
  { path: "/articles/:page", element: <Articles /> },
  { path: "/login", element: <Login /> },
  { path: "/site-categories", element: <SiteCategories /> },
  { path: "/register", element: <Register /> },
  { path: "/contact", element: <Contact /> },
  { path: "/search/:value", element: <Search /> },
  { path: "/:courseName/:sessionID", element: <Session /> },

  {
    path: "p-admin/*",
    element: <AdminPanel />,
    children: [
      { path: "", element: <PAdminIndex /> },
      { path: "users", element: <Users /> },
      { path: "courses", element: <AdminCourses /> },
      { path: "menus", element: <Menus /> },
      { path: "articles", element: <AdminArticle /> },
      { path: "articles/draft/:shortName", element: <Draft /> },
      { path: "category", element: <AdminCategory /> },
      { path: "contacts", element: <AdminContact /> },
      { path: "sessions", element: <Sessions /> },
      { path: "comments", element: <Comments /> },
      { path: "offs", element: <Offs /> },
    ],
  },
  {
    path: "/my-account/*",
    element: <UserPanel />,
    children: [
      { path: "", element: <UserPanelIndex /> },
      { path: "orders", element: <UserPanelOrder /> },
      { path: "buyed", element: <UserPanelCourses /> },
      { path: "tickets", element: <UserPanelTickets /> },
      { path: "send-ticket", element: <SendTicket /> },
      { path: "tickets/answer/:id", element: <UserPanelTicketAnswer /> },
      { path: "edit-account", element: <UserPanelEditAccount /> },
    ],
  },
];

export default routes;
