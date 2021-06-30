import React, {useState} from 'react';
import ToDoItem from "./ToDoItem";
import {useSelector} from "react-redux";
import Header from "./Header";

const NoteItems = (props) => {

    const notes = useSelector(state => state.notes)

    const noteItems = Object.values(notes).map((e,i)=>e.id!=="emptyNote" && e.isActive===props.isNotesActive
        ? <ToDoItem key={i} content={e}/>
        : null)

    return (
        <>
            <Header isNotesActive={props.isNotesActive}/>
            {noteItems}
        </>
    );
};

export default NoteItems;
