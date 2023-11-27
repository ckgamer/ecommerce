"use client";
import React, { useState } from "react";
import Link from "next/link";
import Styles from '../styles/navigation.module.scss'
import { useRouter } from 'next/router'
import "../app/globals.css";
const Navbar = () => {
  const router = useRouter()
  function isActive(route) {
    if (route == router.pathname) {
      return Styles.active
    } else ""
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`${Styles["nav"]} relative w-full bg-gray-800 shadow`}>
      <div className="flex justify-end items-center px-4 mx-auto lg:h-full">
        <div className={isOpen ? `${Styles.hamburger} ${Styles.open} flex-col cursor-pointer` : `${Styles.hamburger} flex-col cursor-pointer justify-between`} onClick={toggleMenu}>
          <div className={Styles.line}></div>
          <div className={Styles.line}></div>
          <div className={Styles.line}></div>
        </div>
        <ul className={`relative items-center flex space-x-6 lg:absolute lg:bg-gray-800 lg:w-full lg:block lg:space-x-0 lg:absolute lg:left-0 lg:top-full ${!isOpen ? "lg:hidden" : "lg:block"}`}>
          <li className={`${Styles.link} ${isActive("/")} lg:block lg:w-full`}><Link href="/" className="p-5 inline-block lg:w-full">Home</Link></li>
          <li className={`${Styles.link} ${isActive("/products")} lg:block lg:w-full`}><Link href="/products" className="p-5 inline-block lg:w-full">Products</Link></li>
          <li className={`${Styles.link} ${isActive("/services")} lg:block lg:w-full`}><Link href="/services" className="p-5 inline-block lg:w-full">Services</Link></li>
          <li className={`${Styles.link} ${isActive("/dashboard")} lg:block lg:w-full`}><Link href="/dashboard" className="p-5 inline-block lg:w-full">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;