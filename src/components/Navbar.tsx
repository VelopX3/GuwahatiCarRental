"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent pt-6 absolute top-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 flex items-center justify-between">
        {/* Left Side Navigation */}
        <div className="flex items-center justify-between w-full md:w-auto md:gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Guwahati Car Rental Logo" 
              className="h-11 md:h-13 w-auto object-contain rounded-full shadow-md group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base md:text-lg leading-tight text-white tracking-wide">
                Guwahati Car Rental
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold hidden sm:inline">
                Quick &amp; Easy
              </span>
            </div>
          </Link>
          
          {/* Hamburger Icon */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-white/90">
            <Link href="#fleet" className="transition-colors hover:text-primary">
              Our fleet
            </Link>
            <Link href="#gallery" className="transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contacts
            </Link>
          </nav>
        </div>

        {/* Right Side Contact Info - Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-white z-10">
          <a 
            href="https://www.instagram.com/guwahati_car_rental/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <InstagramIcon className="w-4 h-4 text-primary" />
            <span className="hidden lg:inline">@guwahati_car_rental</span>
          </a>
          <a 
            href="tel:+918724001955" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="hidden lg:inline">+91 87240 01955</span>
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md flex flex-col p-6 shadow-xl border-t border-cyan-500/20">
          <nav className="flex flex-col gap-6 text-base font-bold text-white/90 mb-8">
            <Link href="#fleet" onClick={() => setIsOpen(false)} className="transition-colors hover:text-primary">
              Our fleet
            </Link>
            <Link href="#gallery" onClick={() => setIsOpen(false)} className="transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="transition-colors hover:text-primary">
              Contacts
            </Link>
          </nav>
          
          <div className="flex flex-col gap-4 text-sm font-bold text-white">
            <a 
              href="https://www.instagram.com/guwahati_car_rental/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <InstagramIcon className="w-4 h-4 text-primary" />
              </div>
              <span>@guwahati_car_rental</span>
            </a>
            <a 
              href="tel:+918724001955" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span>+91 87240 01955</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
