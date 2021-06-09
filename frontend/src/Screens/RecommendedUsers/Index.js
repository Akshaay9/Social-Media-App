import React from 'react'
import "./App.css"
import RecommendedUsers from './RecommendedUsers'
function Index() {
    return (
        <div className="recommended-user-container">
            <h4>Recommender User's</h4>
            <RecommendedUsers/>
        </div>
    )
}

export default Index
