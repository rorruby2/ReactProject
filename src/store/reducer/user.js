import {ADD_USER, DELETE_USER, FETCH_USER, FETCH_USER_START, FETCH_USER_FAILED} from "../action/constantsFile/user";
import {updateState} from '../../utility/updateState';

const initialState = {
    userList: null,
    loading: false,
    errors: null
}

const start =(state,action)=>updateState(state, {loading:action.payload});
const success = (state,action)=>updateState(state, {userList:action.payload})
const errors = (state,action)=>updateState(state, {userList:null, loading:false, errors: action.payload})
const add = (state,action)=>updateState(state, {userList: state.userList.concat(action.payload)})

const deleteUser = (state,action)=> {
    state.userList.splice(action.payload, 1);
    return updateState(state, {userList: state.userList});
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USER_START:
            return start(state, action);
        case FETCH_USER:
            return success(state, action);
        case FETCH_USER_FAILED:
            return errors(state, action);
        case ADD_USER:
            return add(state, action);
        case DELETE_USER:
            return deleteUser(state, action);
        default:
            return state;
    }
};

export default userReducer;