import React from 'react'
import {Link} from 'react-router-dom'
import './getStarted.css'
import Button from '../../components/button/button.jsx'

const Start = () => {


    return (
        <div id="swup" className="start-cont transition-fade">
            <div className="content-1">
                <div className="content-1-1"></div>
                <div className="content-1-2">
                    <Button/>
                </div>
            </div>
            <div className="content-2">world</div>
        </div>
    )
}

export default Start