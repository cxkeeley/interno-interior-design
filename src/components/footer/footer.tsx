import React from 'react'
import Image from 'next/image'
import Logo from '../../img/Logo.svg'
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiInstagramLine,
} from '@remixicon/react'

const footer = () => {
  return (
    <footer className="mt-[80px] xl:mt-[150px] xl:mb-[-20px] relative z-20">
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
          <div className="w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">
            <a className="flex justify-center xl:justify-start mb-8" href="">
              <Image src={Logo} alt="its just a logo duh"></Image>
            </a>
            <p className="mb-8 text-xl">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>

            <ul className="text-primary flex gap-[54px] justify-center xl:justify-start">
              <li>
                <a href="">
                  <RiFacebookFill />
                </a>
              </li>
              <li>
                <a href="">
                  <RiTwitterFill />
                </a>
              </li>
              <li>
                <a href="">
                  <RiLinkedinFill />
                </a>
              </li>
              <li>
                <a href="">
                  <RiInstagramLine />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end xxl:max-w-[44rem]">
            <div>
              <h3 className="h3 mb-3">Pages</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Our Projects</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="h3 mb-3">Services</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">Kitchen</a>
                </li>
                <li>
                  <a href="">Living Area</a>
                </li>
                <li>
                  <a href="">Bathroom</a>
                </li>
                <li>
                  <a href="">Dinning Hall</a>
                </li>
                <li>
                  <a href="">Bedroom</a>
                </li>
              </ul>
            </div>

            <div className="max-w-[260px]">
              <h3 className="h3 mb-3">Contact</h3>
              <div>
                <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p>contact@interno.com</p>
                <p>(123) 456 - 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
