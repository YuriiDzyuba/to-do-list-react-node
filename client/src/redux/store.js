import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {noteItemsReducer} from "./noteItemsReducer";
import thunk from "redux-thunk";
import {settingsReducer} from "./settingsReducer";
import {editNoteReducer} from "./editNoteReducer";

let rootReducer = combineReducers({
    notes: noteItemsReducer,
    settings: settingsReducer,
    edit: editNoteReducer
});

export let store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
