"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <a 
            href="#about" 
            className="text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a 
            href="#menu" 
            className="text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Menu
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
          <Link 
            href="/verify" 
            className="text-lg font-medium text-muted-foreground hover:text-primary flex items-center gap-2 py-2"
            onClick={() => setOpen(false)}
          >
            Verification <CheckCircle2 className="h-4 w-4" />
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
