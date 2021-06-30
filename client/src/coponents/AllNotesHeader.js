import React from 'react';

const AllNotesHeader = () => {
    return (
        <div className="row header">
            <div className="col-6">
                <h6>Note category</h6>
            </div>
            <div className="col-3">
                <h6>Active</h6>
            </div>
            <div className="col-3">
                <h6>Archived</h6>
            </div>
        </div>
    );
};

export default AllNotesHeader;
