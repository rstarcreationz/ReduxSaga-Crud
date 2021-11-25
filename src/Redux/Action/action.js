import {
    LOAD_DATA_ERROR,
    LOAD_DATA_START,
    LOAD_DATA_SUCCESS,
    ADD_DATA_START,
    ADD_DATA_SUCCESS,
    ADD_DATA_ERROR,
    DELETE_DATA_START,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_ERROR,
    UPDATE_DATA_START ,
    UPDATE_DATA_SUCCESS,
    UPDATE_DATA_ERROR
} from "./type"


export const loadDataStart = () => ({
    type: LOAD_DATA_START
})

export const loadDataSucess = (lists) => ({
    type: LOAD_DATA_SUCCESS,
    payload: lists
})

export const loadDataError = (error) => ({
    type: LOAD_DATA_ERROR,
    payload: error
})

/// action for add data

export const addDataStart = (data) => ({
    type: ADD_DATA_START,
    payload: data
})

export const addDataSucess = (data) => ({
    type: ADD_DATA_SUCCESS,
    payload: data
})

export const addDataError = (error) => ({
    type: ADD_DATA_ERROR,
    payload: error
})

/// action for delete data

export const deleteDataStart = (userId) => ({
    type: DELETE_DATA_START,
    payload: userId
})

export const deleteDataSucess = (userId) => ({
    type: DELETE_DATA_SUCCESS,
    payload: userId
})

export const deleteDataError = (error) => ({
    type: DELETE_DATA_ERROR,
    payload: error
})

/// action for update data

export const updateDataStart = (info) => ({
    type: UPDATE_DATA_START,
    payload: info
})

export const updateDataSucess = (info) => ({
    type: UPDATE_DATA_SUCCESS,
    payload: info
})

export const updateDataError = (error) => ({
    type: UPDATE_DATA_ERROR,
    payload: error
})