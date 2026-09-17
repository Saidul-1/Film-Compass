import {useState} from 'react'
import getMovies from '../services/getMovies';

export default function Movies() {
    const [query, setQuery] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = (async (q) => {
        q.preventDefault();
        if(query.trim() === "") {
            setError("Movie name can't be empty");
            console.log(error);
            return;
        }
        setError("");
        const movies = await getMovies(query);
        setMovieList(movies);
        console.log(movies);


    });

    return <div className="min-h-screen bg-gray-900 text-white">
        This is the Movies page to explore
        <form onSubmit={handleSubmit}>
            <input placeholder="🔍 Search for a movie" onChange={((q)=>{setQuery(q.target.value)})}></input>
            <button type="submit">Search</button>
            {error && <p className='text-red-500'>{error}</p>}
        </form>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4'>
 
        </div>
    </div>
}