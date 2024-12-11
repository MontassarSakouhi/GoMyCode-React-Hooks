import MovieCard from "./MovieCard";

export default function MovieList({movie,deleteMovie}){



    return(
        <div style={{display:"flex",flexWrap: "wrap", gap: "16px"}} >
            {   
                movie.map(e=><MovieCard {...e} key={e.id} deleteMovie={deleteMovie} />)
            }
            </div>
    )
}