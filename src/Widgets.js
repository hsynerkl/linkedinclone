import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export const NewsArticle = ({ heading, subtitle }) => {
    return (
        <div className="widgets__article">
            <div className="widgets__article__left">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__article__right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}


const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            <NewsArticle heading="PAPA React is Back" subtitle="Top news - 9099 readers" />
            <NewsArticle heading="PAPA React is Back" subtitle="Top news - 9099 readers" />
            <NewsArticle heading="PAPA React is Back" subtitle="Top news - 9099 readers" />
            <NewsArticle heading="PAPA React is Back" subtitle="Top news - 9099 readers" />
            <NewsArticle heading="PAPA React is Back" subtitle="Top news - 9099 readers" />
            <NewsArticle heading="PAPA React is Back" subtitle="Top news - 9099 readers" />
        </div>
    )
}

export default Widgets