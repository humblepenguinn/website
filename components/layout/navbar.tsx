'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from '../mode-toggle';
import { siteConfig } from '@/config/site';

import Typewriter from '../typewriter';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleClick = async () => {
    setNavbar(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [navbar]);

  const isSmallScreen = windowWidth <= 700;

  return (
    <nav className="select-none bg-background">
      <div className="flex justify-between">
        <Link href="/" onClick={handleClick} className="flex items-center">
          <>
            <h1 className="text-lg font-bold">{'>'}</h1>
            <div className="flex items-center">
              <span className="text-lg font-bold mr-1">&nbsp;</span>{' '}
              <Typewriter
                className="text-lg font-bold"
                text={siteConfig.author}
              />
              <span
                className="text-lg font-bold ml-1"
                style={{
                  display: 'inline-block',
                }}
              >
                <p
                  className=""
                  style={{
                    animation: 'blink 1s step-start infinite',
                  }}
                >
                  |
                </p>
              </span>
            </div>
          </>
        </Link>

        {isSmallScreen ? (
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <button>
                  <RxHamburgerMenu size={30} />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold">
                    {'> '}humblepenguin
                  </SheetTitle>
                  <SheetDescription>
                    <div
                      className="text-left items-center justify-center"
                      style={{
                        paddingTop: '2rem',
                      }}
                    >
                      <ul className="flex-col space-y-2 text-lg text-zinc-600 dark:text-zinc-300">
                        <li className="hover:underline">
                          <SheetClose asChild>
                            <Link
                              href="/"
                              onClick={handleClick}
                              className="block"
                            >
                              Home
                            </Link>
                          </SheetClose>
                        </li>
                        <li className="hover:underline">
                          <SheetClose asChild>
                            <Link
                              href="/about"
                              onClick={handleClick}
                              className="block"
                            >
                              About
                            </Link>
                          </SheetClose>
                        </li>
                        <li className="hover:underline">
                          <SheetClose asChild>
                            <Link
                              href="/skills"
                              onClick={handleClick}
                              className="block"
                            >
                              Skills
                            </Link>
                          </SheetClose>
                        </li>
                        <li className="hover:underline">
                          <SheetClose asChild>
                            <Link
                              href="/articles"
                              onClick={handleClick}
                              className="block"
                            >
                              Articles
                            </Link>
                          </SheetClose>
                        </li>
                        <li className="hover:underline">
                          <SheetClose asChild>
                            <Link
                              href="/papers"
                              onClick={handleClick}
                              className="block"
                            >
                              Papers
                            </Link>
                          </SheetClose>
                        </li>
                      </ul>
                      <div style={{ marginTop: '1rem' }}>
                        <ModeToggle />
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex gap-4">
            <ul className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li className="hover:underline">
                <Link href="/" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/about" onClick={handleClick}>
                  About
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/skills" onClick={handleClick}>
                  Skills
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/articles" onClick={handleClick}>
                  Articles
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/papers" onClick={handleClick}>
                  Papers
                </Link>
              </li>
            </ul>
            <ModeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}
