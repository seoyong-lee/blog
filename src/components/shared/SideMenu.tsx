import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const SideMenu = ({
  isOpen,
  onClickMenu,
}: {
  isOpen: boolean;
  onClickMenu: () => void;
}) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed right-0 inset-0 top-0 w-screen"
        open={isOpen}
        onClose={onClickMenu}
      >
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="pointer-events-auto w-screen h-screen bg-base-300">
            <Transition.Child
              enter="transition duration-500 ease-out delay-300"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-500 ease-out delay-300"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="flex flex-col p-2">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-none focus:outline-none"
                    onClick={onClickMenu}
                  >
                    <IoIosClose className="w-10 h-10" />
                  </button>
                </div>
                <div className="flex flex-col w-full place-items-center gap-2 mt-20">
                  <Link to={""} className="font-semibold  hover:opacity-50">
                    Posts
                  </Link>
                  <Link to={""} className="font-semibold  hover:opacity-50">
                    Archive
                  </Link>
                  <Link to={""} className="font-semibold  hover:opacity-50">
                    About
                  </Link>
                  <Link
                    to={""}
                    className="font-semibold text-accent hover:opacity-50"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default SideMenu;
