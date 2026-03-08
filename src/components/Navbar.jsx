import { useState, useEffect } from "react"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed w-full z-50 transition ${scrolled ? "bg-slate-900/70 backdrop-blur" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="font-bold text-xl">Muhammadamin</h1>
                <div className="space-x-6 text-gray-300">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}