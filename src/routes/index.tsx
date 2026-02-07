import { createBrowserRouter } from "react-router";
// import LoadingPage from "../pages/LoadingPage/LoadingPage";
import { lazy } from "react";
import Layout from "../components/template/Layout";
import { DETAIL_SURAH, IMSYAK_PAGE, SURAH_PAGE, DOA_PAGE, SHOLAT_PAGE, BLANK_PAGE } from "./route";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const DetailPage = lazy(() => import("../pages/DetailSurahPage/DetailSurahPage"));
const SurahPage = lazy(() => import("../pages/SurahPage/SurahPage"));
const UnderDevelopPage = lazy(() => import("../pages/UnderDevelopPage/UnderDevelopPage"));
const ImsyakPage = lazy(() => import("../pages/ImsyakPage/ImsyakPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

// test loading
// const Loading = lazy(() => import("../pages/LoadingPage/LoadingPage"));

// get data on localstorage
// const colorMode = localStorage.getItem("colorMode");
// const nameSurah = localStorage.getItem("surahNumber");

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: `${DETAIL_SURAH}/:slug`, Component: DetailPage },
      { path: SURAH_PAGE, Component: SurahPage },
      // { path: "/loading", Component: LoaderModify },
      { path: DOA_PAGE, Component: UnderDevelopPage },
      { path: SHOLAT_PAGE, Component: UnderDevelopPage },
      { path: IMSYAK_PAGE, Component: ImsyakPage },
      { path: IMSYAK_PAGE, Component: ImsyakPage },
      { path: BLANK_PAGE, Component:  NotFoundPage},
    ],
  },
]);

export default router;
