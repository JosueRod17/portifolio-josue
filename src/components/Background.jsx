function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[140px]" />

      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-fuchsia-700/10 rounded-full blur-[120px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  )
}

export default Background