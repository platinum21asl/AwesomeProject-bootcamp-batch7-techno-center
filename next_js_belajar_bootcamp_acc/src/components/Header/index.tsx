"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import Image from "next/image";
import images from "@assets/images";

import { usePathname } from "next/navigation";
import { GetStorage, SetStorage } from "@services/storage";

export default function Header() {
  const pathName = usePathname();
  const localTime = GetStorage("theme");

  const menuHeader = [
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Users", href: "/users" },
  ];

  const [isDark, setIsDark] = useState(localTime === "dark");

  useEffect(() => {
    if(localTime === "light" || localTime === "dark"){
      setIsDark(localTime === "dark");
    }

    const getCurrentTime = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(getCurrentTime());
  }, [localTime]);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    SetStorage("theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <header className="px-5 flex flex-row custom-shadow">
      <h1 className="py-4 flex-1">
        <Link href="/" className="flex flex-row">
          <Image
            src={images.LOGO_BERIJALAN}
            width={25}
            height={25}
            alt="logo-berijalan"
          />
          <h1 className="text-xl ml-2 font-extrabold">berijalan</h1>
        </Link>
      </h1>
      <div
        className="px-5 py-5"
        style={{ cursor: "pointer" }}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? (
          <Image src={images.LIGHT} width={25} height={25} alt="dark" />
        ) : (
          <Image src={images.DARK} width={25} height={25} alt="light" />
        )}
      </div>

      <ul className="flex flex-row">
        {menuHeader.map((item, index) => (
          <Link href={item.href} key={index}>
            <li
              className={`${
                pathName === item.href ? "header-selection" : ""
              } menu-header`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}
