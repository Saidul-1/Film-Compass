import {useEffect, useState} from 'react'
import getMovies from '../services/getMovies';
import getAllMovies from '../services/getAllMovies';
import Card from './../component/Card';

export default function Movies() {
    const [query, setQuery] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const pageCapacity = 20;

    useEffect(() => {
        const fetchAllMovies = async () => {
            const allMovies = await getAllMovies();
            setMovieList(allMovies);
        }
        fetchAllMovies();
    }, []);

    const handleSubmit = (async (q) => {
        q.preventDefault();
        setPage(1);
        if(query.trim() === "") {
            setError("Movie name can't be empty");
            console.log(error);
            return;
        }
        setError("");
        const movies = await getMovies(query.trim());
        setMovieList(movies);
        console.log(movies);
    });

    const start = pageCapacity*(page-1);
    const end = Math.min(pageCapacity*(page)-1, movieList.length-1);
    const pageCount = Math.ceil(movieList.length/pageCapacity);

    return <div className="min-h-screen bg-gray-900 text-white">
        <div className='pt-4 flex-y items-center justify-center'>
            <form className='overflow-hidden flex mx-auto w-80 mb-0.5 border-white border rounded-2xl' onSubmit={handleSubmit}>
                <input className=' px-2' placeholder="  🔍 Search for a movie..." onChange={((q)=>{setQuery(q.target.value)})}></input>
                <button className=' bg-amber-400 hover:bg-amber-500 text-black w-2xl' type="submit">Search</button>
            </form>
            {error && <p className='text-center text-red-500'>{error}</p>}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4'>
        {
            movieList && movieList.slice(start, end+1).map((movie) => (<Card movie={movie}/>))
        }
        </div>
        <div className='font-semibold flex gap-2 justify-center items-center'>
            {(page>1) && <button onClick={()=>setPage(1)}>1</button>}
            {(page-3>1) && <button>...</button>}
            {(page-2>1) && <button onClick={()=>setPage(page-2)}>{page-2}</button>}
            {(page-1>1) && <button onClick={()=>setPage(page-1)}>{page-1}</button>}
            {(pageCount>1) && <button className='text-xl mx-2 text-amber-400'>Page {page}</button>}
            {(page+1<pageCount) && <button onClick={()=>setPage(page+1)}>{page+1}</button>}            
            {(page+2<pageCount) && <button onClick={()=>setPage(page+2)}>{page+2}</button>}
            {(page+3<pageCount) && <button>...</button>}
            {(page<pageCount) && <button onClick={()=>setPage(pageCount)}>{pageCount}</button>}
        </div>
    </div>
}