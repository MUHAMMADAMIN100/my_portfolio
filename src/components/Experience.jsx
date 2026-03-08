import { experience } from "../data/portfolioData"
import { motion } from "framer-motion"

export default function Experience() {

    return (

        <section className="py-32">

            <h2 className="text-4xl font-bold text-center mb-16">
                Experience
            </h2>

            <div className="max-w-4xl mx-auto space-y-10">

                {experience.map((exp, index) => (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-6 rounded-xl border border-slate-800"
                    >

                        <h3 className="text-2xl mb-2">
                            {exp.title}
                        </h3>

                        <p className="text-gray-400 mb-4">
                            {exp.location}
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-gray-300">

                            {exp.tasks.map(task => (
                                <li key={task}>{task}</li>
                            ))}

                        </ul>

                    </motion.div>

                ))}

            </div>

        </section>

    )

}