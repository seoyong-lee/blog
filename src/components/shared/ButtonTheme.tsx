import { useSetRecoilState } from "recoil";
import { themeStateAtom } from "~/recoil/common";

const ButtonTheme = () => {
  const setTheme = useSetRecoilState(themeStateAtom);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="font-semibold text-accent hover:opacity-50"
      >
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-3 w-3 fill-current opacity-60 inline-block ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 mt-4 shadow-2xl bg-base-300 rounded-box w-52"
      >
        <li>
          <button
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            value="default"
            onClick={() => setTheme("dark")}
          >
            Default
          </button>
        </li>
        <li>
          <button
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            value="black"
            onClick={() => setTheme("black")}
          >
            Black
          </button>
        </li>
        <li>
          <button
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            value="aqua"
            onClick={() => setTheme("aqua")}
          >
            Aqua
          </button>
        </li>
        <li>
          <button
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            value="winter"
            onClick={() => setTheme("winter")}
          >
            Winter
          </button>
        </li>
        <li>
          <button
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            value="night"
            onClick={() => setTheme("night")}
          >
            Night
          </button>
        </li>
        <li>
          <button
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            value="forest"
            onClick={() => setTheme("forest")}
          >
            Forest
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonTheme;
