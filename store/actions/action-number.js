export const ADD_NUMBER = "ADD_NUMBER";
export const DELETE_ONE = "DELETE_ONE";
export const DELETE_CE = "DELETE_CE";
export const EQUALLY = "EQUALLY";

export const addNumber = number => ({type: ADD_NUMBER, number});
export const removeOne = () => ({type: DELETE_ONE});
export const removeEC = () => ({type: DELETE_CE});
export const equally = () => ({type: EQUALLY});