import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  
  {
    title: "Smart Traffic Light Controller", 
    description:
      "Designed and implemented a finite state machine-based traffic light controller with configurable timing parameters. Developed synthesizable RTL and verified all state transitions through comprehensive simulation and testbench validation..",
    image: "/Smart Traffic controller.jpeg",
    tags: ["Verilog", "FSM Design", "Vivado"],
    link: "https://github.com/muttu-HUB/Smart-Traffic-Light-Controller",
    github: "https://github.com/muttu-HUB/Smart-Traffic-Light-Controller",
  },
  {
    title: "7-Segment Display Using Verilog and Vivado",
    description:
      "Designed and simulated a two-digit decimal counter (00–99) using Verilog HDL in Vivado. Implemented modular components including BCD counters, clock division, multiplexing, and 7-segment display interfacing. Verified functionality through simulation and FPGA-ready design.",
    image: "/project 2.jpeg",
    tags: ["Verilog HDL", "Vivado", "FPGA Design", "Digital Logic Design", "Simulation & Verification"],
    link: "https://github.com/muttu-HUB/7-segment-displays",
    github: "https://github.com/muttu-HUB/7-segment-displays",
  },
   {
    title: "ASYNC-FIFO-DESIGN-AND-VERIFICATION USING VERILOG",
    description:
      "Designed and verified a Dual-Clock Asynchronous FIFO for reliable Clock Domain Crossing (CDC) using Gray Code Pointer Synchronization and Full/Empty Detection Logic. Developed synthesizable Verilog RTL and a SystemVerilog self-checking testbench with scoreboard-based verification, achieving 100% pass rate in Vivado simulation.",
    image: "/project 3.jpeg",
    tags: ["Verilog HDL", "SystemVerilog", "Vivado", "FPGA Design", "CDC", "RTL Design", "Verification"],
    link: "https://github.com/muttu-HUB/ASYNC-FIFO-DESIGN-AND-VERIFICATION",
    github: "https://github.com/muttu-HUB/ASYNC-FIFO-DESIGN-AND-VERIFICATION",
  },
   {
    title: "FPGA-Co-Processor-for-AI-based-Spectrum-Sensing",
    description:
      "Designed and simulated a two-digit decimal counter (00–99) in Vivado using BCD counters, clock division, multiplexing, and 7-segment display interfacing. Verified functionality through waveform simulation and FPGA-ready implementation.",
    image: "/Screenshot 2026-06-01 132452.png",
    tags: ["Verilog HDL", "Vivado", "FPGA Design", "Digital Logic Design"],
    link: "https://github.com/muttu-HUB/FPGA-Co-Processor-for-AI-based-Spectrum-Sensing",
    github: "https://github.com/muttu-HUB/FPGA-Co-Processor-for-AI-based-Spectrum-Sensing",
  },
   
   
  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-glow mb-4">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects that
            <br />
            <span className="glow-text">make an impact</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            A curated selection of my work across RTL Design, FPGA Design, and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass-glow rounded-2xl overflow-hidden animate-fade-in h-fit border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass-glow hover:bg-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass-glow hover:bg-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </div>

                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 text-xs font-medium border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/20 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            Explore All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

