import React from 'react'
import Nav from './Nav'
import "./App.css"
import { useLocation } from "react-router";

function Index() {
    const location = useLocation();
    return (
        <>
            {!location.pathname.includes("landing") && <Nav />}
           
        </>
    )
}

export default Index
