import {ADD_USER, DELETE_USER, FETCH_USER, FETCH_USER_START, FETCH_USER_FAILED} from "./constantsFile/user"

//API Fetch Start
const start=(value)=>{
    return{
        type:FETCH_USER_START,
        payload:value
    }
}
  
//failuire Method
const failure=(error)=>{
    return{
        type:FETCH_USER_FAILED,
        payload:error
    }
}
  
//Success Method
export const success=(data)=>{
    return {
        type: FETCH_USER,
        payload: data
    };
};
  
//Fetch Apparel
export const userListData = () => {
    return dispatch => { 
        // runing first start
        dispatch(start(true));
        fetch("https://swapi.co/api/people/")
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

export const addUser = (data) => {
    return{
        type: ADD_USER,
        payload: data
    }
};

export const deleteUser = (data) => {
    return{
        type: DELETE_USER,
        payload: data
    }
};
