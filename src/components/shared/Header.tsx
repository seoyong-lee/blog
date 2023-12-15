import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!theme) {
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

  const handleClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickDarkmode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <header className="w-full h-14 flex place-items-center">
        <nav className="w-full h-full flex justify-between place-items-center px-4 sm:px-10">
          <div className="flex justify-end place-items-center fixed">
            <Link
              to={"."}
              className="hidden sm:block menu-title font-bold text-right text-xl"
            >
              Drew.log
            </Link>
            <Link
              to={"."}
              className="block sm:hidden menu-title font-bold text-right text-xl"
            >
              D.log
            </Link>
            {theme === "dark" ? (
              <MdOutlineLightMode
                className="w-8 h-5 cursor-pointer"
                onClick={handleClickDarkmode}
              />
            ) : (
              <MdOutlineDarkMode
                className="w-8 h-5 cursor-pointer"
                onClick={handleClickDarkmode}
              />
            )}
          </div>
          <div className="flex justify-end w-full">
            <div className="hidden sm:flex  w-full justify-end sm:gap-5 gap-2">
              <Link to={""} className="font-semibold">
                Posts
              </Link>
              <Link to={""} className="font-semibold">
                Archive
              </Link>
              <Link to={""} className="font-semibold">
                About
              </Link>
            </div>
            <MdOutlineMenu
              className="sm:hidden w-6 h-6 cursor-pointer"
              onClick={handleClickMenu}
            />
          </div>
        </nav>
      </header>
      <SideMenu onClickMenu={handleClickMenu} isOpen={isOpen} />
    </>
  );
};

export default Header;
