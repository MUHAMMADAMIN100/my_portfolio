import { languages } from "../data/portfolioData"
import { Card } from "antd"
import { motion } from "framer-motion"

export default function Languages() {

    return (

        <section className="py-32">

            <h2 className="text-4xl text-center font-bold mb-16">
                Languages
            </h2>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">

                {languages.map(lang => (

                    <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >

                        <Card className="text-center bg-slate-900 border-none">

                            <h3 className="text-xl font-semibold mb-2">
                                {lang.name}
                            </h3>

                            <p className="text-gray-400">
                                {lang.level}
                            </p>

                        </Card>

                    </motion.div>

                ))}

            </div>

        </section>

    )

}