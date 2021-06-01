import React from 'react'
import LeftSideBar from './LeftSideBar'
import "./App.css"
import LeftUser from './LeftUser'

function index() {
    return (
        <div>
            <LeftUser/>
            <LeftSideBar/>
        </div>
    )
}

export default index
