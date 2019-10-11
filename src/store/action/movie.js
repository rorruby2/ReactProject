import {FETCH_MOVIE, FETCH_MOVIE_START, FETCH_MOVIE_FAILED} from "./constantsFile/movie"

//API Fetch Start
const start=(value)=>{
    return{
        type:FETCH_MOVIE_START,
        payload:value
    }
}
  
//failuire Method
const failure=(error)=>{
    return{
        type:FETCH_MOVIE_FAILED,
        payload:error
    }
}
  
//Success Method
export const success=(data)=>{
    return {
        type: FETCH_MOVIE,
        payload: data
    };
};
  
//Fetch movies
export const movieListData = () => {
    return dispatch => { 
        // runing first start
        dispatch(start(true));
        fetch("https://swapi.co/api/films/")
        .then(response => response.json())
        .then(response => {
            const arr = response.results;
            dispatch(success(arr));
            dispatch(start(false));
        })
        .catch(err=>{
            console.log(err)
            dispatch(failure(err))
        });
    }
};
