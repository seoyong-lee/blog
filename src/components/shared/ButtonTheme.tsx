import { useSetRecoilState } from "recoil";
import { themeStateAtom } from "~/recoil/common";

const ButtonTheme = ({ onClickAdmin }: { onClickAdmin: () => void }) => {
  const setTheme = useSetRecoilState(themeStateAtom);

  return (
    <div className="dropdown">
      <div className="sm:hidden collapse flex flex-col place-items-center">
        <div className="text-center text-xl font-semibold mt-1">Theme</div>
        <svg
          width="12px"
          height="12px"
          className="h-3 w-3 fill-current opacity-60 inline-block mt-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>hello</p>
        </div>
      </div>
      <div
        tabIndex={0}
        role="button"
        className="hidden sm:block font-semibold text-accent hover:opacity-50 text-center sm:text-left"
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
        className="sm:block flex flex-col place-items-center sm:dropdown-content z-[1] p-2 sm:mt-4 shadow-2xl bg-base-300 rounded-box sm:w-52 w-[6.2rem]"
      >
        <li>
          <button
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            value="default"
            onClick={() => {
              setTheme("night");
              onClickAdmin();
            }}
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
            value="sunset"
            onClick={() => setTheme("sunset")}
          >
            Sunset
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
        <li>
          <button
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            value="nord"
            onClick={() => setTheme("nord")}
          >
            Nord
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonTheme;
