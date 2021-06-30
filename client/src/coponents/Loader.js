import React from 'react'
import "./loader.scss"


export const Loader = () => {
    return (
        <div className='row justify-content-md-center'>
            <div className="col col-md-1">
                <div className="lds-hourglass"></div>
            </div>
        </div>
    )
}
