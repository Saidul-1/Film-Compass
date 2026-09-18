import { Calendar, Languages, Star, X} from "lucide-react";

export default function MovieDetailModal({movie, setDetailView}) {

    return <div className="fixed inset-0 flex justify-center items-center w-screen h-full  backdrop-blur-xl">
        <div className=" bg-gray-600 w-md h-[90%] flex-col overflow-scroll scrollbar-none rounded-xl shadow-lg">
            <button onClick={()=>setDetailView(false)} className="bg-amber-400 hover:bg-amber-500 text-black sticky top-0 p-1.5 rounded-2xl left-full "><X /></button>
            <div className=" h-[65%] transform-fill flex overflow-hidden">
                <img className="mx-auto w-auto h-auto" src = {movie.image}/>
            </div>
            <div className="mx-4 my-0.5 flex-col relative font-stretch-50%">
                <p className=" font-semibold text-center uppercase">{movie.name}</p>
                <div className="my-1 flex justify-around text-sm">
                    <div className="flex justify-center items-center gap-1"><Star/><p>{movie.rating}</p></div>
                    <div className="flex justify-center items-center gap-1"><Languages/><p>{movie.language}</p></div>
                    <div className="flex justify-center items-center gap-1"><Calendar/><p>{movie.premiered}</p></div>
                </div>
                <div>GENRE: {movie.genres}</div>
                <div className="my-2 relative">SUMMARY: {movie.summary}</div>
                <button onClick={()=>setDetailView(false)} className=" relative w-full mx-auto my-2 text-center  bg-amber-400 hover:bg-amber-500 text-black font py-0.5 px-4 rounded-xl hover:bg-amber-400 hover:font-semibold whitespace-nowrap">
                    Close
                </button>
            </div>
        </div>
    </div>
}