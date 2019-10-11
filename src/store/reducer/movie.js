import {FETCH_MOVIE, FETCH_MOVIE_START, FETCH_MOVIE_FAILED} from "../action/constantsFile/movie";
import {updateState} from '../../utility/updateState';

const initialState = {
    movieList: null,
    loading: false,
    errors: null
}

const start =(state,action)=>updateState(state, {loading:action.payload});
const success = (state,action)=>updateState(state, {movieList:action.payload})
const errors = (state,action)=>updateState(state, {movieList:null, loading:false, errors: action.payload})

const movieReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_MOVIE_START:
            return start(state, action);
        case FETCH_MOVIE:
            return success(state, action);
        case FETCH_MOVIE_FAILED:
            return errors(state, action);
        default:
            return state;
    }
};

export default movieReducer;