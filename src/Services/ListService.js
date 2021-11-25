import axios from "axios"

// const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const getDataApi = async () =>
    await axios.get('http://localhost:3030/Restaurant');

export const addDataApi = async (somedata) =>
    await axios.post('http://localhost:3030/Restaurant', somedata);

export const deleteDataApi = async (id) =>
    await axios.delete(`http://localhost:3030/Restaurant/${id}`);

export const updateDataApi = async (id, info) =>
    await axios.put(`http://localhost:3030/Restaurant/${id}`, info);