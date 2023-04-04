import {
  MdDarkMode,
  MdDashboard,
  MdStackedBarChart,
  MdOutlineAnalytics,
  MdNotificationsNone,
} from "react-icons/md";
import { RiSignalTowerFill } from "react-icons/ri";
import { GiRobotHelmet } from "react-icons/gi";

export const sideBarTop = [
  {
    id:1,
    title: "Dashboard",
    icon: <MdDashboard />,
    link: "/",
  },
  {
    id:2,
    title: "Analytics",
    icon: <MdOutlineAnalytics />,
    link: "/",
  },
  {
    id:3,
    title: "Position",
    icon: <MdStackedBarChart />,
    link: "/",
  },
  {
    id:4,
    title: "Notification",
    icon: <MdNotificationsNone />,
    link: "/",
  },
];

export const sideBarMiddle = [
  {
    id:5,
    title: "Bots",
    icon: <GiRobotHelmet />,
    link: "/",
  },
  {
    id:6,
    title: "Signal",
    icon: <RiSignalTowerFill />,
    link: "/",
  },
];


export const sideBarBottom = [
  {
    title: "Dashboard",
    icon: <MdDarkMode />,
    link: "/",
  },
];
