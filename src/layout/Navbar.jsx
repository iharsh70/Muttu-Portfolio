import { useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import emailjs from "@emailjs/browser";




const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#certifications", label: "Certifications"} 
    
]


export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) 
    return (
        <header className="fixed top-0 left-0 right-0 z-50"> 
            {/* Backdrop blur effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/20 backdrop-blur-xl border-b border-cyan-500/10" />
            
            <nav className="container mx-auto px-6 py-4 relative z-10 flex items-center justify-between">
                {/* Logo */}
                <a
                href="#"
                className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent hover:from-cyan-300 hover:to-cyan-200 transition-all">
                    MUTTU<span className="text-cyan-400">.</span>
                </a>

                {/* Desktop Navigation */} 
                <div className="hidden md:flex items-center justify-center flex-1">
                    <div className="glass-glow rounded-full px-8 py-3 flex items-center gap-2"> 
                        {navLinks.map((link, index) => (
                            <a 
                                href={link.href} 
                                key={index} 
                                className="px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block ml-auto">
                    <a href="#contact">
                        <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                            Contact Me
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 rounded-lg glass-glow text-cyan-400 hover:text-cyan-300 transition-colors" 
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24} />: <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in border-b border-cyan-500/10">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a 
                                href={link.href} 
                                key={index} 
                                className="text-lg font-medium text-muted-foreground hover:text-cyan-400 block py-3 px-4 rounded-lg hover:bg-cyan-500/10 transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" className="w-full">
                            <Button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500">
                                Contact Me
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </header> 
    )
}


 


