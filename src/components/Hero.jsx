import { motion } from "framer-motion"
import { personal } from "../data/portfolioData"

export default function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center">
            <motion.h1
                className="text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-4"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {personal.name}
            </motion.h1>

            <motion.p
                className="text-2xl text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {personal.role}
            </motion.p>

            <motion.p
                className="max-w-xl text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                {personal.summary}
            </motion.p>

            <motion.a
                href={personal.github}
                target="_blank"
                className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 }}
            >
                View My GitHub
            </motion.a>
        </section>
    )
}