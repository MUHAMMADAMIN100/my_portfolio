import { motion } from "framer-motion"

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10">
            <motion.div
                className="absolute w-[700px] h-[700px] bg-purple-600 rounded-full blur-[180px] opacity-70"
                animate={{ x: [0, 300, 0], y: [0, 200, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
                className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] opacity-60"
                animate={{ x: [200, -200, 200], y: [100, 300, 100] }}
                transition={{ duration: 25, repeat: Infinity }}
            />
        </div>
    )
}