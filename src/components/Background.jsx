function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#020817]">
      {/* Global subtle radial glow for depth, but extremely performant */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-800/5 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
}

export default Background;