import { personal } from "../data/portfolioData"

export default function Contact() {

    return (

        <section id="contact" className="py-32">

            <h2 className="text-4xl text-center font-bold mb-10">
                Contact
            </h2>

            <div className="max-w-md mx-auto bg-white/5 backdrop-blur p-8 rounded-xl text-center">

                <p className="mb-3">{personal.email}</p>

                <p>{personal.phone[0]}</p>
                <p>{personal.phone[1]}</p>

                <a
                    href={personal.github}
                    className="text-blue-400 block mt-4"
                >
                    GitHub Profile
                </a>

            </div>

        </section>

    )

}