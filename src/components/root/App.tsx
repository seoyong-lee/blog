import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "~/components/contexts/UserContext";
import { setupFirebase } from "~/lib/firebase";
import { ClientOnly, type RouteRecord } from "vite-react-ssg";
import { lazy } from "react";
import Layout from "../shared/Layout";

setupFirebase();

const IndexScreen = lazy(() => import("../screens/Index"));
const PagePostDetail = lazy(() => import("../screens/PostDetail"));
const PageArchiveScreen = lazy(() => import("../screens/Archive"));
const PageAboutScreen = lazy(() => import("../screens/About"));
const PageLoginScreen = lazy(() => import("../screens/Login"));
const PageEditScreen = lazy(() => import("../screens/Edit"));
const Page404Screen = lazy(() => import("../screens/404"));

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: (
      <HelmetProvider>
        <AuthProvider>
          <RecoilRoot>
            <Layout />
          </RecoilRoot>
        </AuthProvider>
      </HelmetProvider>
    ),
    entry: "src/shared/Layout.tsx",
    children: [
      {
        index: true,
        element: <IndexScreen />,
        entry: "src/screens/index.tsx",
      },
      {
        path: "*",
        element: <Page404Screen />,
      },
      {
        path: "/edit",
        element: <ClientOnly>{() => <PageEditScreen />}</ClientOnly>,
      },
      {
        path: "/archive",
        element: <PageArchiveScreen />,
      },
      {
        path: "/about",
        element: <PageAboutScreen />,
      },
      {
        path: "/login",
        element: <PageLoginScreen />,
      },
      {
        path: "/post",
        element: <PagePostDetail />,
        children: [
          {
            path: "/post/:postId",
            element: <PagePostDetail />,
            getStaticPaths: () => ["post/1234"],
          },
        ],
      },
    ],
  },
];
