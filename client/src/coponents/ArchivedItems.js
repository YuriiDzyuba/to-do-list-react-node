import React, {useState} from 'react';
import ToDoItem from "./ToDoItem";
import EditNote from "./EditNote";
import {useSelector} from "react-redux";

const ArchivedItems = () => {
    const [itemEditor, setItemEditor] = useState(false)
    const notes = useSelector(state => state.notes)

    return (
        <>
            {Object.values(notes).map((e,i)=>e.id!=="emptyNote" && !e.isActive ?  <ToDoItem key={i} content={e}/> : null)}
            {itemEditor && <EditNote setItemEditor={setItemEditor} itemKey="emptyNote"/> }
        </>
    );
};

export default ArchivedItems;
