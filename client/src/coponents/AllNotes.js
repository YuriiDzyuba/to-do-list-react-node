import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CategoryItem from "./CategoryItem";
import AllNotesHeader from "./AllNotesHeader";
import {getStatistics} from "../redux/settingsReducer";

const AllNotes = (props) => {

    const stats = useSelector(state => state.settings.stats)
    const dispatch = useDispatch()

    let catItems = []

    for (let key in stats) {
        catItems.push(<CategoryItem
            key={catItems.length}
            category={key}
            activeNote={stats[key].active}
            archivedNote={stats[key].archived}
        />)
    }

    const getStat = () => {
        dispatch(getStatistics())
    }


    return (
        <>
            <AllNotesHeader/>
            {catItems}
            {props.children}
            <div className="row justify-content-end pb-2 pr-1">
                <div className="col-2 d-flex g-0 justify-content-end mt-2">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        name="addNewNote"
                        onClick={() => {
                            getStat(prevState => !prevState)
                        }}
                    >refresh stats
                    </button>
                </div>
            </div>
        </>
    )
};

export default AllNotes;
