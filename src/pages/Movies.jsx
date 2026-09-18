import {useEffect, useState} from 'react'
import getMovies from '../services/getMovies';
import getAllMovies from '../services/getAllMovies';
import Card from './../component/Card';

export default function Movies() {
    const [query, setQuery] = useState("");
    const [movieList, setMovieList] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchAllMovies = async () => {
            const allMovies = await getAllMovies();
            setMovieList(allMovies);
        }
        fetchAllMovies();
    }, []);

    const handleSubmit = (async (q) => {
        q.preventDefault();
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
            movieList && movieList.map((movie) => (<Card movie={movie}/>))
        }
        </div>
    </div>
}