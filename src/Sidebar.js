import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'

export const RecentItem = ({ topic }) => {
    return (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
}

const Sidebar = () => {



    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1647816733947-fa58811c75e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Hüseyin Erkal</h2>
                <h4>hsynerkl34@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p> Views on post</p>
                    <p className="sidebar__statNumber">2,443</p>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>

                    <RecentItem topic="React.js" />
                    <RecentItem topic="React.js" />
                    <RecentItem topic="React.js" />
                    <RecentItem topic="React.js" />


                </div>
            </div>
        </div>
    )
}

export default Sidebar