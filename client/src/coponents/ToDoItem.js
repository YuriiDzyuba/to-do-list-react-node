import React, {useState} from 'react';
import archiveIcon from "../img/icons/download.svg";
import unArchive from "../img/icons/upload.svg";
import trashIcon from "../img/icons/trash.svg";
import edit from "../img/icons/edit.svg";
import EditNote from "./EditNote";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, toArchiveHandler} from "../redux/noteItemsReducer";
import {getCategoryImage} from "../functions/getCategoryImage";


const ToDoItem = ({content}) => {

    const [itemEditor, setItemEditor] = useState(false)
    const dispatch = useDispatch()
    const isDataLoaded = useSelector(state => state.edit.isDataLoaded)

    const getNewDate = (dateArr) => dateArr.map((e,i)=> {

       return  ` ${JSON.stringify(e).slice(1,11)} `
    })

    return (
        <>
            <div className="row todoItem mt-2">
                <div className="col-2 todoItem__desc">
                <span>
                    <p><img alt="" className="todoItem__img" src={getCategoryImage(content.category)}/>{content.name}</p>
                </span>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{new Date(parseInt(content.date.substr(6))).toDateString()}</p>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.category}</p>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.content}</p>
                </div>
                <div className="col-2 todoItem__desc">
                    <p>{content.changedDate ? getNewDate(content.changedDate) : ""}</p>
                </div>
                <div className="col-2 text-end todoItem__buttonsBlock ">
                    { content.isActive && <img alt="" src={edit}
                          onClick={() => {
                             if (!isDataLoaded) {
                                 setItemEditor(prevState => !prevState)
                             }
                          }}
                    />}
                    <img alt="" src={content.isActive ? archiveIcon : unArchive}
                         onClick={()=>dispatch(toArchiveHandler(content.id))}
                    />
                    <img alt="" src={trashIcon}
                         onClick={()=>dispatch(deleteItem(content.id))}
                    />
                </div>
            </div>
            {itemEditor && <EditNote setItemEditor={setItemEditor} itemKey={content.id}/>}
        </>
    );
};

export default ToDoItem;
