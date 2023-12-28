import { Theme } from "react-daisyui";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRecoilState } from "recoil";
import { useFirestore } from "~/lib/firebase";
import { isLoginStateAtom, currentUserAtom } from "~/recoil/user";
import { getUser } from "~/services/auth";

import {
  headerFixedStateAtom,
  showHeaderAtom,
  themeStateAtom,
} from "~/recoil/common";
import Toast from "./Toast";
import Loading from "./Loading";
import { useWindowSize } from "../hooks/useWindowSize";

const Layout = () => {
  const db = useFirestore();
  const { height } = useWindowSize();
  const [user, setUser] = useRecoilState(currentUserAtom);
  const [headerFixed] = useRecoilState(headerFixedStateAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginStateAtom);
  const [theme, setTheme] = useRecoilState(themeStateAtom);
  const [showHeader] = useRecoilState(showHeaderAtom);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const localTheme = localStorage.getItem("theme");

    if (!localTheme) {
      return;
    }

    setTheme(localTheme);
  }, []);

  useEffect(() => {
    if (!theme) {
      return;
    }

    localStorage.setItem("theme", theme);

    const html = document.querySelector("html");
    if (!html || !theme) {
      return;
    }

    html.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        return;
      }

      if (!isLogin && user.uid) {
        const userData = await getUser(db, user.uid);

        setIsLogin(true);
        setUser(userData);
      }
    });
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Theme dataTheme={theme!}>
      <div
        className="w-full flex flex-col place-items-center overflow-x-hidden"
        style={{
          overflowY: headerFixed ? "hidden" : "auto",
          minHeight: height - 136,
        }}
      >
        {showHeader && <Header />}
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Toast />
      </div>
      <Footer />
    </Theme>
  );
};

export default Layout;
