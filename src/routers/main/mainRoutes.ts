import Main from "../../common/main/Main";
import Banner from "../../features/banner/Banner";
import NotFound from "../404/NotFound";
import { mainPaths } from "./mainPaths";

export const mainRoutes = [
  {
    path: mainPaths.INDEX,
    element: Main
  },
  {
    path: mainPaths.NOT_FOUND,
    element: NotFound
  },
  {
    path: mainPaths.BANNER,
    element: Banner
  }
];
