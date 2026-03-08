import { education } from "../data/portfolioData"
import { Card } from "antd"
import { motion } from "framer-motion"

export default function Education() {

    return (

        <section className="py-32">

            <h2 className="text-4xl text-center font-bold mb-16">
                Education
            </h2>

            <div className="max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >

                    <Card className="bg-slate-900 border-none">

                        <h3 className="text-2xl mb-2">
                            {education.school}
                        </h3>

                        <p className="text-gray-400 mb-2">
                            {education.location}
                        </p>

                        <p className="text-gray-400 mb-4">
                            {education.date}
                        </p>

                        <p className="text-gray-300">
                            {education.description}
                        </p>

                    </Card>

                </motion.div>

            </div>

        </section>

    )

}