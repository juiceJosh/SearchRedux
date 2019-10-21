import React, { Component } from 'react'
import {connect} from 'react-redux'
import {delete_Log} from '../../../../redux/actions'

import './styles.scss'


export class index extends Component {
    
    handleDelete(infoId) {
        this.props.delete_Log(infoId)
        console.log(infoId)
    }
    render() {
        const data = this.props.filteredUser

        const logList = data.length ? (
            data.map(info => {
                    return(
                        <div key={info.id} className="workforce-detail">
                            <button className="delBtn" onClick={this.handleDelete.bind(this, info.id)}>x</button>
                            <div className="num">
                               Username: {info.user}
                            </div>
                            <div>
                                Password: {info.password}
                            </div>
                            <div className="location">
                                Favourite Food: <br/>
                                {info.food}
                            </div>
                        </div>
                    )
                })
            ) : (
                <p> No one has logged in yet! </p>
            )
        return (
            <div className="container">
                
                <div className="workforce-container">{logList}</div>
            </div>
        )
    }
}

const mapStateToProps = filteredUser =>({  
    filteredUser: filteredUser.filteredUser
})

export default connect(mapStateToProps, {delete_Log})(index)
