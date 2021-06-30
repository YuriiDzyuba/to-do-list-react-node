import axios from "axios";

const IS_STATE_LOADED = "IS_STATE_LOADED"
const GET_STAT = "GET_STAT"

let initialState = {
    isStateLoaded: false,
    availableCategory: ["", "idea", "Quote", "Random", "task"],
    stats: null
}


export let settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_STATE_LOADED:
            return {...state, isStateLoaded: true}
        case GET_STAT:
            return {...state, stats: action.payload}
        default :
            return state
    }
}


export const stateLoaderHandler = () => ({type: IS_STATE_LOADED})

export const loadCurrentStats = (payload) => ({type: GET_STAT,payload})

export const getStatistics = () => (dispatch) => {
    axios.get(`/api/todo/stats`)
        .then(function (response) {
            dispatch(loadCurrentStats(response.data.stats))
        })
        .catch(function (error) {
            console.log(error);
        })

}






