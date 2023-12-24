import { Theme } from "react-daisyui";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense, useEffect } from "react";
import { themeStateAtom } from "~/recoil/common";
import { useRecoilState } from "recoil";
import Toast from "./Toast";
import Loading from "./Loading";

const Layout = () => {
  const [theme] = useRecoilState(themeStateAtom);

  useEffect(() => {
    if (!theme) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem("theme", theme);

    const localTheme = localStorage.getItem("theme");
    const html = document.querySelector("html");
    if (!html || !localTheme) {
      return;
    }

    html.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <Theme dataTheme={theme}>
      <div className="w-full h-full flex flex-col place-items-center overflow-x-hidden">
        <Header />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer />
        <Toast />
      </div>
    </Theme>
  );
};

export default Layout;
