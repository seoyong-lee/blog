import { lazy, Suspense } from "react";
import { RouteObject, useRoutes, BrowserRouter } from "react-router-dom";
import Loading from "../shared/Loading";
import Layout from "../shared/Layout";
import PageAbout from "../screens/About";

const IndexScreen = lazy(() => import("../screens/Index"));
const PageEditScreen = lazy(() => import("../screens/Edit"));
const Page404Screen = lazy(() => import("../screens/404"));

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: "*",
          element: <Page404Screen />,
        },
        {
          path: "/edit",
          element: <PageEditScreen />,
        },
        {
          path: "/about",
          element: <PageAbout />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};
