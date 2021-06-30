import React from 'react';
import "./react-datepicker.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    addNewNote, updateNote,
} from "../redux/noteItemsReducer";
import {
    changeCategory,
    changeContent,
    changeDate,
    changeName,
    getCurrentItem,
    getEmptyItem
} from "../redux/editNoteReducer";
import {Loader} from "./Loader";

const EditNote = (props) => {

    const chosenItem = useSelector(state => state.edit)
    const settings = useSelector(state => state.settings)
    const dispatch = useDispatch()


    if (!chosenItem.isDataLoaded) {
        if (props.itemKey) {
            dispatch(getCurrentItem(props.itemKey))
        } else {
            dispatch(getEmptyItem())
        }

        return (
            <Loader/>
        )
    }


    const saveNote = () => {
        if (props.itemKey) {
            dispatch(updateNote(props.itemKey))
        } else {
            dispatch(addNewNote())
        }
        props.setItemEditor(false)
    }

    console.log(chosenItem,"chosenItem")
    return (
        <div className="row editNote ">
            <div className="col-12 text-center">
                <h6>{props.itemKey === "emptyNote" ? "Create new note" : "Edit note"}</h6>
            </div>
            <div className="col-4">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category :</span>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={chosenItem.currentNote.category ? chosenItem.currentNote.category : settings.availableCategory[0]}
                        onChange={(event) => (dispatch(changeCategory(event.target.value, props.itemKey)))}
                    >
                        {settings.availableCategory.map((e, i) => (
                            <option value={`${e}`} key={i}>{e}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="col-8">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text"
                           className="form-control"
                           placeholder=""
                           aria-describedby="basic-addon1"
                           value={chosenItem.currentNote.name}
                           onChange={(event) => (dispatch(changeName(event.target.value)))}
                    />
                </div>
            </div>
            <div className="col-4">
                <div className="input-group mb-3">
                    <span className="input-group-text"
                          id="basic-addon1">{props.itemKey === "emptyNote" ? "end date" : "new end date"}</span>
                    <input style={{height: "60px"}}
                           type="date"
                                onChange={(event) => dispatch(changeDate(event.target.value))}
                    />
                </div>
            </div>
            <div className="col-8">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">content</span>
                    <textarea type="text"
                              className="form-control"
                              placeholder=""
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              value={chosenItem.currentNote.content}
                              onChange={(event) => (dispatch(changeContent(event.target.value)))}

                    />
                </div>
            </div>
            <div className="col-12 d-grid justify-content-center mt-2">
                <button
                    type="button"
                    className="btn btn-secondary"
                    disabled={!chosenItem.currentNote.content || !chosenItem.currentNote.name || !chosenItem.currentNote.category}
                    onClick={saveNote}
                >Save Note
                </button>
            </div>
        </div>
    );
};

export default EditNote;
