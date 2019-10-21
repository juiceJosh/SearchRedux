import React, { Component } from 'react'
import logo from '../../../../assets/Logo/logo.png'
import name from '../../../../assets/Logo/logo-name.png'

import './headerStyles.scss'


class index extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo-container">
                    <img src={logo} className="logo" alt='' />
                    <img src={name} className="name" alt='' />
                </div>
            </div>
        )
    }
}

export default index
