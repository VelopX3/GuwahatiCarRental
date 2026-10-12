import { MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white py-8 border-t border-zinc-100">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Guwahati Car Rental Logo" className="h-10 w-auto rounded-full object-contain shadow-sm" />
          <div className="flex flex-col">
            <span className="font-bold text-base text-zinc-900 leading-tight">Guwahati Car Rental</span>
            <span className="text-[10px] uppercase tracking-wider text-cyan-600 font-semibold">Quick &amp; Easy</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs font-bold text-zinc-500 uppercase tracking-widest text-center">
          <a href="#fleet" className="hover:text-primary transition-colors">Our Fleet</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-5 text-zinc-400">
          <a 
            href="https://www.instagram.com/guwahati_car_rental/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors p-2 rounded-full hover:bg-zinc-50" 
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/918724001955" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors p-2 rounded-full hover:bg-zinc-50" 
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a 
            href="tel:+918724001955" 
            className="hover:text-primary transition-colors p-2 rounded-full hover:bg-zinc-50" 
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
