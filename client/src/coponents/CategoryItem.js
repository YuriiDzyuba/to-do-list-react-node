import React from 'react';
import {getCategoryImage} from "../functions/getCategoryImage";

const CategoryItem = ({category, activeNote, archivedNote}) => {


    return (
        <>
            <div className="row todoItem mt-2">
                <div className="col-6 todoItem__desc">
                <span>
                    <p><img alt="" className="todoItem__img" src={getCategoryImage(category)}/>{category}</p>
                </span>
                </div>
                <div className="col-3 todoItem__desc">
                    <p>{activeNote}</p>
                </div>
                <div className="col-3 todoItem__desc">
                    <p>{archivedNote}</p>
                </div>
            </div>

        </>
    );
};

export default CategoryItem;
