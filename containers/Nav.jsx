"use client";
import { Popover, Transition } from "@headlessui/react";
import { React, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { navLinks } from "../constants";
import { logo } from "../public/assets";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [active, setActive] = useState("Home");
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);


return (
  <nav className='flex-between w-full mb-16 pt-3 px-6'>
    <div className="flex-1 flexStart gap-2">
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src={logo}
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>CLS</p>
      </Link>
    </div>
    
    <div className="flex-1 sm:flex hidden justify-center font-manrope text-white md:flex text-lg gap-10">
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <Popover className="relative" key={link.text}>
            {({ open }) => (
              <>
                <Popover.Button className="flex-row items-center gap-3">
                  <Link href={link.href}>{link.text}</Link>
                </Popover.Button>
                {link.sublinks && link.sublinks.length > 0 && (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel static
                      className="absolute z-10 w-screen max-w-md mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
                      >
                       <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white p-7 sm:gap-8 sm:p-8">
                          {link.sublinks.map((sublinks) => (
                            <Link href={sublinks.href} key={sublinks.text} className="block">
                              {sublinks.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                )}
              </>
            )}
          </Popover>
        ))}
      </ul>
    </div>

    {/*Desktop Navigation */}
    <div className='sm:flex hidden'>
      {session?.user ? (
        <div className='flex gap-3 md:gap-5'>
          <Link href='/create-prompt' className='black_btn'>
            Create Post
          </Link>

          <button type='button' onClick={signOut} className='black_btn'>
            Sign Out
          </button>

          <Link href='/profile'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
            />
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className='black_btn'
              >
                Sign in
              </button>
              ))
          }
        </>
      )}
    </div>

    {/* Mobile Navigation */}
    <div className='sm:hidden flex relative'>
      {session?.user ? (
        <div className='flex'>
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            className='rounded-full'
            alt='profile'
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />

          {toggleDropdown && (
            <div className='dropdown'>
              <Link
                href='/profile'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href='/create-prompt'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <button
                type='button'
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
                className='mt-5 w-full black_btn'
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className='black_btn'
              >
                Sign in
              </button>
            ))}
        </>
      )}
    </div>
  </nav>
  );
};

export default Nav;
