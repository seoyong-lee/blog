import { lazy, Suspense } from "react";
import { RouteObject, useRoutes, BrowserRouter } from "react-router-dom";
import Loading from "../shared/Loading";
import Layout from "../shared/Layout";

const IndexScreen = lazy(() => import("~/components/screens/Index"));
const Page404Screen = lazy(() => import("~/components/screens/404"));

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
      ],
    },
  ];
  const element = useRoutes(routes);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};
