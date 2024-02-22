import React, { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './Cards';


const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=1b86fab1';
const App = () => {
    const [movies,setMovies] = useState([]);
    const [searcht,setSearcht] = useState('');
    const SearchMovie = async(title) => {
        const respone = await fetch(`${API_URL}&s=${title}`);
        const data = await respone.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        SearchMovie('batman');
    },[])

    return (
        <div>
            <div className='header'>
                <h1 className='Movies'><span className='I'>I</span>Movies</h1>
                <input type="text" placeholder="Search your movie" value={searcht} name="text" className="input" onChange={(e)=>{setSearcht(e.target.value)}}></input>
                <button onClick={()=>SearchMovie(searcht) } className='search-button'><span></span>Search</button>
            </div>
            <div className='cards'>
                {movies?.length > 0 ? (
                    (movies.map((movie)=>{ return (
                        <Cards key={movie.Title} m={movie}/>
                    )
                            
                        }))
                    
                ):(<div className='message'>Sorry!!,We couldn't find the movie you looking for .</div>)}
            </div>
            

        </div>
    )
}
export default App ;