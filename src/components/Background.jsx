function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black" />

      <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-blob" />

      <div className="absolute top-0 -right-10 w-72 h-72 bg-yellow-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="absolute -bottom-10 left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
    </div>
  );
}

export default Background;