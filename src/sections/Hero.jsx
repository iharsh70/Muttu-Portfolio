import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Code2,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";  

const skills = [
  "Digital Design System",
  "Verilog",
  "System Verilog",
  "RTL Design",
  "FPGA Development",
  "Designing and Verification",
  "Python Programming",
  "MATLAB",  
  "C Programming",                  

  "Cadence",
  "Xilinx Vivado",

  "EDA Playground",
  "Model sim",
  
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-950/20 to-background" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-repeat pointer-events-none" 
        style={{backgroundImage: 'linear-gradient(0deg, #00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)', backgroundSize: '50px 50px'}} 
      /> 

      {/* Circuit Lines Background - Enhanced IC Chip Design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
          {/* Enhanced Horizontal and Vertical Circuit Traces */}
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 0.7}} />
              <stop offset="50%" style={{stopColor: '#0ea5e9', stopOpacity: 0.5}} />
              <stop offset="100%" style={{stopColor: '#7c3aed', stopOpacity: 0.7}} />
            </linearGradient>
            <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: '#0ea5e9', stopOpacity: 0.4}} />
              <stop offset="100%" style={{stopColor: '#06b6d4', stopOpacity: 0.6}} />
            </linearGradient>
            <filter id="circuitGlow">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>
          
          {/* Primary Horizontal Circuit Paths */}
          {[...Array(24)].map((_, i) => {
            const yPos = (i + 1) * (100 / 25);
            return (
              <line
                key={`h-${i}`}
                x1="0" y1={`${yPos}%`}
                x2="100%" y2={`${yPos}%`}
                stroke="url(#circuitGradient)"
                strokeWidth="0.8"
                filter="url(#circuitGlow)"
                className="animate-circuit-pulse"
                style={{animationDelay: `${i * 0.15}s`}}
              />
            );
          })}
          
          {/* Primary Vertical Circuit Paths */}
          {[...Array(40)].map((_, i) => {
            const xPos = (i + 1) * (100 / 21);
            return (
              <line
                key={`v-${i}`}
                x1={`${xPos}%`} y1="0"
                x2={`${xPos}%`} y2="100%"
                stroke="url(#circuitGradient2)"
                strokeWidth="0.8"
                filter="url(#circuitGlow)"
                className="animate-circuit-pulse"
                style={{animationDelay: `${i * 0.2}s`}}
              />
            );
          })}
          
          {/* Dense Connection Points - IC Nodes */}
          {[...Array(120)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() > 0.8 ? 1.2 : 0.9;
            return (
              <circle
                key={`dot-${i}`}
                cx={`${x}%`}
                cy={`${y}%`}
                r={size}
                fill={i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#0ea5e9' : '#06b6d4'}
                opacity="0.6"
                className="animate-node-pulse"
                style={{animationDelay: `${Math.random() * 3}s`}}
              />
            );
          })}
          
          {/* Secondary Thinner Traces for Complexity */}
          {[...Array(15)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;
            return (
              <line
                key={`diag-${i}`}
                x1={`${startX}%`} y1={`${startY}%`}
                x2={`${endX}%`} y2={`${endY}%`}
                stroke="#00d4ff"
                strokeWidth="0.4"
                opacity="0.4"
                filter="url(#circuitGlow)"
              />
            );
          })}
        </svg>
        
        {/* Enhanced Signal Packets Moving Through Traces */}
        {[...Array(20)].map((_, i) => {
          const isHorizontal = i % 2 === 0;
          const offset = (i % 5) * 20;
          return (
            <div
              key={`packet-${i}`}
              className={isHorizontal ? 'animate-signal-horizontal' : 'animate-signal-vertical'}
              style={{
                position: 'absolute',
                width: isHorizontal ? '50px' : '3px',
                height: isHorizontal ? '3px' : '50px',
                background: isHorizontal
                  ? 'linear-gradient(90deg, transparent, #00d4ff, #0ea5e9, transparent)'
                  : 'linear-gradient(180deg, transparent, #0ea5e9, #00d4ff, transparent)',
                opacity: 0.28,
                left: isHorizontal ? '0' : `${15 + offset}%`,
                top: isHorizontal ? `${15 + offset}%` : '0',
                filter: 'blur(1px)',
                boxShadow: isHorizontal 
                  ? '0 0 10px rgba(0, 212, 255, 0.6)'
                  : '0 0 10px rgba(14, 165, 233, 0.6)',
                animationDelay: `${i * 0.25}s`,
              }}
            />
          );
        })}
        
        {/* Micro Signal Packets for Added Detail */}
        {[...Array(15)].map((_, i) => {
          const isHorizontal = i % 2 === 0;
          const offset = Math.random() * 100;
          return (
            <div
              key={`micro-packet-${i}`}
              style={{
                position: 'absolute',
                width: isHorizontal ? '25px' : '2px',
                height: isHorizontal ? '2px' : '25px',
                background: isHorizontal
                  ? 'linear-gradient(90deg, transparent, #06b6d4, transparent)'
                  : 'linear-gradient(180deg, transparent, #06b6d4, transparent)',
                opacity: 0.2,
                left: isHorizontal ? '0' : `${offset}%`,
                top: isHorizontal ? `${offset}%` : '0',
                filter: 'blur(0.8px)',
                animationDelay: `${i * 0.3}s`,
              }}
              className={isHorizontal ? 'animate-signal-horizontal' : 'animate-signal-vertical'}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-glow text-sm font-medium">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Electronics & VLSI Engineering
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting 
                <br />
                <span className="glow-text text-6xl md:text-6xl lg:text-7xl font-black">
                  Digital
                </span>
                <br />
                excellence,
                <br />
                <span className="font-light text-gray-300 text-base md:text-2xl bg-linear-to-r from-cyan-400/80 to-blue-400/80 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
                  with modern engineering.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground max-w-xl leading-relaxed animate-fade-in animation-delay-200 font-light tracking-wide">
                I'm <span className="font-semibold bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,212,255,0.6)]">Muttu</span> — a Electronics and Communication Engineering student specializing in <span className="text-cyan-300 font-medium drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]">VLSI,</span> and scaling silicon solutions. <span className="bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-medium drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">Transforming complex problems</span> into elegant, high-performance hardware solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 pt-4">
              <a href="#contact">
                <div className="rounded-lg border border-blue-400/60 hover:border-blue-300/80 transition-all p-0.5">
                  <Button size="lg" className="bg-black border-none text-white hover:text-white shadow-none transition-all">
                    Start a Project <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </a>
              <a href="" download>
                <div className="rounded-lg border border-blue-400/60 hover:border-blue-300/80 transition-all p-0.5">
                  <Button size="lg" className="bg-black border-none text-white hover:text-white shadow-none transition-all">
                    <Download className="w-5 h-5" />
                    <span className="ml-2">Download Resume</span>
                  </Button> 
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 animate-fade-in animation-delay-400 pt-6">
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Let's Connect:</span>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/muttu-HUB", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/muttu-manahalli-a082462ba/", label: "LinkedIn" },
                  
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    title={social.label}
                    className="p-3 rounded-lg glass-glow hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
                  >
                    {<social.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image with Sticker Effect */}
          <div className="relative animate-fade-in animation-delay-300 flex items-center justify-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-md h-full flex items-center justify-center"> 
              {/* Decorative glow circles */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Main sticker profile image */}
              <div className="relative z-10 group">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-linear-to-br from-cyan-500/30 to-violet-500/30 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image with sticker appearance */}
                <img
                  src="/WhatsApp Image 2026-05-31 at 4.04.40 PM.jpeg"
                  alt="Muttu Manahalli"
                  className="relative w-80 md:w-96 drop-shadow-6xl transform group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300 filter brightness-110 rounded-3xl"
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute top-10 right-8 z-20">
                <div className="w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse" />
              </div>
              <div className="absolute bottom-20 left-8 z-20">
                <div className="w-4 h-4 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50 animate-bounce" />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-8 -right-12 glass-glow rounded-2xl px-6 py-4 animate-float shadow-2xl z-20">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <div className="font-medium text-sm text-foreground"> 
                    <div>Open for</div>
                    <div className="text-cyan-400">Opportunities</div>
                  </div>
                </div>
              </div>

              {/* Stats Badges */}
              <div className="absolute -top-12 -left-12 glass-glow rounded-2xl px-4 py-3 animate-float animation-delay-300 z-20">
                <div className="text-2xl font-bold text-cyan-400">Silicon</div>
                <div className="text-xs text-muted-foreground">Driven</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-32 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium text-center mb-10">
            Design & Expertise
          </p>
          <div className="relative overflow-hidden">
            {/* Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/50 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-20 pointer-events-none" />
            
            <div className="w-full overflow-hidden">
              <div className="marquee-track flex gap-6">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="shrink-0 px-2">
                    <div className="px-6 py-3 glass rounded-lg hover:glass-glow transition-all hover:shadow-lg hover:shadow-cyan-500/20 whitespace-nowrap">
                      <span className="text-sm font-semibold text-muted-foreground hover:text-cyan-400 transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0.6 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-700">
          <a
            href="#about"
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cyan-400 transition-colors">
              Explore my work
            </span>
            <div className="p-2 rounded-full glass group-hover:glass-glow transition-all">
              <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-cyan-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};                                              