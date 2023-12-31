import { useEffect, useState } from "react";

import SideMenu from "./SideMenu";
import ButtonTheme from "./ButtonTheme";
import { useRecoilState, useSetRecoilState } from "recoil";
import { headerFixedStateAtom, themeStateAtom } from "@/recoil/common";
import { showToastStateAtom, toastTextStateAtom } from "@/recoil/toast";
import { getAuth, signOut } from "firebase/auth";
import { isLoginStateAtom } from "@/recoil/user";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { useRouter } from "next/router";

const Header = () => {
  const auth = getAuth();
  const router = useRouter();
  const [theme, setTheme] = useRecoilState(themeStateAtom);
  const [headerFixed] = useRecoilState(headerFixedStateAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginStateAtom);

  const setIsShowToast = useSetRecoilState(showToastStateAtom);
  const setToastText = useSetRecoilState(toastTextStateAtom);

  const [isOpen, setIsOpen] = useState(false);
  const [showLoginCount, setShowLoginCount] = useState(0);

  const handleClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logout");
        setIsLogin(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleClickDarkmode = () => {
    if (theme === "night") {
      setTheme("winter");
    } else {
      setTheme("night");
    }
  };

  const handleClickAdmin = () => {
    setShowLoginCount((prev) => prev + 1);
  };

  const showLoginButton = showLoginCount >= 5 && !isLogin;

  useEffect(() => {
    if (showLoginButton) {
      setIsShowToast(true);
      setToastText("관리자 모드 활성화!");
    }
  }, [setIsShowToast, setToastText, showLoginButton]);

  return (
    <>
      <header className="w-full max-w-[64rem] h-14 flex place-items-center bg-base-100 sm:bg-none fixed lg:relative z-10">
        <nav className="w-full h-full flex justify-between place-items-center px-6 sm:px-10">
          <div
            className={`flex justify-end place-items-center ${
              headerFixed && "fixed"
            }`}
          >
            <Link
              href={"/"}
              className={
                "hidden sm:block font-bold text-right text-xl hover:opacity-50"
              }
            >
              Drew.log
            </Link>
            <Link
              href={"/"}
              className="block sm:hidden font-bold text-right text-xl hover:opacity-50"
            >
              D.log
            </Link>
            <label className="swap swap-rotate ml-1">
              <input
                type="checkbox"
                value="synthwave"
                className="theme-controller"
                onClick={handleClickDarkmode}
              />
              <svg
                className="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {theme === "winter" ? (
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                ) : (
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                )}
              </svg>
              <svg
                className="swap-off fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {theme === "winter" ? (
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                ) : (
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                )}
              </svg>
            </label>
          </div>
          <div className="flex justify-end w-full">
            <div className="hidden sm:flex  w-full justify-end sm:gap-5 gap-2">
              <Link
                href={"/"}
                className={`font-semibold hover:opacity-50 ${
                  router.pathname === "/" && "border-b-2"
                }`}
              >
                Posts
              </Link>
              <Link
                href={"/archive"}
                className={`font-semibold hover:opacity-50 ${
                  router.pathname === "/archive" && "border-b-2"
                }`}
              >
                Archive
              </Link>
              <Link
                href={"/about"}
                className={`font-semibold hover:opacity-50 ${
                  router.pathname === "/about" && "border-b-2"
                }`}
              >
                About
              </Link>
              {showLoginButton && (
                <Link
                  href={"/login"}
                  className={`text-primary font-semibold hover:opacity-50 ${
                    router.pathname === "/login" && "border-b-2 border-primary"
                  }`}
                >
                  Login
                </Link>
              )}
              {isLogin && (
                <Link
                  href={"/temporary"}
                  className="font-semibold text-accent hover:text-accent-focus"
                >
                  Edit
                </Link>
              )}
              {isLogin && (
                <Link
                  href=""
                  className="font-semibold text-accent hover:text-accent-focus"
                  onClick={handleClickLogout}
                >
                  Logout
                </Link>
              )}
              <ButtonTheme onClickAdmin={handleClickAdmin} />
            </div>
            <MdMenu
              className="sm:hidden fixed top-[1rem] right-4 w-6 h-6 cursor-pointer"
              onClick={handleClickMenu}
            />
          </div>
        </nav>
      </header>
      <SideMenu
        onClickMenu={handleClickMenu}
        onClickAdmin={handleClickAdmin}
        isOpen={isOpen}
        showLoginButton={showLoginButton}
      />
    </>
  );
};

export default Header;
