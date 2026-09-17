import banner from '../assets/banner.jpeg'
import {LucideArrowBigRightDash } from 'lucide-react'
import { useNavigate } from 'react-router'

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-900 min-h-screen relative">
            <img src={banner} alt="Banner" className="w-full h-auto" />
            <button onClick={() => {navigate('/movies')}} className="bg-amber-400 text-black font-semibold py-2 px-4 rounded-3xl hover:bg-amber-500 hover:font-bold absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-xs sm:text-sm md:text-base whitespace-nowrap">
                Explore Movies
                <LucideArrowBigRightDash className="inline-block ml-2"/>
            </button>
        </div>
    )
}