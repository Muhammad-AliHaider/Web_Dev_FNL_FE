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
import StudentDashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";
import Courses_Offered from "views/Course_Offered.js";
import Course from "views/Courses.js";
import Video from "views/Video_player.js";
import Video_uploader from "views/Video_uploader.js";


export var StudentRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: StudentDashboard,
    layout: "/student"
  },
  {
    path: "/enrollin",
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
    path: "/Course_Offered",
    name: "Course Offered",
    rtlName: "إخطارات",
    icon: "tim-icons icon-book-55",
    component: Courses_Offered,
    layout: "/student"
  },
  {
    path: "/Course",
    name: "Course",
    rtlName: "إخطارات",
    icon: "tim-icons icon-book-55",
    component: Course,
    layout: "/student"
  },
  {
    path: "/video",
    name: "Video",
    rtlName: "إخطارات",
    icon: "tim-icons icon-book-55",
    component: Video,
    layout: "/student"
  },
  {
    path: "/video_upload",
    name: "Video_upload",
    rtlName: "إخطارات",
    icon: "tim-icons icon-book-55",
    component: Video_uploader,
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
    path: "/enrolledcourse",
    name: "ENROLLED COURSES",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/student"
  },

  {
    path: "/billinginfo",
    name: "BILLING INFO",
    icon: "tim-icons icon-money-coins",
    component: TableList,
    layout: "/student"
  },
];

export var AdminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: StudentDashboard,
    layout: "/admin"
  },
  {
    path: "/enrollin",
    name: "ENROLL IN",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/enrolledcourse",
    name: "ENROLLED COURSES",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/billinginfo",
    name: "BILLING INFO",
    icon: "tim-icons icon-money-coins",
    component: TableList,
    layout: "/admin"
  },
];

export var TeacherRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: StudentDashboard,
    layout: "/teacher"
  },
  {
    path: "/enrollin",
    name: "Courses Offered",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/teacher"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/teacher"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/teacher"
  },
  {
    path: "/billinginfo",
    name: "BILLING INFO",
    icon: "tim-icons icon-money-coins",
    component: TableList,
    layout: "/teacher"
  },
];

