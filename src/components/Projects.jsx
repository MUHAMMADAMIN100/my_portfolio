import { projects } from "../data/portfolioData"
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <section id="projects" className="py-32">
            <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500 transition"
                    >
                        <h3 className="text-2xl mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.map(stack => (
                                <span
                                    key={stack}
                                    className="bg-purple-600 px-3 py-1 text-sm rounded"
                                >
                                    {stack}
                                </span>
                            ))}
                        </div>
                        <ul className="text-gray-400 list-disc pl-4 space-y-1">
                            {project.features.map(f => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}