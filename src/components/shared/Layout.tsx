import { Theme } from "react-daisyui";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRecoilState } from "recoil";
import { useFirestore } from "~/lib/firebase";
import { isLoginStateAtom, currentUserAtom } from "~/recoil/user";
import { getUser } from "~/services/auth";

import { themeStateAtom } from "~/recoil/common";
import Toast from "./Toast";
import Loading from "./Loading";

const Layout = () => {
  const db = useFirestore();
  const [user, setUser] = useRecoilState(currentUserAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginStateAtom);
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

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        return;
      }

      if (!isLogin && user.uid) {
        const userData = await getUser(db, user.uid);
        console.log("user data: ", userData);
        setIsLogin(true);
        setUser(userData);
      }
    });
  }, []);

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
