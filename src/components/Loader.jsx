import { motion } from 'framer-motion'
import logo from '../assets/logoJ.png'

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-[#050505] flex items-center justify-center z-[9999]"
    >
      <div className="relative flex flex-col items-center">

        {/* Glow */}
        <div className="absolute w-60 h-60 bg-purple-600/25 blur-[120px] rounded-full" />

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-96 h-96 object-contain relative z-10 drop-shadow-[0_0_35px_rgba(168,85,247,0.65)] animate-pulse"
        />

        {/* Linha */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '140px' }}
          transition={{
            duration: 1.2,
            delay: 0.3,
          }}
          className="h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default Loader