import { Calendar, Star} from "lucide-react";
import { useState } from "react";
import MovieDetailModal from "./MovieDetailModal";

export default function Card({movie}) {
    const [detailView, setDetailView] = useState(false);

    return <div className="bg-gray-800 w-52 h-80 flex flex-col justify-around overflow-hidden rounded-xl shadow-lg">
        <div className="w-full h-[65%] transform-fill flex ">
            <img className="w-full h-auto" src = {movie.image} alt={movie.name}/>
        </div>
        <div className="mx-4 flex flex-col justify-between font-stretch-50%">
            <p className="font-sans font-semibold text-center uppercase">{movie.name}</p>
            <div className="font-mono flex justify-between text-sm">
                <div className="flex justify-center items-center gap-1"><Star/><p>{movie.rating}</p></div>
                <div className="flex justify-center items-center gap-1"><Calendar/><p>{movie.premiered}</p></div>
            </div>
        </div>
            <button onClick={()=>setDetailView(true)} className="mx-4 my-1.5 text-center  bg-amber-400 text-black py-0.5 px-4 rounded-xl hover:bg-amber-500 hover:font-semibold whitespace-nowrap">
                See Details
            </button>
        {
            detailView && <MovieDetailModal movie={movie} setDetailView={setDetailView} />
        }
    </div>
}