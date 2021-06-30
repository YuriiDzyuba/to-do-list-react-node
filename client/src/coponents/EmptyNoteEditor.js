import React, {useState} from 'react';
import EditNote from "./EditNote";
import {useSelector} from "react-redux";

const EmptyNoteEditor = () => {
    const isDataLoaded = useSelector(state => state.edit.isDataLoaded)
    const [itemEditor, setItemEditor] = useState(false)

    return (
        <>
            {itemEditor && <EditNote setItemEditor={setItemEditor} itemKey=""/>}
            <div className="row justify-content-end pb-2 pr-1">
                <div className="col-2 d-flex g-0 justify-content-end mt-2">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        name="addNewNote"
                        onClick={() => {
                            if (!isDataLoaded) {
                                setItemEditor(prevState => !prevState)
                            }
                        }}
                    >{itemEditor ? "cancel" : "Create Note"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default EmptyNoteEditor;
