import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer w-full sm:footer-center p-6 bg-base-200 text-base-content mt-[68px]">
      <aside>
        <p className="text-[12px] sm:text-sm">
          © 2023 Drew Lee Powered by{" "}
          {/* <Link className="underline" href={"https://vitejs.dev/"}>
            Vite
          </Link>{" "}
          &{" "} */}
          <Link className="underline" href="https://daisyui.com/">
            daisyUI
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
