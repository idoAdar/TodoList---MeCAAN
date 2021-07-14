import axios from 'axios';
import { GET_ALL, CREATE, DELETE, UPDATE, EXIST } from './actionTypes';
const database = 'http://localhost:5000/api';

export const getAll = () => async (dispatch) => {
  try {
    const response = await axios.get(`${database}/getAll`);
    dispatch({
      type: GET_ALL,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = (state) => async (dispatch) => {
  try {
    const response = await axios.post(`${database}/create`, state);
    dispatch({
      type: CREATE,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: EXIST,
      payload: error.response.data.message,
    });
    setTimeout(() => {
      dispatch({
        type: EXIST,
        payload: '',
      });
    }, 2000);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${database}/remove/${id}`);
    dispatch({
      type: DELETE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (id) => async (disptach) => {
  try {
    const response = await axios.put(`${database}/update/${id}`);
    disptach({
      type: UPDATE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
