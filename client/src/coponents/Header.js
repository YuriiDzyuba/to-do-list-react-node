import React from 'react';
import trashIcon from "../img/icons/trashWhite.svg"
import archiveIcon from "../img/icons/downloadWhite.svg"
import unArchiveIcon from "../img/icons/uploadWhite.svg"
import editItem from "../img/icons/editWhite.svg"

const Header = (props) => {
    return (
        <div className="row header mt-3">
            <div className="col-2">
                <h6>Name</h6>
            </div>
            <div className="col-2">
                <h6>Created</h6>
            </div>
            <div className="col-2">
                <h6>Category</h6>
            </div>
            <div className="col-2">
                <h6>Content</h6>
            </div>
            <div className="col-2">
                <h6>Dates</h6>
            </div>
            <div className="col-2 text-end ">
                <img alt="" src={props.isNotesActive ? editItem : null}/>
                <img alt="" src={props.isNotesActive ? archiveIcon : unArchiveIcon}/>
                <img alt="" src={trashIcon}/>
            </div>
        </div>
    );
};

export default Header;
