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
  return (
    <nav className={`${Styles["nav"]} "w-full bg-gray-800 shadow"`}>
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#" className="">
              <div className="avatar">
                <div className="w-16 rounded">
                  <h1 className="text-3xl text-white font-bold">NEXT</h1>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className={`${Styles.link} ${isActive("/")}`}><Link href="/">Home</Link></li>
            <li className={`${Styles.link} ${isActive("/products")}`}><Link href="/products">Products</Link></li>
            <li className={`${Styles.link} ${isActive("/services")}`}><Link href="/services">Services</Link></li>
            <li className={`${Styles.link} ${isActive("/dashboard")}`}><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;