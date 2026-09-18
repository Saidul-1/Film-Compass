import { Calendar, Star} from "lucide-react";
import { useState } from "react";
import MovieDetailModal from "./MovieDetailModal";

export default function Card({movie}) {
    const [detailView, setDetailView] = useState(false);

    return <div className="bg-gray-600 w-52 h-80 flex-col rounded-xl shadow-lg">
        <div className="w-full h-[65%] transform-fill flex overflow-hidden">
            <img className="w-full h-auto" src = {movie.image} alt={movie.name}/>
        </div>
        <div className="mx-4 my-0.5 flex-col font-stretch-50%">
            <p className="font-semibold text-center">{movie.name}</p>
            <div className=" flex justify-between text-sm">
                <div className="flex justify-center items-center gap-1"><Star/><p>{movie.rating}</p></div>
                <div className="flex justify-center items-center gap-1"><Calendar/><p>{movie.premiered}</p></div>
            </div>
            <button onClick={()=>setDetailView(true)} className="w-full mx-auto my-1  text-center  bg-white text-black font py-0.5 px-4 rounded-xl hover:bg-amber-400 hover:font-semibold whitespace-nowrap">
                See details
            </button>
        </div>
        {
            detailView && <MovieDetailModal movie={movie} setDetailView={setDetailView} />
        }
    </div>
}