import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer w-full sm:footer-center p-6 bg-base-200 text-base-content ">
      <aside>
        <p className="text-[12px] sm:text-sm">
          © 2023 Drew Lee Powered by{" "}
          <Link className="underline" to={"https://vitejs.dev/"}>
            Vite
          </Link>{" "}
          &{" "}
          <Link className="underline" to="https://daisyui.com/">
            daisyUI
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
