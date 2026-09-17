import { Calendar, Star} from "lucide-react";

export default function Card({movie}) {

    return <div className="bg-gray-600 w-50 h-80 flex-col rounded-xl shadow-lg">
        <div className="w-full h-[70%] transform-fill flex overflow-hidden">
            <img className="w-full h-auto" src = {movie.image}/>
        </div>
        <div className="h-1/2 flex-col justify-center items-center font-stretch-50%">
            <p className="font-semibold text-center">{movie.name}</p>
            <div className="flex justify-around">
                <div className="flex justify-center items-center gap-1"><Star/><p>{movie.rating}</p></div>
                <div className="flex justify-center items-center gap-1"><Calendar/><p>{movie.premiered}</p></div>
            </div>
            <button className="mx-auto my-1 flex relative bg-amber-400 text-black font py-0.5 px-4 rounded-2xl hover:bg-amber-500 hover:font-semibold whitespace-nowrap">See details</button>
        </div>
    </div>
}