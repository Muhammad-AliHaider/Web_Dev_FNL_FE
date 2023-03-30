/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/student"
  },
  {
    path: "/icons",
    name: "ENROLL IN",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/student"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/student"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/student"
  },
  {
    path: "/tables",
    name: "ENROLLED COURSES",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/student"
  },
  {
    path: "/tables",
    name: "BILLING INFO",
    icon: "tim-icons icon-money-coins",
    component: TableList,
    layout: "/student"
  },
];
export default routes;
