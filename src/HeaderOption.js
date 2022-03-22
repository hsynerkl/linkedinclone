import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core/'
const HeaderOption = ({ avatar, Icon, title }) => {
    return (
        <div className="HeaderOption">
            {Icon && <Icon />}
            {avatar && <Avatar style={{ height: '24px', width: '24px' }} />}
            <h3 className="HeaderOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption