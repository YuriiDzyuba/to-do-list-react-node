import axios from "axios";
import {getStatistics, stateLoaderHandler} from "./settingsReducer";
import {clearData} from "./editNoteReducer";

const ADD_NEW_NOTE = "ADD_NEW_NOTE"
const SHOW_EDITOR = "SHOW_EDITOR"
const SHOW_NEW_ITEM_EDITOR = "SHOW_NEW_ITEM_EDITOR"
const SAVE_CHANGES = "SAVE_CHANGES"
const UPDATE_NOTE = "UPDATE_NOTE"
const DELETE_NOTE = "DELETE_NOTE"
const ADD_TO_ARCHIVE = "ADD_TO_ARCHIVE"
const SET_INITIAL_STATE = "SET_INITIAL_STATE"

let initialState = {
    emptyNote: {
        id: 'emptyNote',
        name: '',
        category: '',
        content: '',
        date: '',
        changedDate: '',
        isActive: true
    },

    'acc1bb8-4f6a-0838-4ce-a71abbaf8347': {
        id: 'acc1bb8-4f6a-0838-4ce-a71abbaf8347',
        name: 'What is Lorem',
        category: 'task',
        content: '3 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of eth',
        date: new Date(),
        changedDate: '',
        isActive: false
    },
    '01dabc-2ddd-ae6e-484-e8b36840ca1': {
        id: '01dabc-2ddd-ae6e-484-e8b36840ca1',
        name: 'The standard Lorem Ipsum passag',
        category: 'idea',
        content: 'ection 1.10.32 of "de Finibus Bonorum et',
        date: new Date(),
        changedDate: '',
        isActive: true
    },
}


export let noteItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_STATE: {
            return action.payload
        }
        case ADD_NEW_NOTE: {
            console.log(action.payload.id, "action.payload.id")
            let stateCopy = {...state}
            stateCopy[action.payload.id] = action.payload
            return stateCopy
        }
        case DELETE_NOTE: {
            let stateCopy = {...state}
            delete stateCopy[action.key]
            return stateCopy
        }
        case UPDATE_NOTE: {
            let stateCopy = {...state}
            stateCopy[action.key] = action.payload
            return stateCopy
        }
        case ADD_TO_ARCHIVE: {
            let stateCopy = {...state}
            stateCopy[action.key].isActive = !stateCopy[action.key].isActive
            return stateCopy
        }
        case SHOW_EDITOR:
            return {...state, isEditorActive: true}
        case SAVE_CHANGES:
            return {...state, isEditorActive: false}
        case SHOW_NEW_ITEM_EDITOR:
            return {...state, isEditorActive: true}


        default :
            return state
    }
}



export const setInitState = (payload) => ({type: SET_INITIAL_STATE, payload})

export const addNewNoteToState = (payload) => ({type: ADD_NEW_NOTE, payload})

export const deleteNote = (key) => ({type: DELETE_NOTE, key})

const archiveHandler = (key) => ({type: ADD_TO_ARCHIVE, key})

export const updateNoteToState = (key, payload) => ({type: UPDATE_NOTE, key, payload})



export const getState = () => (dispatch) => {
    dispatch(getStatistics())
    axios.get('/api/todo/')
        .then(function (response) {
            dispatch(setInitState(response.data.initialState))
            dispatch(stateLoaderHandler())
        })
        .catch(function (error) {
            console.log(error);
        })

};

export const deleteItem = (itemId) => (dispatch) => {
    axios.delete(`/api/todo/${itemId}`)
        .then(function (response) {
            if (response.data.massage === 'success') {
                dispatch(deleteNote(itemId))
            } else if (response.data.massage === 'failed') {
                alert("try again")
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}

export const addNewNote = () => (dispatch, getState) => {
    axios.post(`/api/todo/`, {newNote: getState().edit.currentNote})
        .then(function (response) {
            if (response.data.massage === 'success') {
                console.log(response.data.newItem, "response.data.newItem")
                dispatch(addNewNoteToState(response.data.newItem))
                dispatch(clearData())
            } else if (response.data.massage === 'failed') {
                alert("try again")
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}

export const updateNote = (itemKey) => (dispatch, getState) => {
    axios.patch(`/api/todo/${itemKey}`, {currentNote: getState().edit.currentNote})
        .then(function (response) {
            if (response.data.massage === 'success') {
                dispatch(updateNoteToState(itemKey, getState().edit.currentNote))
                dispatch(clearData())
            } else if (response.data.massage === 'failed') {
                alert("try again")
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}

export const toArchiveHandler = (itemKey) => (dispatch, getState) => {
    axios.patch(`/api/todo/archive/${itemKey}`)
        .then(function (response) {
            if (response.data.massage === 'success') {
               dispatch(archiveHandler(itemKey))
            } else if (response.data.massage === 'failed') {
                alert("try again")
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}









