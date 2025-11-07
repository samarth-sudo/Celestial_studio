export default function BackgroundEffects() {
  return (
    <>
      {/* Gradient overlay */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 animate-gradient-shift bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06)_0%,transparent_50%),radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)]" />

      {/* Floating orbs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 animate-orb-float bg-gradient-to-br from-white/20 to-white/10 -top-[20%] -left-[15%]" />
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 animate-orb-float bg-gradient-to-br from-white/15 to-white/8 -bottom-[15%] -right-[10%] [animation-delay:5s]" />
        <div className="absolute w-[700px] h-[700px] rounded-full blur-[120px] opacity-30 animate-orb-float bg-gradient-to-br from-white/18 to-white/10 top-[40%] -right-[20%] [animation-delay:10s]" />
      </div>
    </>
  )
}
