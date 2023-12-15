import { Fragment, lazy, Suspense } from "react";
import {
  Outlet,
  RouteObject,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";
import Header from "../shared/Header";
import Loading from "../shared/Loading";

const IndexScreen = lazy(() => import("~/components/screens/Index"));
const Page404Screen = lazy(() => import("~/components/screens/404"));

function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

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
