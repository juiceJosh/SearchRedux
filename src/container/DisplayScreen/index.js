import React, { Component } from 'react'
import Header from './components/Header'
import {connect} from 'react-redux'
import {searchIn} from '../../redux/actions'
import Logbook  from './components/Logbook'
import AddUser from './components/AddModal'

// import {Searchbox} from './components/searchBox/search-box.component'

export class index extends Component {
    handleChange = (e) => {
        this.props.searchIn(e.target.value)
    }
    render() {
        
        return (
            <div className="mb-5">
                <Header className="mb-4"/>
                <div className="title">Anteriore Log Book</div>
                <input 
                    type="search" 
                    placeholder="Search Here"
                    className=" mb-2 input" 
                    name="user"
                    onChange={this.handleChange} 
                    value={this.props.value}
                />
                <Logbook />
                <AddUser />
            </div>
        )
    }
}

const mapStateToProps = state =>({  
    value: state.display.searchField
})

export default connect(mapStateToProps, {searchIn})(index)

//displayScreen