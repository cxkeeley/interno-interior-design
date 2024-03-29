'use client'

import Image from 'next/image';
import Logo from '../../img/Logo.svg';
import Search from '../../img/Search.svg';
import { RiMenu4Line } from '@remixicon/react';
import { useState } from 'react';


const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible); 
  };

  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center ">
        <a href="">
          <Image src={Logo} alt="logo" className='lg:ml-[167px]'></Image>
        </a>

        <nav>
          <div className="cursor-pointer lg:hidden" onClick={toggleNavVisibility}>
            <RiMenu4Line color="#292F36" size={36} />
          </div>

          <ul
            className={`fixed lg:mr-[168px] w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px]
            left-0 right-0 flex flex-col gap-[31px] lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300${
              isNavVisible ? ' nav-is-open' : ''
            }`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className='pt-[4px]'>
              <a href="#">
                <Image src={Search} alt="search i guess?"></Image>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
