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
    <header className = "py-10">
    <Container>
    <nav className="flex-between w-full mb-16 pt-3">
        
      <Link href='/' aria-label="Home">
        <a  className='h-10 w-auto'>
          <Image
            src={logo}
            alt='logo'
            width={30}
            height={30}
            className='object-contain'
           />
        </a>
        <p className='logo_text'>Creative Learning Services</p>
      </Link>
      

  
    
      {/* Desktop Navigation      */} 
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt'>
              <a className='black_btn'>Create Post</a>
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <a>
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile'
                />
              </a>
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
              ))}
          </>
        )}
      </div>

      // Mobile Navigation
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
                  onClick={() => setToggleDropdown(false)}
                >
                  <a className='dropdown_link'>My Profile</a>
                </Link>
                <Link
                  href='/create-prompt'
                  onClick={() => setToggleDropdown(false)}
                >
                  <a className='dropdown_link'>Create Prompt</a>
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
    </Container>
    </header>
  );
};

export default Nav;
