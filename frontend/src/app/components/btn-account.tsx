import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function AccountBtn() {
  return (
    <div className={`${poppins.className} fixed text-right text-3xl`}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-center relative">
            <FaCircleUser
              className="text-[#ffb114] hover:text-[#ffd277] transition"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 translateY(-10px)"
          enterTo="transform opacity-100 translateY(0)"
        >
          <Menu.Items className="absolute right-full translate-x-[2.188rem] top-full px-4 py-2 mt-2 rounded-xl bg-black shadow-lg focus:outline-none">
            <div className="text-wrap w-max">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "text-[#ffd277] transition" : "text-white transition"
                    } group flex text-wrap w-max items-center uppercase text-[0.9rem] font-medium`}
                  >
                    Log in
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "text-[#ffd277] transition" : "text-white transition"
                    } group flex text-wrap w-max items-center uppercase text-[0.9rem] font-medium`}
                  >
                    Sign in
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}