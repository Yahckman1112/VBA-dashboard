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
    title: "Dashboard",
    icon: <MdDashboard />,
    link: "/",
  },
  {
    title: "Analytics",
    icon: <MdOutlineAnalytics />,
    link: "/",
  },
  {
    title: "Position",
    icon: <MdStackedBarChart />,
    link: "/",
  },
  {
    title: "Notification",
    icon: <MdNotificationsNone />,
    link: "/",
  },
];

export const sideBarMiddle = [
  {
    title: "Bots",
    icon: <GiRobotHelmet />,
    link: "/",
  },
  {
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
