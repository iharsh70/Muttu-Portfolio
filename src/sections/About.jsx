import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "RTL Design",
    description:
      "Crafting reliable digital hardware with Verilog.",
  },
  {
    icon: Rocket,
    title: "ASIC Flow",
    description:
      "Exploring complete RTL-to-GDSII implementation.",
  },
  {
    icon: Users,
    title: "Verification",
    description: "Ensuring design correctness through simulation and SVA.", 
  },
  {
    icon: Lightbulb,
    title: "FPGA Design",
    description:
      "Turning RTL concepts into working hardware.", 
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Label */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-glow">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                  About Me
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
              Building the future of
              <br />
              <span className="glow-text">Silicon and digital systems</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed animate-fade-in animation-delay-200">
              <p>
                I'm a Electronics and Communication Engineering student specializing in <span className="text-cyan-400">VLSI Domain</span>, driven by a passion for transforming hardware concepts into reliable silicon solutions. My journey spans RTL design, FPGA development, ASIC design flows, and design verification, built upon a strong foundation in digital electronics and computer architecture..
              </p>
              <p>
               I work across <span className="text-cyan-400">Verilog, SystemVerilog, FPGA development platforms, and industry-standard Cadence EDA tools</span>, with hands-on experience in FSM design, FIFO architectures, pipelined datapaths, RTL simulation, and ASIC implementation workflows. From writing synthesizable RTL to exploring timing closure and physical design concepts, I enjoy solving complex hardware challenges with efficient and scalable designs.
              </p>
              <p>
                Beyond technical development, I'm constantly exploring emerging semiconductor technologies, strengthening my verification skills, and deepening my understanding of modern SoC architectures. My goal is to contribute to the development of next-generation chips powering high-performance computing, AI accelerators, and advanced embedded systems.
              </p>
            </div>

            {/* Quote Card */}
            <div className="glass-glow rounded-2xl p-8 border border-cyan-500/20 animate-fade-in animation-delay-300 hover:border-cyan-500/40 transition-all">
              <p className="text-lg font-medium leading-relaxed text-foreground italic">
                "Every great chip begins with a simple idea, refined through logic, verification, and innovation into silicon that powers the future." 
" 
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Card Grid */}
          <div className="space-y-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group glass-glow rounded-2xl p-8 animate-fade-in border border-cyan-500/10 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 group-hover:from-cyan-500/30 group-hover:to-cyan-500/20 transition-all">
                      <item.icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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