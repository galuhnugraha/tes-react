import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACT } from '../types'

const initialState = {
    contacts: [],
    id: '',
    loading: true,
    updateData: {}
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACT:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        case ADD_CONTACT:
            const add = state.contacts.concat(action.payload);
            return {...state,add};

        case DELETE_CONTACT:
            // return state.filter(contacts => contacts !== action.id)
            return {
                ...state,
                id: action.payload
            }
        case EDIT_CONTACT:
            return {
                ...state,
                updateData: action.payload
            }
        default: return state
    }

}