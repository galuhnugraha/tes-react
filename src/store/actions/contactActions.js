import { GET_CONTACT, CONTACT_ERROR, DELETE_CONTACT, EDIT_CONTACT, ADD_CONTACT } from '../types'
import axios from 'axios'

export const getContacts = () => async dispatch => {
    try {
        const res = await axios.get(`https://simple-contact-crud.herokuapp.com/contact`)
        dispatch({
            type: GET_CONTACT,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: CONTACT_ERROR,
            payload: console.log(e),
        })
    }
}

export const addContacts = data => {
    return (dispatch) => {
        axios.post(`https://simple-contact-crud.herokuapp.com/contact`, data)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: ADD_CONTACT,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err);
            })
    }
}

export const deleteContact = (id) => {
    return (dispatch) => {
        axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: DELETE_CONTACT,
                    payload: id
                })
            }).catch(err => {
                console.log(err);
            })
    }
}


export const editContact = (id,data) => {
    return (dispatch) => {
        axios.put(`https://simple-contact-crud.herokuapp.com/contact/${id}`,data)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: EDIT_CONTACT,
                    payload: res
                })
            }).catch(err => {
                console.log(err);
            })
    }
}