import { Outlet, Link } from "react-router";
import {FilmIcon, VideoIcon} from "lucide-react"
import '@fontsource/cinzel/400.css';


export default function MainLayout() {
  return (
    <div className="min-h-screen flex-col">
        <nav className="bg-black px-5 py-2 flex justify-between">
          <div className="font-['Cinzel'] text-amber-400 text-2xl font-bold flex gap-2 items-center">
            <FilmIcon/>
            {/* <VideoIcon/> */}
            <p>Film Compass</p>
            </div>
            <div className="text-white font-semibold flex gap-4 items-center">
               <Link to='/'>Home</Link> 
               <Link to='/movies'>Movies</Link>
            </div>
        </nav>
      <Outlet />
        <footer className="bg-black text-white text-center py-4">
          <p className="text-amber-400 font-semibold">Film Compass</p>
          <p className="italic text-sm">Your ultimate guide to the world of cinema.</p>
          <p>&copy; 2026 Film Compass. All rights reserved.</p>
        </footer>
    </div>
  );
}