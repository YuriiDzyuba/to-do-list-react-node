import axios from "axios";

const CLEAR_DATA = "CLEAR_DATA"
const LOAD_NOTE = "LOAD_NOTE"
const LOAD_EMPTY = "LOAD_EMPTY"
const CHANGE_CATEGORY = "CHANGE_CATEGORY"
const CHANGE_NAME = "CHANGE_NAME"
const CHANGE_CONTENT = "CHANGE_CONTENT"
const CHANGE_DATE = "CHANGE_DATE"

const initialState = {
    isDataLoaded: false,
    currentNote: {
        id: '',
        name: '',
        category: '',
        content: '',
        date: '',
        changedDate: '',
        isActive: true
    }
}


export let editNoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NOTE:
            return {isDataLoaded:true, currentNote: action.payload}
        case LOAD_EMPTY:
            return {
                isDataLoaded: true,
                currentNote: {
                    id: '',
                    name: '',
                    category: '',
                    content: '',
                    date: '',
                    changedDate: '',
                    isActive: true
                }
            }
        case CHANGE_NAME: {
            let stateCopy = {...state}
            stateCopy.currentNote.name = action.payload
            return stateCopy
        }
        case CHANGE_CONTENT: {
            let stateCopy = {...state}
            stateCopy.currentNote.content = action.payload
            return stateCopy
        }
        case CHANGE_DATE: {
            let stateCopy = {...state}
            stateCopy.currentNote.changedDate
                ? stateCopy.currentNote.changedDate[1] = action.payload
                : stateCopy.currentNote.changedDate = [action.payload]
            return stateCopy
        }
        case CHANGE_CATEGORY:
            let stateCopy = {...state}
            stateCopy.currentNote.category = action.payload
            return stateCopy
        case CLEAR_DATA:
            console.log(initialState,"initialState")
            return {
                isDataLoaded: false,
                currentNote: {
                    id: '',
                    name: '',
                    category: '',
                    content: '',
                    date: '',
                    changedDate: '',
                    isActive: true
                }}
        default :
            return state
    }
}


export const getCurrentItem = (itenId) => (dispatch) => {
    axios.get(`/api/todo/${itenId}`)
        .then(function (response) {
            dispatch(loadCurrentNote(response.data.currentNote))
        })
        .catch(function (error) {
            console.log(error);
        })
}

const loadCurrentNote = (payload) => ({type: LOAD_NOTE, payload})

export const getEmptyItem = () => ({type: LOAD_EMPTY})

export const changeCategory = (payload) => ({type: CHANGE_CATEGORY, payload})

export const changeName = (payload) => ({type: CHANGE_NAME, payload})

export const changeContent = (payload) => ({type: CHANGE_CONTENT, payload})

export const changeDate = (payload) => ({type: CHANGE_DATE, payload})

export const clearData = () => ({type: CLEAR_DATA})





