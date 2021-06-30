import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const AddNewItem = () => {

    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.activeNotes)

    const addNewNote = () =>{

    }

    return (
        <div className="row justify-content-end g-1">
            <div className="col-2 d-grid justify-content-end mt-2">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={addNewNote}
                >Create Note</button>
            </div>
        </div>
    );
};

export default AddNewItem;
