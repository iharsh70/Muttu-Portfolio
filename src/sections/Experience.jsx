const experiences = [
  {
    period: "May 2025 - July 2025",
    role: "Design Verification Intern",
    company: "SiliconMinds Technologies",
    description:
      "Reviewed RTL designs and validated digital logic blocks against specifications, Performed RTL simulations and waveform debugging, Developed SystemVerilog Assertions (SVA) for design verification, Gained exposure to coverage-driven verification methodologies, Contributed to verification documentation and sign-off activities, Learned practical ASIC design flow concepts including synthesis, timing closure, and pre-silicon validation",
    technologies: ["Verilog", "Xilinx vivado"],
    current: true,
  },
  {
    period: "January 2025 - July 2025",
    role: "Embedded Systems Intern",
    company: "Slash Mark IT Solutions",
    description:
      "Developed Embedded C applications for microcontroller-based systems, Worked with UART, SPI, and I2C communication protocols, Utilized Linux command-line tools for development and debugging, Maintained technical documentation and testing reports.",
    technologies: ["C Programming", "Arduino"], 
    current: false,
  },
  {
    period: "March 2025 — May 2025",
    role: "Artificial Intelligence Intern", 
    company: "Cothon Solutions",
    description: 
      "Developed Python scripts for automation and data processing, Built scripting experience useful for EDA automation and simulation workflows, Applied programming concepts to improve process efficiency.",
    technologies: ["Python", "Machine Learning", "Scikit-learn"],
    current: false,
  },
 
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-glow mb-4">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
              Career Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Experience that
            <br />
            <span className="glow-text">speaks volumes</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            A timeline of my professional growth and impact in building cutting-edge solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/40 via-cyan-400/20 to-transparent md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-full ring-4 ring-background shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(0,212,255,0.6)] z-10 animate-glow-pulse">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="group glass-glow rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                    <span className="text-sm font-semibold text-cyan-400">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mt-3 text-foreground group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium mt-1">{exp.company}</p>
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-6 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 text-sm font-medium text-cyan-400 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};