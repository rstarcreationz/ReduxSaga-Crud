
import {
    LOAD_DATA_ERROR,
    LOAD_DATA_START,
    LOAD_DATA_SUCCESS,
    ADD_DATA_START,
    ADD_DATA_SUCCESS,
    ADD_DATA_ERROR,
    DELETE_DATA_ERROR,
    DELETE_DATA_START,
    DELETE_DATA_SUCCESS,
    UPDATE_DATA_START,
    UPDATE_DATA_SUCCESS,
    UPDATE_DATA_ERROR,
} from "../Action/type"

const initialState = {
    lists: [],
    list: {},
    loading: false,
    error: null
}

export const getDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_START:
        case ADD_DATA_START:
        case DELETE_DATA_START:
        case UPDATE_DATA_START:
            return {
                ...state,
                loading: true
            }
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                lists: action.payload
            }
        case LOAD_DATA_ERROR:
        case ADD_DATA_ERROR:
        case DELETE_DATA_ERROR:
        case UPDATE_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_DATA_SUCCESS:
            case UPDATE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        case DELETE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                list: state.list.filter((value) => value.id !== action.payload)
            }
       
        default:
            return state;
    }
}

