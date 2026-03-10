function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black" />

      <div
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob"
        style={{ transform: "translateZ(0)" }}
      />

      <div
        className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2000"
        style={{ transform: "translateZ(0)" }}
      />

      <div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4000"
        style={{ transform: "translateZ(0)" }}
      />
    </div>
  );
}

export default Background;