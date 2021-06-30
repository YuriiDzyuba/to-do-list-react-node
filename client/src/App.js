import React, {useState} from "react";
import NoteItems from "./coponents/NoteItems";
import AllNotes from "./coponents/AllNotes";
import {useDispatch, useSelector} from "react-redux";
import {getState} from "./redux/noteItemsReducer";
import {Loader} from "./coponents/Loader";
import EditNote from "./coponents/EditNote";
import EmptyNoteEditor from "./coponents/EmptyNoteEditor";

function App() {


    const dispatch = useDispatch()
    const setting = useSelector(state => state.settings)

    const getStateFromNode = () => {
        dispatch(getState())
    }

    if (!setting.isStateLoaded) {
        getStateFromNode()
        return (
            <Loader/>
        )
    }


    return (
        <div className="container">
            <NoteItems isNotesActive={true} showHeaderWithoutNotes={true}/>
            <EmptyNoteEditor/>
            <AllNotes/>
            <h5 className="pt-4 text-center">Archive</h5>
            <NoteItems isNotesActive={false} showHeaderWithoutNotes={false}/>
        </div>
    );
}

export default App;
