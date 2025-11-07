import Link from 'next/link'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-[180px] pb-[120px] px-12 text-center max-w-[1400px] mx-auto relative z-10">
        <div className="inline-flex items-center gap-2.5 glass backdrop-blur-[10px] border border-white/20 px-6 py-2.5 rounded-full text-[0.85rem] font-semibold mb-8 animate-fade-in-up text-white/90 tracking-wide">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
          Waitlist Live
        </div>

        <h1 className="text-[5rem] mb-6 font-black leading-[1.1] tracking-[-2px] gradient-text bg-[length:200%_200%] animate-fade-in-up [animation-delay:0.2s] [animation-fill-mode:backwards]">
          Train Robots with Your Words
        </h1>

        <p className="text-[1.3rem] text-gray-400 mb-6 max-w-[900px] mx-auto animate-fade-in-up [animation-delay:0.3s] [animation-fill-mode:backwards] font-medium italic tracking-wide">
          Natural language meets cutting-edge robotics
        </p>

        <p className="text-[1.35rem] text-gray-300 mb-12 max-w-[950px] mx-auto leading-[1.8] animate-fade-in-up [animation-delay:0.4s] [animation-fill-mode:backwards]">
          Describe your vision in natural language. Watch AI generate code, run simulations, train policies, and create deployable robotics systems—all in one magical interface.
        </p>

        <div className="flex justify-center gap-6 flex-wrap animate-fade-in-up [animation-delay:0.5s] [animation-fill-mode:backwards]">
          <Link
            href="#"
            className="bg-white text-black px-12 py-5 rounded-full text-[1.2rem] font-extrabold transition-all duration-[400ms] hover:scale-105 hover:-translate-y-2 uppercase tracking-wide shadow-[0_10px_40px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.5)] relative overflow-hidden group"
          >
            <span className="relative z-10">Waitlist Sign Up →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-[1400px] mx-auto px-12 py-[120px] relative z-10">
        <div className="text-center mb-20">
          <ScrollAnimation>
            <div className="text-[0.9rem] font-bold uppercase tracking-[3px] text-gray-400 mb-4">
              Capabilities
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <h2 className="text-[3.5rem] font-black gradient-text mb-6 tracking-[-1px]">
              Everything You Need to Build Robots
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <p className="text-[1.2rem] text-gray-400 max-w-[700px] mx-auto leading-[1.7]">
              From concept to deployment, Celestial Studio handles the entire robotics development pipeline with AI-powered automation.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          <ScrollAnimation>
            <div className="glass backdrop-blur-[30px] backdrop-saturate-[180%] p-12 rounded-[28px] border border-white/[0.08] transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:bg-white/[0.04] hover:border-white/30 hover:shadow-[0_25px_70px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden group gradient-border">
              <div className="w-[85px] h-[85px] bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-[20px] flex items-center justify-center text-[2.5rem] mb-8 shadow-[0_8px_25px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-400 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_12px_35px_rgba(255,255,255,0.2)]">
                &lt;/&gt;
              </div>
              <h3 className="text-[1.75rem] mb-5 font-bold tracking-[-0.5px]">AI Code Generation</h3>
              <p className="text-gray-400 leading-[1.8] text-[1.05rem]">
                Tell our AI what your robot should do. It generates complete, research-backed codebases with real-time previews, automatic testing, and optimization.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="glass backdrop-blur-[30px] backdrop-saturate-[180%] p-12 rounded-[28px] border border-white/[0.08] transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:bg-white/[0.04] hover:border-white/30 hover:shadow-[0_25px_70px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden group gradient-border">
              <div className="w-[85px] h-[85px] bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-[20px] flex items-center justify-center text-[2.5rem] mb-8 shadow-[0_8px_25px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-400 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_12px_35px_rgba(255,255,255,0.2)]">
                [ ]
              </div>
              <h3 className="text-[1.75rem] mb-5 font-bold tracking-[-0.5px]">Cloud Simulations</h3>
              <p className="text-gray-400 leading-[1.8] text-[1.05rem]">
                Embedded 3D visualizations and GPU-accelerated training. Watch your robot learn in real-time with cloud power—no local setup required.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="glass backdrop-blur-[30px] backdrop-saturate-[180%] p-12 rounded-[28px] border border-white/[0.08] transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:bg-white/[0.04] hover:border-white/30 hover:shadow-[0_25px_70px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden group gradient-border">
              <div className="w-[85px] h-[85px] bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-[20px] flex items-center justify-center text-[2.5rem] mb-8 shadow-[0_8px_25px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-400 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_12px_35px_rgba(255,255,255,0.2)]">
                →
              </div>
              <h3 className="text-[1.75rem] mb-5 font-bold tracking-[-0.5px]">One-Click Deployment</h3>
              <p className="text-gray-400 leading-[1.8] text-[1.05rem]">
                After validation, download a complete package with ROS2 nodes, calibration scripts, and hardware-ready trained policies.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="max-w-[1600px] mx-auto px-12 py-[120px] relative z-10">
        <div className="text-center mb-20">
          <ScrollAnimation>
            <div className="text-[0.9rem] font-bold uppercase tracking-[3px] text-gray-400 mb-4">
              How It Works
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <h2 className="text-[3.5rem] font-black gradient-text mb-6 tracking-[-1px]">
              From Language to Trained Robot
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <p className="text-[1.2rem] text-gray-400 max-w-[700px] mx-auto leading-[1.7]">
              Seamless workflow powered by cutting-edge AI and simulation frameworks
            </p>
          </ScrollAnimation>
        </div>

        <div className="flex items-center justify-center gap-12 flex-wrap mt-16">
          <ScrollAnimation>
            <div className="glass backdrop-blur-[25px] p-10 rounded-[24px] border border-white/[0.08] w-[260px] text-center transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:bg-white/[0.04] hover:border-white/30 hover:shadow-[0_15px_50px_rgba(255,255,255,0.15)] shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="text-[0.75rem] text-gray-400 uppercase tracking-[2px] font-bold mb-6">Input</div>
              <div className="text-[1.4rem] font-bold mb-3">Natural Language</div>
              <div className="text-[0.95rem] text-gray-400 leading-[1.6]">Describe your robot task</div>
            </div>
          </ScrollAnimation>

          <div className="text-[2.5rem] text-white/50 animate-arrow-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            →
          </div>

          <ScrollAnimation delay={100}>
            <div className="flex flex-col items-center gap-8">
              <div className="glass-strong backdrop-blur-[25px] px-14 py-10 rounded-[20px] border-2 border-white/30 shadow-[0_10px_40px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] font-bold text-[1.4rem] text-center animate-pulse-glow">
                <div className="text-[0.9rem] text-gray-400 mb-2">AI Processing</div>
                Code Generation
              </div>

              <div className="text-[2.5rem] text-white/50 rotate-90 animate-arrow-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                →
              </div>

              <div>
                <div className="text-[0.75rem] text-gray-400 uppercase tracking-[2px] font-bold mb-4 text-center">
                  Simulation Systems
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['Isaac Lab', 'MuJoCo', 'PyBullet', 'Gazebo'].map((sim) => (
                    <div
                      key={sim}
                      className="glass backdrop-blur-[10px] px-7 py-5 rounded-[14px] border border-white/[0.1] text-[0.95rem] font-semibold transition-all duration-300 hover:bg-white/[0.08] hover:border-white/40 hover:scale-105 text-gray-200"
                    >
                      {sim}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="text-[2.5rem] text-white/50 animate-arrow-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            →
          </div>

          <ScrollAnimation delay={200}>
            <div className="glass backdrop-blur-[25px] p-10 rounded-[24px] border border-white/[0.08] w-[260px] text-center transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:bg-white/[0.04] hover:border-white/30 hover:shadow-[0_15px_50px_rgba(255,255,255,0.15)] shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <div className="text-[0.75rem] text-gray-400 uppercase tracking-[2px] font-bold mb-6">Output</div>
              <div className="text-[1.4rem] font-bold mb-3">Trained Policy</div>
              <div className="text-[0.95rem] text-gray-400 leading-[1.6]">Hardware-ready deployment</div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto px-12 py-[120px] pb-[150px] text-center relative z-10">
        <ScrollAnimation>
          <div className="glass-strong bg-white/5 backdrop-blur-[30px] border border-white/20 rounded-[32px] p-20 shadow-[0_20px_60px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-[rotateBg_20s_linear_infinite]" />

            <h2 className="text-[3.5rem] font-black gradient-text mb-6 tracking-[-1px] relative z-10">
              Ready to Build the Future?
            </h2>

            <p className="text-[1.35rem] text-gray-300 mb-12 leading-[1.7] relative z-10">
              Join researchers and engineers training robots with AI.
            </p>

            <Link
              href="#"
              className="inline-block relative z-10 bg-white text-black px-12 py-5 rounded-full text-[1.2rem] font-extrabold transition-all duration-[400ms] hover:scale-105 hover:-translate-y-2 uppercase tracking-wide shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.5)]"
            >
              Waitlist Sign Up →
            </Link>
          </div>
        </ScrollAnimation>
      </section>
    </>
  )
}
