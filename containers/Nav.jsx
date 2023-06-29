"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { navLinks } from "../constants";
import { close, logo, menu } from "../public/assets";
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [active, setActive] = useState("Home");
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);


return (
  <nav className='flex-between w-full mb-16 pt-3 px-6'>
    <Link href='/' className='flex gap-2 flex-center'>
      <Image
        src={logo}
        alt='logo'
        width={30}
        height={30}
        className='object-contain'
      />
      <p className='logo_text'>Creative Learning Services</p>
    </Link>
    <div className="font-manrope md:flex md:gap-x-6">
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#testimonials">Testimonials</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
    </div>

    {/* Desktop Navigation */}
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
