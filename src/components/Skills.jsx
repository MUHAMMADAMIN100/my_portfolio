import { skills } from "../data/portfolioData"
import { motion } from "framer-motion"
import { Progress } from "antd"

export default function Skills() {

    const allSkills = Object.values(skills)
        .filter(arr => Array.isArray(arr))
        .flat()

    return (
        <section id="skills" className="py-32">
            <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {allSkills.map((skill, index) => {
                    let percent = Math.floor(Math.random() * 30) + 65
                    if (skill === "Node.js" || skill === "C#") {
                        percent = Math.floor(Math.random() * 10) + 30
                    }

                    return (
                        <motion.div
                            key={skill + index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-slate-900/60 backdrop-blur p-6 rounded-xl border border-slate-800 text-center"
                        >
                            <p className="mb-2 font-semibold">{skill}</p>
                            <Progress
                                percent={percent}
                                status="active"
                                format={(percent) => <span className="text-white">{percent}%</span>}
                            />
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}