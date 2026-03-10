function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      
      {/* Dark base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#020617] to-black" />

      {/* Purple blob */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply blur-xl opacity-40 animate-blob" />

      {/* Blue blob */}
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-700 rounded-full mix-blend-multiply blur-xl opacity-40 animate-blob animation-delay-2000" />

      {/* Pink blob */}
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-fuchsia-700 rounded-full mix-blend-multiply blur-xl opacity-40 animate-blob animation-delay-4000" />

    </div>
  );
}

export default Background;